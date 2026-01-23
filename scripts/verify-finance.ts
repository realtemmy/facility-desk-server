import prisma from "../src/lib/prisma";
import { MaintenanceService } from "../src/modules/maintenance/maintenance.service";
import { CostCenterService } from "../src/modules/finance/cost-center.service";
import { CreateMaintenanceDto } from "../src/modules/maintenance/dto/create-maintenance.dto";
import { Prisma } from "../src/generated/prisma";

async function main() {
  console.log("🚀 Starting Finance & Budget Logic Verification...");

  const maintenanceService = new MaintenanceService();
  const costCenterService = new CostCenterService();

  // 1. Setup Cost Center (Over Budget)
  const ccOver = await prisma.costCenter.create({
    data: {
      code: `CC-OVER-${Date.now()}`,
      name: "Over Budget Department",
      fiscalYear: 2025,
      budgetLimit: 1000,
      budgetSpent: 1500, // Already exceeded
    },
  });
  console.log("✅ Created CostCenter (Over Budget):", ccOver.id);

  // 2. Setup Cost Center (Under Budget)
  const ccUnder = await prisma.costCenter.create({
    data: {
      code: `CC-UNDER-${Date.now()}`,
      name: "Rich Department",
      fiscalYear: 2025,
      budgetLimit: 5000,
      budgetSpent: 100, // Safe
    },
  });
  console.log("✅ Created CostCenter (Under Budget):", ccUnder.id);

  // 3. Setup Dependencies (Site, Requester)
  const site = await prisma.site.create({
    data: {
      name: `Finance Test Site ${Date.now()}`,
      address: { create: { street: "Wall St", city: "NY", state: "Lagos" } },
    },
  });
  const complex = await prisma.complex.create({
    data: {
      name: `Finance Complex ${Date.now()}`,
      code: `CPX-FIN-${Date.now()}`,
      siteId: site.id,
    },
  });

  // Need a requester
  // We can pick an existing user or create one
  let requester = await prisma.user.findFirst();
  if (!requester) {
    // Create minimal user? Too complex. Let's assume one exists or create minimal.
    // Skip for now if we can force it, but Validation might require it.
    // The DTO says requesterId is required.
    // Let's create one.
    const role = await prisma.role.upsert({
      where: { name: "USER" },
      update: {},
      create: { name: "USER" },
    });
    requester = await prisma.user.create({
      data: {
        email: `finance_test_${Date.now()}@test.com`,
        firstName: "Money",
        lastName: "bags",
        password: "hashedpassword",
        roleId: role.id,
      },
    });
  }

  // 4. Test: Create Maintenance linked to Over Budget CC (Should BLOCK)
  console.log("👉 Attempting to create Maintenance for Over Budget CC...");
  try {
    await maintenanceService.create({
      description: "Fixing Leak (Too Expensive)",
      siteId: complex.id,
      requesterId: requester.id,
      costCenterId: ccOver.id,
    } as CreateMaintenanceDto);
    throw new Error("❌ FAILED: Maintenance created despite budget overrun!");
  } catch (e: any) {
    if (e.message.includes("Budget Limit Exceeded")) {
      console.log("✅ SUCCESS: Blocked maintenance creation due to budget.");
    } else {
      throw e; // Unexpected error
    }
  }

  // 5. Test: Create Maintenance linked to Under Budget CC (Should SUCCESS)
  console.log("👉 Attempting to create Maintenance for Under Budget CC...");
  const maint = await maintenanceService.create({
    description: "Fixing Leak (Affordable)",
    siteId: complex.id,
    requesterId: requester.id,
    costCenterId: ccUnder.id,
  } as CreateMaintenanceDto);

  if (!maint) throw new Error("❌ Failed to create valid maintenance");
  console.log("✅ SUCCESS: Created maintenance within budget.");

  // Cleanup
  await prisma.maintenance.deleteMany({
    where: { description: { contains: "Fixing Leak" } },
  });
  await prisma.costCenter.delete({ where: { id: ccOver.id } });
  await prisma.costCenter.delete({ where: { id: ccUnder.id } });
  await prisma.complex.delete({ where: { id: complex.id } });
  await prisma.site.delete({ where: { id: site.id } });
  // Don't delete user as it might be shared
}

main()
  .catch((e) => {
    console.error("❌ Verification Failed:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

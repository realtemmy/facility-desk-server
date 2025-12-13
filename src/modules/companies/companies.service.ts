import prisma from "../../lib/prisma";
import { NotFoundError } from "../../errors";
import { CompanyType, Prisma } from "../../generated/prisma";

export class CompaniesService {
  async findAll(options: {
    page?: number;
    limit?: number;
    search?: string;
    type?: CompanyType;
  }) {
    const page = Math.max(1, options.page || 1);
    const limit = Math.min(100, Math.max(1, options.limit || 10));
    const skip = (page - 1) * limit;

    const where: Prisma.CompanyWhereInput = {};
    if (options.search) {
      where.OR = [
        { name: { contains: options.search, mode: "insensitive" } },
        { code: { contains: options.search, mode: "insensitive" } },
        { email: { contains: options.search, mode: "insensitive" } },
      ];
    }
    if (options.type) where.type = options.type;

    const [companies, total] = await Promise.all([
      prisma.company.findMany({
        where,
        include: { address: true },
        skip,
        take: limit,
        orderBy: { createdAt: "desc" },
      }),
      prisma.company.count({ where }),
    ]);

    return {
      companies,
      pagination: {
        page,
        limit,
        total,
        totalPages: Math.ceil(total / limit),
      },
    };
  }

  async findById(id: string) {
    const company = await prisma.company.findUnique({
      where: { id },
      include: { address: true, employees: true },
    });

    if (!company) {
      throw new NotFoundError("Company");
    }

    return company;
  }

  async create(data: {
    code: string;
    type?: CompanyType;
    name: string;
    description: string;
    phone?: string;
    alternativePhone?: string;
    email?: string;
    website?: string;
    address: {
      street: string;
      city: string;
      state: string;
      zipCode: string;
    };
  }) {
    const { address, ...companyData } = data;

    // Check if code exists
    const existing = await prisma.company.findUnique({
      where: { code: data.code },
    });
    if (existing) {
      throw new Error("Company with this code already exists");
    }

    const company = await prisma.company.create({
      data: {
        ...companyData,
        address: {
          create: address,
        },
      },
      include: { address: true },
    });

    return company;
  }

  async update(
    id: string,
    data: {
      name?: string;
      description?: string;
      type?: CompanyType;
      phone?: string;
      alternativePhone?: string;
      email?: string;
      website?: string;
      address?: {
        street?: string;
        city?: string;
        state?: string;
        zipCode?: string;
      };
    }
  ) {
    const { address, ...companyData } = data;

    const company = await prisma.company.findUnique({ where: { id } });
    if (!company) throw new NotFoundError("Company");

    const updateData: Prisma.CompanyUpdateInput = { ...companyData };

    if (address) {
      updateData.address = {
        update: address,
      };
    }

    const updatedCompany = await prisma.company.update({
      where: { id },
      data: updateData,
      include: { address: true },
    });

    return updatedCompany;
  }

  async delete(id: string) {
    // Check for related records if necessary, though Cascade delete might handle some things from the other side.
    // However, Address is required for Company. If we delete Company, should we delete Address?
    // The schema says `address Address @relation(...)`. It doesn't specify onDelete for the Address relation on Company side (it's the owner).
    // Typically addresses are bound to the entity. We should probably cleaning up address if it's 1:1 and exclusive.
    // Address has `companies Company[]` -> M:N or 1:N?
    // Schema: `addressId String` in Company -> 1 Address per Company.
    // Schema: `companies Company[]` in Address -> Address can belong to multiple Companies?
    // If Address is shared, we shouldn't delete it.
    // Given the schema `companies Company[]` on Address model, it seems addresses are reusable or at least can be referenced by multiple.
    // But practically, usually they are unique.
    // For now, simple delete of company.

    await prisma.company.delete({
      where: { id },
    });
  }
}

import prisma from "../../lib/prisma";
import { NotFoundError, ConflictError } from '../../errors';
import { EmployeeType, ServiceStatus, Prisma } from "../../generated/prisma";

export class EmployeesService {
  async findAll(options: {
    page?: number;
    limit?: number;
    search?: string;
    type?: EmployeeType;
    status?: ServiceStatus;
    companyId?: string;
  }) {
    const page = Math.max(1, options.page || 1);
    const limit = Math.min(100, Math.max(1, options.limit || 10));
    const skip = (page - 1) * limit;

    const where: Prisma.EmployeeWhereInput = {};

    if (options.search) {
      where.OR = [
        { code: { contains: options.search, mode: "insensitive" } },
        {
          user: {
            firstName: { contains: options.search, mode: "insensitive" },
          },
        },
        {
          user: { lastName: { contains: options.search, mode: "insensitive" } },
        },
        { user: { email: { contains: options.search, mode: "insensitive" } } },
      ];
    }

    if (options.type) where.type = options.type;
    if (options.status) where.status = options.status;
    if (options.companyId) where.companyId = options.companyId;

    const [employees, total] = await Promise.all([
      prisma.employee.findMany({
        where,
        include: {
          user: {
            select: {
              id: true,
              firstName: true,
              lastName: true,
              email: true,
            },
          },
          company: {
            select: {
              id: true,
              name: true,
            },
          },
        },
        skip,
        take: limit,
        orderBy: { code: "asc" }, // or createdAt
      }),
      prisma.employee.count({ where }),
    ]);

    return {
      employees,
      pagination: {
        page,
        limit,
        total,
        totalPages: Math.ceil(total / limit),
      },
    };
  }

  async findById(id: string) {
    const employee = await prisma.employee.findUnique({
      where: { id },
      include: {
        user: {
          select: {
            id: true,
            firstName: true,
            lastName: true,
            email: true,
          },
        },
        company: true,
        teams: true,
      },
    });

    if (!employee) {
      throw new NotFoundError("Employee");
    }

    return employee;
  }

  async create(data: {
    code: string;
    userId: string;
    companyId: string;
    type?: EmployeeType;
    status?: ServiceStatus;
  }) {
    // Validate relations
    const user = await prisma.user.findUnique({ where: { id: data.userId } });
    if (!user) throw new NotFoundError("User not found");

    const company = await prisma.company.findUnique({
      where: { id: data.companyId },
    });
    if (!company) throw new NotFoundError("Company not found");

    // Check unique code
    const existingCode = await prisma.employee.findUnique({
      where: { code: data.code },
    });
    if (existingCode) throw new ConflictError("Employee code already exists");

    // Check if user is already an employee? (Optional constraint depending on business logic. Usually one employee record per user PER company? Or globally?)
    // Schema doesn't enforce Unique user per employee. But usually 1:1 or 1:N.
    // Assuming multiple employment records allowed.

    const employee = await prisma.employee.create({
      data,
      include: {
        user: {
          select: {
            firstName: true,
            lastName: true,
            email: true,
          },
        },
        company: {
          select: {
            name: true,
          },
        },
      },
    });

    return employee;
  }

  async update(
    id: string,
    data: {
      type?: EmployeeType;
      status?: ServiceStatus;
      companyId?: string;
    }
  ) {
    const employee = await prisma.employee.findUnique({ where: { id } });
    if (!employee) throw new NotFoundError("Employee");

    if (data.companyId) {
      const company = await prisma.company.findUnique({
        where: { id: data.companyId },
      });
      if (!company) throw new NotFoundError("Company not found");
    }

    const updatedEmployee = await prisma.employee.update({
      where: { id },
      data,
      include: {
        user: true,
        company: true,
      },
    });

    return updatedEmployee;
  }

  async delete(id: string) {
    // Check constraints if needed
    await prisma.employee.delete({
      where: { id },
    });
  }
}

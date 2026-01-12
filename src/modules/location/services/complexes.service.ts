import { NotFoundError } from "../../../errors";
import prisma from "../../../lib/prisma";
import {
  CreateComplexDto,
  QueryComplexDto,
  PaginatedComplexResponseDto,
  ComplexResponseDto,
  UpdateComplexDto,
} from "../dto/complex.dto";

export class ComplexesService {
  async findAll(query: QueryComplexDto): Promise<PaginatedComplexResponseDto> {
    const {
      condition,
      criticality,
      siteId,
      status,
      search,
      page = 1,
      limit = 10,
      sortOrder = "desc",
      sortBy = "createdAt",
    } = query;

    const whereClause: any = {
      ...(condition && { condition }),
      ...(criticality && { criticality }),
      ...(status && { status }),
      ...(siteId && { siteId }),
    };

    if (search) {
      whereClause.OR = [
        { code: { contains: search, mode: "insensitive" } },
        { name: { contains: search, mode: "insensitive" } },
        { description: { contains: search, mode: "insensitive" } },
      ];
    }

    // Use Promise.all instead of transaction to avoid P2028 timeout
    const [count, complexes] = await Promise.all([
      prisma.complex.count({ where: whereClause }),
      prisma.complex.findMany({
        where: whereClause,
        take: limit,
        skip: (page - 1) * limit,
        orderBy: { [sortBy]: sortOrder },
        include: {
          buildings: {
            select: {
              id: true,
              code: true,
              name: true,
            },
          },
          photos: {
            select: {
              id: true,
              url: true,
            },
          },
        },
      }),
    ]);

    return {
      data: complexes as ComplexResponseDto[],
      pagination: {
        page,
        limit,
        total: count,
        totalPages: Math.ceil(count / limit),
      },
    };
  }

  async findById(id: string): Promise<ComplexResponseDto> {
    const complex = await prisma.complex.findUnique({
      where: { id },
      include: {
        buildings: {
          select: {
            id: true,
            code: true,
            name: true,
          },
        },
        site: {
          select: {
            id: true,
            name: true,
          },
        },
        photos: {
          select: {
            id: true,
            url: true,
          },
        },
      },
    });

    if (!complex) throw new NotFoundError("Complex");

    return complex as ComplexResponseDto;
  }

  async exists(id: string): Promise<boolean> {
    const complex = await prisma.complex.findUnique({ where: { id } });
    return !!complex;
  }

  async create(data: CreateComplexDto): Promise<ComplexResponseDto> {
    const { photoIds, siteId, ...complexData } = data;
    const site = await prisma.site.findUnique({ where: { id: siteId } });
    if (!site) throw new NotFoundError("Site");

    const complex = await prisma.complex.create({
      data: {
        ...complexData,
        siteId,
      },
      include: {
        buildings: {
          select: {
            id: true,
            code: true,
            name: true,
          },
        },
        photos: {
          select: {
            id: true,
            url: true,
          },
        },
      },
    });

    return complex as ComplexResponseDto;
  }

  async update(
    id: string,
    data: UpdateComplexDto
  ): Promise<ComplexResponseDto> {
    const {} = data;
    const complex = await prisma.complex.findUnique({ where: { id } });
    if (!complex) throw new NotFoundError("Complex");

    // Check for siteId
    if (data.siteId) {
      const site = await prisma.site.findUnique({ where: { id: data.siteId } });
      if (!site) throw new NotFoundError("Site");
    }

    const updated = await prisma.complex.update({
      where: { id },
      data,
    });

    return updated as ComplexResponseDto;
  }

  async delete(id: string): Promise<void> {
    const complex = await prisma.complex.findUnique({ where: { id } });
    if (!complex) throw new NotFoundError("Complex");

    await prisma.complex.delete({ where: { id } });
  }
}

import { NotFoundError } from "../../../errors";
import prisma from "../../../lib/prisma";
import {
  CreateUnitDto,
  QueryUnitDto,
  PaginatedUnitResponseDto,
  UnitResponseDto,
  UpdateUnitDto,
} from "../dto/unit.dto";
import { FloorsService } from "./floors.service";

const floorsService = new FloorsService();

export class UnitsService {
  async findAll(query: QueryUnitDto): Promise<PaginatedUnitResponseDto> {
    const {
      floorId,
      search,
      page = 1,
      limit = 10,
      sortOrder = "desc",
      sortBy = "createdAt",
    } = query;

    const whereClause: any = {
      ...(floorId && { floorId }),
    };

    if (search) {
      whereClause.OR = [
        { code: { contains: search, mode: "insensitive" } },
        { name: { contains: search, mode: "insensitive" } },
      ];
    }

    const [count, units] = await prisma.$transaction([
      prisma.unit.count({ where: whereClause }),
      prisma.unit.findMany({
        where: whereClause,
        take: limit,
        skip: (page - 1) * limit,
        orderBy: { [sortBy]: sortOrder },
        include: {
          floor: {
            select: {
              id: true,
              code: true,
              name: true,
              level: true,
            },
          },
          rooms: {
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
      data: units as UnitResponseDto[],
      pagination: {
        page,
        limit,
        total: count,
        totalPages: Math.ceil(count / limit),
      },
    };
  }

  async findById(id: string): Promise<UnitResponseDto> {
    const unit = await prisma.unit.findUnique({
      where: { id },
      include: {
        floor: {
          select: {
            id: true,
            code: true,
            name: true,
            level: true,
          },
        },
        rooms: {
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

    if (!unit) throw new NotFoundError("Unit");

    return unit as UnitResponseDto;
  }

  async create(data: CreateUnitDto): Promise<UnitResponseDto> {
    // check if floor exists
    const floor = await floorsService.findById(data.floorId);
    if (!floor) {
      throw new NotFoundError("Floor");
    }

    const { photoIds, ...unitData } = data;

    const unit = await prisma.unit.create({
      data: {
        ...unitData,
        ...(photoIds && {
          photos: {
            connect: photoIds.map((id) => ({ id })),
          },
        }),
      },
    });

    return unit as UnitResponseDto;
  }

  async update(id: string, data: UpdateUnitDto): Promise<UnitResponseDto> {
    const unit = await prisma.unit.findUnique({ where: { id } });
    if (!unit) throw new NotFoundError("Unit");

    const updated = await prisma.unit.update({
      where: { id },
      data,
      include: {
        floor: {
          select: {
            id: true,
            code: true,
            name: true,
            level: true,
          },
        },
        rooms: {
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

    return updated as UnitResponseDto;
  }

  async delete(id: string): Promise<void> {
    const unit = await prisma.unit.findUnique({ where: { id } });
    if (!unit) throw new NotFoundError("Unit");

    await prisma.unit.delete({ where: { id } });
  }
}

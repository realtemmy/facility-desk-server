import { NotFoundError } from "../../../errors";
import prisma from "../../../lib/prisma";
import {
  CreateSpaceDto,
  QuerySpaceDto,
  PaginatedSpaceResponseDto,
  SpaceResponseDto,
  UpdateSpaceDto,
} from "../dto/space.dto";

export class SpacesService {
  async findAll(query: QuerySpaceDto): Promise<PaginatedSpaceResponseDto> {
    const {
      floorId,
      zoneId,
      use,
      search,
      page = 1,
      limit = 10,
      sortOrder = "desc",
      sortBy = "createdAt",
    } = query;

    const whereClause: any = {
      ...(floorId && { floorId }),

      ...(zoneId && { zoneId }),
      ...(use && { use }),
    };

    if (search) {
      whereClause.OR = [
        { code: { contains: search, mode: "insensitive" } },
        { name: { contains: search, mode: "insensitive" } },
      ];
    }

    const [count, rooms] = await prisma.$transaction([
      prisma.space.count({ where: whereClause }),
      prisma.space.findMany({
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
          zone: {
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
      data: rooms as SpaceResponseDto[],
      pagination: {
        page,
        limit,
        total: count,
        totalPages: Math.ceil(count / limit),
      },
    };
  }

  async findById(id: string): Promise<SpaceResponseDto> {
    const space = await prisma.space.findUnique({
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
        zone: {
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

    if (!space) throw new NotFoundError("Space");

    return space as SpaceResponseDto;
  }

  async create(data: CreateSpaceDto): Promise<SpaceResponseDto> {
    const { photoIds, ...spaceData } = data;

    const space = await prisma.space.create({
      data: {
        ...spaceData,
        ...(photoIds && {
          photos: {
            connect: photoIds.map((id) => ({ id })),
          },
        }),
      },
      include: {
        floor: {
          select: {
            id: true,
            code: true,
            name: true,
            level: true,
          },
        },
        zone: {
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

    return space as SpaceResponseDto;
  }

  async update(id: string, data: UpdateSpaceDto): Promise<SpaceResponseDto> {
    const space = await prisma.space.findUnique({ where: { id } });
    if (!space) throw new NotFoundError("Space");

    const updated = await prisma.space.update({
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
        zone: {
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

    return updated as SpaceResponseDto;
  }

  async delete(id: string): Promise<void> {
    const space = await prisma.space.findUnique({ where: { id } });
    if (!space) throw new NotFoundError("Space");

    await prisma.space.delete({ where: { id } });
  }
}

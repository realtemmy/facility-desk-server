import { NotFoundError } from "../../../errors";
import prisma from "../../../lib/prisma";
import {
  CreateRoomDto,
  QueryRoomDto,
  PaginatedRoomResponseDto,
  RoomResponseDto,
  UpdateRoomDto,
} from "../dto/room.dto";

export class RoomsService {
  async findAll(query: QueryRoomDto): Promise<PaginatedRoomResponseDto> {
    const {
      floorId,
      unitId,
      use,
      search,
      page = 1,
      limit = 10,
      sortOrder = "desc",
      sortBy = "createdAt",
    } = query;

    const whereClause: any = {
      ...(floorId && { floorId }),
      ...(unitId && { unitId }),
      ...(use && { use }),
    };

    if (search) {
      whereClause.OR = [
        { code: { contains: search, mode: "insensitive" } },
        { name: { contains: search, mode: "insensitive" } },
      ];
    }

    const [count, rooms] = await prisma.$transaction([
      prisma.room.count({ where: whereClause }),
      prisma.room.findMany({
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
          unit: {
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
      data: rooms as RoomResponseDto[],
      pagination: {
        page,
        limit,
        total: count,
        totalPages: Math.ceil(count / limit),
      },
    };
  }

  async findById(id: string): Promise<RoomResponseDto> {
    const room = await prisma.room.findUnique({
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
        unit: {
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

    if (!room) throw new NotFoundError("Room");

    return room as RoomResponseDto;
  }

  async create(data: CreateRoomDto): Promise<RoomResponseDto> {
    const { photoIds, ...roomData } = data;

    const room = await prisma.room.create({
      data: {
        ...roomData,
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
        unit: {
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

    return room as RoomResponseDto;
  }

  async update(id: string, data: UpdateRoomDto): Promise<RoomResponseDto> {
    const room = await prisma.room.findUnique({ where: { id } });
    if (!room) throw new NotFoundError("Room");

    const updated = await prisma.room.update({
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
        unit: {
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

    return updated as RoomResponseDto;
  }

  async delete(id: string): Promise<void> {
    const room = await prisma.room.findUnique({ where: { id } });
    if (!room) throw new NotFoundError("Room");

    await prisma.room.delete({ where: { id } });
  }
}

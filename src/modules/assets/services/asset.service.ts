import { NotFoundError } from "../../../errors";
import prisma from "../../../lib/prisma";
import {
  CreateAssetDto,
  QueryAssetDto,
  PaginatedAssetResponseDto,
  AssetResponseDto,
  UpdateAssetDto,
} from "../dto/asset.dto";
import { AssetSubCategoryService } from "./asset-sub-category.service";

const assetSubCategoryService = new AssetSubCategoryService();

export class AssetService {
  async findAll(query: QueryAssetDto): Promise<PaginatedAssetResponseDto> {
    const {
      subCategoryId,
      categoryId,
      search,
      page = 1,
      limit = 10,
      sortOrder = "desc",
      sortBy = "createdAt",
    } = query;

    const whereClause: any = {
      ...(subCategoryId && { subCategoryId }),
      ...(categoryId && {
        subCategory: {
          categoryId,
        },
      }),
    };

    if (search) {
      whereClause.OR = [
        { name: { contains: search, mode: "insensitive" } },
        { description: { contains: search, mode: "insensitive" } },
      ];
    }

    const [count, assets] = await prisma.$transaction([
      prisma.asset.count({ where: whereClause }),
      prisma.asset.findMany({
        where: whereClause,
        take: limit,
        skip: (page - 1) * limit,
        orderBy: { [sortBy]: sortOrder },
        include: {
          subCategory: {
            select: {
              id: true,
              name: true,
              description: true,
              category: {
                select: {
                  id: true,
                  name: true,
                  type: true,
                },
              },
            },
          },
        },
      }),
    ]);

    return {
      data: assets as AssetResponseDto[],
      pagination: {
        page,
        limit,
        total: count,
        totalPages: Math.ceil(count / limit),
      },
    };
  }

  async findById(id: string): Promise<AssetResponseDto> {
    const asset = await prisma.asset.findUnique({
      where: { id },
      include: {
        subCategory: {
          select: {
            id: true,
            name: true,
            description: true,
            category: {
              select: {
                id: true,
                name: true,
                type: true,
              },
            },
          },
        },
      },
    });

    if (!asset) throw new NotFoundError("Asset");

    return asset as AssetResponseDto;
  }

  async create(data: CreateAssetDto): Promise<AssetResponseDto> {
    // Check if subcategory exists
    const subCategory = await assetSubCategoryService.findById(data.subCategoryId);
    if (!subCategory) {
      throw new NotFoundError("AssetSubCategory");
    }

    const asset = await prisma.asset.create({
      data,
      include: {
        subCategory: {
          select: {
            id: true,
            name: true,
            description: true,
            category: {
              select: {
                id: true,
                name: true,
                type: true,
              },
            },
          },
        },
      },
    });

    return asset as AssetResponseDto;
  }

  async update(id: string, data: UpdateAssetDto): Promise<AssetResponseDto> {
    const asset = await prisma.asset.findUnique({ where: { id } });
    if (!asset) throw new NotFoundError("Asset");

    if (data.subCategoryId) {
      const subCategory = await assetSubCategoryService.findById(data.subCategoryId);
      if (!subCategory) {
        throw new NotFoundError("AssetSubCategory");
      }
    }

    const updated = await prisma.asset.update({
      where: { id },
      data,
      include: {
        subCategory: {
          select: {
            id: true,
            name: true,
            description: true,
            category: {
              select: {
                id: true,
                name: true,
                type: true,
              },
            },
          },
        },
      },
    });

    return updated as AssetResponseDto;
  }

  async delete(id: string): Promise<void> {
    const asset = await prisma.asset.findUnique({ where: { id } });
    if (!asset) throw new NotFoundError("Asset");

    await prisma.asset.delete({ where: { id } });
  }
}


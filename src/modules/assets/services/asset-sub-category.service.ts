import { NotFoundError } from "../../../errors";
import prisma from "../../../lib/prisma";
import {
  CreateAssetSubCategoryDto,
  QueryAssetSubCategoryDto,
  PaginatedAssetSubCategoryResponseDto,
  AssetSubCategoryResponseDto,
  UpdateAssetSubCategoryDto,
} from "../dto/asset-sub-category.dto";
import { AssetCategoryService } from "./asset-category.service";

const assetCategoryService = new AssetCategoryService();

export class AssetSubCategoryService {
  async findAll(query: QueryAssetSubCategoryDto): Promise<PaginatedAssetSubCategoryResponseDto> {
    const {
      categoryId,
      search,
      page = 1,
      limit = 10,
      sortOrder = "desc",
      sortBy = "createdAt",
    } = query;

    const whereClause: any = {
      ...(categoryId && { categoryId }),
    };

    if (search) {
      whereClause.OR = [
        { name: { contains: search, mode: "insensitive" } },
        { description: { contains: search, mode: "insensitive" } },
      ];
    }

    const [count, subCategories] = await prisma.$transaction([
      prisma.assetSubCategory.count({ where: whereClause }),
      prisma.assetSubCategory.findMany({
        where: whereClause,
        take: limit,
        skip: (page - 1) * limit,
        orderBy: { [sortBy]: sortOrder },
        include: {
          category: {
            select: {
              id: true,
              name: true,
              type: true,
            },
          },
          assets: {
            select: {
              id: true,
              name: true,
              description: true,
            },
          },
        },
      }),
    ]);

    return {
      data: subCategories as AssetSubCategoryResponseDto[],
      pagination: {
        page,
        limit,
        total: count,
        totalPages: Math.ceil(count / limit),
      },
    };
  }

  async findById(id: string): Promise<AssetSubCategoryResponseDto> {
    const subCategory = await prisma.assetSubCategory.findUnique({
      where: { id },
      include: {
        category: {
          select: {
            id: true,
            name: true,
            type: true,
          },
        },
        assets: {
          select: {
            id: true,
            name: true,
            description: true,
          },
        },
      },
    });

    if (!subCategory) throw new NotFoundError("AssetSubCategory");

    return subCategory as AssetSubCategoryResponseDto;
  }

  async create(data: CreateAssetSubCategoryDto): Promise<AssetSubCategoryResponseDto> {
    // Check if category exists
    const category = await assetCategoryService.findById(data.categoryId);
    if (!category) {
      throw new NotFoundError("AssetCategory");
    }

    const subCategory = await prisma.assetSubCategory.create({
      data,
      include: {
        category: {
          select: {
            id: true,
            name: true,
            type: true,
          },
        },
        assets: {
          select: {
            id: true,
            name: true,
            description: true,
          },
        },
      },
    });

    return subCategory as AssetSubCategoryResponseDto;
  }

  async update(
    id: string,
    data: UpdateAssetSubCategoryDto
  ): Promise<AssetSubCategoryResponseDto> {
    const subCategory = await prisma.assetSubCategory.findUnique({ where: { id } });
    if (!subCategory) throw new NotFoundError("AssetSubCategory");

    if (data.categoryId) {
      const category = await assetCategoryService.findById(data.categoryId);
      if (!category) {
        throw new NotFoundError("AssetCategory");
      }
    }

    const updated = await prisma.assetSubCategory.update({
      where: { id },
      data,
      include: {
        category: {
          select: {
            id: true,
            name: true,
            type: true,
          },
        },
        assets: {
          select: {
            id: true,
            name: true,
            description: true,
          },
        },
      },
    });

    return updated as AssetSubCategoryResponseDto;
  }

  async delete(id: string): Promise<void> {
    const subCategory = await prisma.assetSubCategory.findUnique({ where: { id } });
    if (!subCategory) throw new NotFoundError("AssetSubCategory");

    await prisma.assetSubCategory.delete({ where: { id } });
  }
}


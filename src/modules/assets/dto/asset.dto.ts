import { AssetCategoryType } from "../../../generated/prisma";

/**
 * DTO for creating a new asset
 */
export interface CreateAssetDto {
  name: string;
  categoryId: string;
  description?: string;
}

/**
 * DTO for updating an existing asset
 */
export interface UpdateAssetDto {
  name?: string;
  categoryId?: string;
  description?: string;
}

/**
 * DTO for asset response
 */
export interface AssetResponseDto {
  id: string;
  name: string;
  description?: string | null;
  categoryId: string;
  createdAt: Date;
  updatedAt: Date;

  // Related data (optional for expanded responses)
  category?: {
    id: string;
    name: string;
    description?: string | null;
    type: AssetCategoryType;
  };

  space?: {
    id: string;
    code: string;
    name: string;
  };

  parentSystem?: {
    id: string;
    name: string;
  };

  childAssets?: {
    id: string;
    name: string;
  }[];
}

/**
 * DTO for querying assets
 */
export interface QueryAssetDto {
  page?: number;
  limit?: number;
  sortBy?: "name" | "createdAt";
  sortOrder?: "asc" | "desc";
  categoryId?: string;

  spaceId?: string;
  parentSystemId?: string;
  search?: string;
}

/**
 * DTO for paginated asset list response
 */
export interface PaginatedAssetResponseDto {
  data: AssetResponseDto[];
  pagination: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  };
}

import { AssetCategoryType } from "../../../generated/prisma";

/**
 * DTO for creating a new asset category
 */
export interface CreateAssetCategoryDto {
  name: string;
  type: AssetCategoryType;
  description?: string;
}

/**
 * DTO for updating an existing asset category
 */
export interface UpdateAssetCategoryDto {
  name?: string;
  type?: AssetCategoryType;
  description?: string;
}

/**
 * DTO for asset category response
 */
export interface AssetCategoryResponseDto {
  id: string;
  name: string;
  type: AssetCategoryType;
  description?: string | null;
  createdAt: Date;
  updatedAt: Date;
  
  // Related data (optional for expanded responses)
  subCategories?: {
    id: string;
    name: string;
    description?: string | null;
  }[];
}

/**
 * DTO for querying asset categories
 */
export interface QueryAssetCategoryDto {
  page?: number;
  limit?: number;
  sortBy?: 'name' | 'type' | 'createdAt';
  sortOrder?: 'asc' | 'desc';
  type?: AssetCategoryType;
  search?: string;
}

/**
 * DTO for paginated asset category list response
 */
export interface PaginatedAssetCategoryResponseDto {
  data: AssetCategoryResponseDto[];
  pagination: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  };
}


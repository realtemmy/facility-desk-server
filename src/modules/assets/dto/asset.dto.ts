/**
 * DTO for creating a new asset
 */
export interface CreateAssetDto {
  name: string;
  subCategoryId: string;
  description?: string;
}

/**
 * DTO for updating an existing asset
 */
export interface UpdateAssetDto {
  name?: string;
  subCategoryId?: string;
  description?: string;
}

/**
 * DTO for asset response
 */
export interface AssetResponseDto {
  id: string;
  name: string;
  description?: string | null;
  subCategoryId: string;
  createdAt: Date;
  updatedAt: Date;
  
  // Related data (optional for expanded responses)
  subCategory?: {
    id: string;
    name: string;
    description?: string | null;
    category?: {
      id: string;
      name: string;
      type: string;
    };
  };
}

/**
 * DTO for querying assets
 */
export interface QueryAssetDto {
  page?: number;
  limit?: number;
  sortBy?: 'name' | 'createdAt';
  sortOrder?: 'asc' | 'desc';
  subCategoryId?: string;
  categoryId?: string;
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


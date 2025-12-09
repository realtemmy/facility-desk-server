/**
 * DTO for creating a new asset subcategory
 */
export interface CreateAssetSubCategoryDto {
  name: string;
  categoryId: string;
  description?: string;
}

/**
 * DTO for updating an existing asset subcategory
 */
export interface UpdateAssetSubCategoryDto {
  name?: string;
  categoryId?: string;
  description?: string;
}

/**
 * DTO for asset subcategory response
 */
export interface AssetSubCategoryResponseDto {
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
    type: string;
  };
  
  assets?: {
    id: string;
    name: string;
    description?: string | null;
  }[];
}

/**
 * DTO for querying asset subcategories
 */
export interface QueryAssetSubCategoryDto {
  page?: number;
  limit?: number;
  sortBy?: 'name' | 'createdAt';
  sortOrder?: 'asc' | 'desc';
  categoryId?: string;
  search?: string;
}

/**
 * DTO for paginated asset subcategory list response
 */
export interface PaginatedAssetSubCategoryResponseDto {
  data: AssetSubCategoryResponseDto[];
  pagination: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  };
}


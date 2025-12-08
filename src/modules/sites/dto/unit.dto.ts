/**
 * DTO for creating a new unit
 */
export interface CreateUnitDto {
  code: string;
  name: string;
  floorId: string;
  photoIds?: string[];
}

/**
 * DTO for updating an existing unit
 */
export interface UpdateUnitDto {
  name?: string;
  floorId?: string;
}

/**
 * DTO for unit response
 */
export interface UnitResponseDto {
  id: string;
  code: string;
  name: string;
  floorId: string;
  createdAt: Date;
  updatedAt: Date;
  
  // Related data (optional for expanded responses)
  floor?: {
    id: string;
    code: string;
    name: string;
    level: number;
  };
  
  rooms?: {
    id: string;
    code: string;
    name: string;
  }[];
  
  photos?: {
    id: string;
    url: string;
  }[];
}

/**
 * DTO for querying units
 */
export interface QueryUnitDto {
  page?: number;
  limit?: number;
  sortBy?: 'name' | 'code' | 'createdAt';
  sortOrder?: 'asc' | 'desc';
  floorId?: string;
  search?: string;
}

/**
 * DTO for paginated unit list response
 */
export interface PaginatedUnitResponseDto {
  data: UnitResponseDto[];
  pagination: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  };
}

import { Condition, Criticality, ServiceStatus } from "../../../generated/prisma";

/**
 * DTO for creating a new complex
 */
export interface CreateComplexDto {
  code: string;
  name: string;
  description?: string;
  address?: string;
  city?: string;
  state?: string;
  zip?: string;
  status?: ServiceStatus;
  condition?: Condition;
  criticality?: Criticality;
  totalBuildings?: number;
  photoIds?: string[];
}

/**
 * DTO for updating an existing complex
 */
export interface UpdateComplexDto {
  name?: string;
  description?: string;
  address?: string;
  status?: ServiceStatus;
  condition?: Condition;
  criticality?: Criticality;
}

/**
 * DTO for complex response
 */
export interface ComplexResponseDto {
  id: string;
  code: string;
  name: string;
  description?: string;
  address?: string;
  city?: string;
  state?: string;
  zip?: string;
  status: ServiceStatus;
  condition: Condition;
  criticality: Criticality;
  totalBuildings: number;
  createdAt: Date;
  updatedAt: Date;
  
  // Related data (optional for expanded responses)
  buildings?: {
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
 * DTO for querying complexes
 */
export interface QueryComplexDto {
  page?: number;
  limit?: number;
  sortBy?: 'name' | 'code' | 'createdAt' | 'condition' | 'criticality';
  sortOrder?: 'asc' | 'desc';
  condition?: Condition;
  criticality?: Criticality;
  status?: ServiceStatus;
  search?: string;
}

/**
 * DTO for paginated complex list response
 */
export interface PaginatedComplexResponseDto {
  data: ComplexResponseDto[];
  pagination: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  };
}

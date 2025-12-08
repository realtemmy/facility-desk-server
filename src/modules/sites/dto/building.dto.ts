import { Condition, Criticality, MainUse, ServiceStatus } from "../../../generated/prisma";

/**
 * DTO for creating a new building
 */
export interface CreateBuildingDto {
  name: string;
  code: string;
  mainUse?: MainUse;
  totalFloors?: number;
  address?: string;
  latitude?: number;
  longitude?: number;
  status?: ServiceStatus;
  condition?: Condition;
  criticality?: Criticality;
  complexId: string;
  calenderEntityId?: string;
  photoIds?: string[];
}

/**
 * DTO for updating an existing building
 */
export interface UpdateBuildingDto {
  name?: string;
  mainUse?: MainUse;
  address?: string;
  latitude?: number;
  longitude?: number;
  status?: ServiceStatus;
  condition?: Condition;
  criticality?: Criticality;
  calenderEntityId?: string;
}

/**
 * DTO for building response
 */
export interface BuildingResponseDto {
  id: string;
  name: string;
  code: string;
  mainUse: MainUse;
  totalFloors: number;
  address?: string;
  latitude?: number;
  longitude?: number;
  status: ServiceStatus;
  condition: Condition;
  criticality: Criticality;
  complexId: string;
  calenderEntityId?: string;
  createdAt: Date;
  updatedAt: Date;
  
  // Related data (optional for expanded responses)
  complex?: {
    id: string;
    code: string;
    name: string;
  };
  
  floors?: {
    id: string;
    code: string;
    name: string;
    level: number;
  }[];
  
  photos?: {
    id: string;
    url: string;
  }[];
  
  calenderEntity?: {
    id: string;
    name: string;
  };
}

/**
 * DTO for querying buildings
 */
export interface QueryBuildingDto {
  page?: number;
  limit?: number;
  sortBy?: 'name' | 'code' | 'createdAt' | 'mainUse' | 'condition' | 'criticality';
  sortOrder?: 'asc' | 'desc';
  complexId?: string;
  mainUse?: MainUse;
  condition?: Condition;
  criticality?: Criticality;
  status?: ServiceStatus;
  search?: string;
}

/**
 * DTO for paginated building list response
 */
export interface PaginatedBuildingResponseDto {
  data: BuildingResponseDto[];
  pagination: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  };
}

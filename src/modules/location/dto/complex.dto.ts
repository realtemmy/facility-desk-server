import {
  Availability,
  Condition,
  Criticality,
  ServiceStatus,
} from "../../../generated/prisma";

/**
 * DTO for creating a new complex
 */
export interface CreateComplexDto {
  code: string;
  name: string;
  availability?: Availability;
  status?: ServiceStatus;
  siteId: string;
  calenderEntityId?: string;
  address?: string;
  city?: string;
  zipCode?: string;
  condition?: Condition;
  criticality?: Criticality;
  totalBuildings?: number;
  totalFloors?: number;
  totalUnits?: number;
  totalRooms?: number;
  glazedArea?: number;
  cleanableArea?: number;
  coveredArea?: number;
  totalNetArea?: number;
  totalGrossArea?: number;
  totalHeatedVolume?: number;
  totalVolume?: number;

  photoIds?: string[];
}

/**
 * DTO for updating an existing complex
 */
export interface UpdateComplexDto {
  name?: string;
  availability?: Availability;
  status?: ServiceStatus;
  condition?: Condition;
  criticality?: Criticality;
  siteId?: string;
  calenderEntityId?: string;
  totalBuildings?: number;
  totalFloors?: number;
  totalUnits?: number;
  totalRooms?: number;
  glazedArea?: number;
  cleanableArea?: number;
  coveredArea?: number;
  totalNetArea?: number;
  totalGrossArea?: number;
  totalHeatedVolume?: number;
  totalVolume?: number;
}

/**
 * DTO for complex response
 */
export interface ComplexResponseDto {
  id: string;
  code: string;
  name: string;
  availability: Availability;
  address?: string;
  city?: string;
  zipCode?: string;
  status: ServiceStatus;
  condition: Condition;
  criticality: Criticality;
  totalBuildings: number;
  totalFloors: number;
  totalUnits: number;
  totalRooms: number;
  glazedArea: number;
  cleanableArea: number;
  coveredArea: number;
  totalNetArea: number;
  totalGrossArea: number;
  totalHeatedVolume: number;
  totalVolume: number;

  siteId?: string;
  calenderEntityId?: string;
  calenderEntity?: {
    id: string;
    name: string;
  };

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
  siteId?: string;
  page?: number;
  limit?: number;
  sortBy?: "name" | "code" | "createdAt" | "condition" | "criticality";
  sortOrder?: "asc" | "desc";
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

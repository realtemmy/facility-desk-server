import { Availability, ServiceStatus } from "../../../generated/prisma";
import { Decimal } from "../../../generated/prisma/runtime/client";

/**
 * DTO for creating a new unit
 */
export interface CreateUnitDto {
  code: string;
  name: string;
  availability?: Availability;
  status?: ServiceStatus;

  calenderEntityId?: string;
  complexId?: string;
  buildingId?: string;
  floorId: string;

  address?: string;
  city?: string;
  zipCode?: string;

  totalRooms?: number;
  glazedArea?: number;
  cleanableArea?: number;
  coveredArea?: number;
  totalNetArea?: number;
  totalGrossArea?: number;
  totalHeatedVolume?: number;
  totalVolume?: number;

  cadastralArea?: number;
  urbanSection?: string;
  sheet?: string;
  plot?: string;
  subordinate?: string;
  class?: number;
  size?: number;
  propertyRightsAndDuties?: string;
  cadastralIncome?: Decimal;
  censusArea?: string;
  subArea?: string;

  photoIds?: string[];
}

/**
 * DTO for updating an existing unit
 */

export type UpdateUnitDto = Omit<CreateUnitDto, "code">;
/**
 * DTO for unit response
 */
export interface UnitResponseDto extends CreateUnitDto {
  id: string;
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

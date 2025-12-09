import { Condition, Criticality, RoomUse, ServiceStatus } from "../../../generated/prisma";

/**
 * DTO for creating a new room
 */
export interface CreateRoomDto {
  name: string;
  code: string;
  use?: RoomUse;
  status?: ServiceStatus;

  condition?: Condition;
  criticality?: Criticality;

  calenderEntityId?: string;
  complexId?: string;
  buildingId?: string;
  floorId: string;
  unitId?: string;
  photoIds?: string[];

  glazedArea?: number;
  cleanableArea?: number;
  coveredArea?: number;
  totalNetArea?: number;
  totalGrossArea?: number;
  totalHeatedVolume?: number;
  totalVolume?: number;
}

/**
 * DTO for updating an existing room
 */

export type UpdateRoomDto = Omit<CreateRoomDto, "code">;

/**
 * DTO for room response
 */
export interface RoomResponseDto extends CreateRoomDto {
  id: string;
  // Related data (optional for expanded responses)
  floor?: {
    id: string;
    code: string;
    name: string;
    level: number;
  };
  
  unit?: {
    id: string;
    code: string;
    name: string;
  };
  
  photos?: {
    id: string;
    url: string;
  }[];
}

/**
 * DTO for querying rooms
 */
export interface QueryRoomDto {
  page?: number;
  limit?: number;
  sortBy?: 'name' | 'code' | 'createdAt' | 'use';
  sortOrder?: 'asc' | 'desc';
  floorId?: string;
  unitId?: string;
  use?: RoomUse;
  search?: string;
}

/**
 * DTO for paginated room list response
 */
export interface PaginatedRoomResponseDto {
  data: RoomResponseDto[];
  pagination: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  };
}

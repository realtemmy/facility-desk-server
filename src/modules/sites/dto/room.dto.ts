import { RoomUse } from "../../../generated/prisma";

/**
 * DTO for creating a new room
 */
export interface CreateRoomDto {
  name: string;
  code: string;
  use?: RoomUse;
  floorId: string;
  unitId?: string;
  photoIds?: string[];
}

/**
 * DTO for updating an existing room
 */
export interface UpdateRoomDto {
  name?: string;
  use?: RoomUse;
  floorId?: string;
  unitId?: string;
}

/**
 * DTO for room response
 */
export interface RoomResponseDto {
  id: string;
  name: string;
  code: string;
  use: RoomUse;
  floorId: string;
  unitId?: string;
  createdAt: Date;
  updatedAt: Date;
  
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

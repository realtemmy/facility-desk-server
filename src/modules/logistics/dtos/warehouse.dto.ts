import { State } from "../../../generated/prisma";

export interface CreateAddressDto {
  street: string;
  city: string;
  state: State;
  zipCode?: string;
  latitude?: number;
  longitude?: number;
}

export interface CreateWarehouseDto {
  name: string;
  description?: string;
  address: CreateAddressDto;
}

export interface UpdateWarehouseDto {
  name?: string;
  description?: string;
  address?: Partial<CreateAddressDto>;
}

import { UserStatus } from "../../../generated/prisma";

export interface UserResponse {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  status: UserStatus;
  roles: {
    id: string;
    name: string;
    description: string | null;
  }[];
  createdAt: Date;
}

export interface AuthResponse {
  user: UserResponse;
  accessToken: string;
}

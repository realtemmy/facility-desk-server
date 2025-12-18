// import { RoleName } from '../../generated/prisma'; // Removed enum

declare global {
  namespace Express {
    interface Request {
      user?: {
        id: string;
        email: string;
        firstName: string;
        lastName: string;
        status: string;
        roles: {
          id: string;
          name: string;
          isSystem: boolean;
          description: string | null;
        }[];
      };
    }
  }
}

export {};

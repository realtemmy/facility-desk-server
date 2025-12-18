import { Request, Response, NextFunction } from "express";
import prisma from "../lib/prisma";
// import { RoleName } from '../generated/prisma'; // Removed enum
import { ForbiddenError } from "../errors";

export const requireRole = (roles: string[]) => {
  return (req: Request, res: Response, next: NextFunction) => {
    try {
      // Check if user exists 
      if (!req.user) {
        throw new ForbiddenError("User not authenticated");
      }

      // Check if user has ANY of the required roles
      const userRoleNames = req.user.roles.map((r: any) => r.name);
      const hasRole = roles.some((role) => userRoleNames.includes(role));

      if (!hasRole) {
        throw new ForbiddenError(
          `Access denied. Required role: ${roles.join(" or ")}`
        );
      }

      next();
    } catch (error) {
      next(error);
    }
  };
};

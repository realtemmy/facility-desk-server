import { z } from "zod";

export const createSiteSchema = z.object({
  name: z.string().min(1, "Name is required"),
  address: z.object({
    street: z.string(),
    city: z.string(),
    state: z.string(),
    zipCode: z.string(),
    latitude: z.number().optional(),
    longitude: z.number().optional(),
  }),
  climateZone: z.string().optional(),
  description: z.string().optional(),
});

export const updateSiteSchema = createSiteSchema.partial();

export type CreateSiteDto = z.infer<typeof createSiteSchema>;
export type UpdateSiteDto = z.infer<typeof updateSiteSchema>;

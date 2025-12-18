import prisma from "../../../lib/prisma";
import { CreateSiteDto, UpdateSiteDto } from "../dto/site.dto";

export class SitesService {
  async create(data: CreateSiteDto) {
    return prisma.site.create({
      data,
    });
  }

  async findAll() {
    return prisma.site.findMany({
      include: {
        complexes: true,
      },
    });
  }

  async findOne(id: string) {
    return prisma.site.findUnique({
      where: { id },
      include: {
        complexes: true,
      },
    });
  }

  async update(id: string, data: UpdateSiteDto) {
    return prisma.site.update({
      where: { id },
      data,
    });
  }

  async remove(id: string) {
    return prisma.site.delete({
      where: { id },
    });
  }
}

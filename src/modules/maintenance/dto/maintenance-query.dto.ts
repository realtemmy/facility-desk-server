import { MaintenanceType, Status, Priority } from "../../../generated/prisma";

export interface MaintenanceQueryDto {
  type?: MaintenanceType;
  priority?: Priority;
  processStatus?: Status;
  siteId?: string;
  assetId?: string;
  requesterId?: string;
  assigneeId?: string;
  minDate?: string;
  maxDate?: string;
  page?: number;
  limit?: number;
}

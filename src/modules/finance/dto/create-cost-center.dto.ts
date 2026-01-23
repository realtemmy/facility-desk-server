export interface CreateCostCenterDto {
  code: string;
  name: string;
  description?: string;
  budgetLimit?: number;
  fiscalYear: number;
  validFrom?: string;
  validTo?: string;
}

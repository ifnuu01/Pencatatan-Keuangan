import { budgetService } from "../services/budgetService";
import { useCrud } from "./useCrud";

export function useBudget() {
  return useCrud({
    service: budgetService,
    entityName: "budgets",
    redirectPath: "/anggaran",
  });
}

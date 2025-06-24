import { recurringTransactionService } from "../services/recurringTransactionService";
import { useCrud } from "./useCrud";

export function useRecurringTransaction() {
  return useCrud({
    service: recurringTransactionService,
    entityName: "recurrings",
    redirectPath: "/recurring-transactions",
  });
}

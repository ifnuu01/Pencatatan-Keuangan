import { transactionService } from "../services/transactionService";
import { useCrud } from "./useCrud";

export function useTransaction() {
  return useCrud({
    service: transactionService,
    entityName: "transactions",
    redirectPath: "/transaksi",
  });
}

import { walletService } from "../services/WalletService";
import { useCrud } from "./useCrud";

export function useWallet() {
  return useCrud({
    service: walletService,
    entityName: "wallets",
    redirectPath: "/dompet",
  });
}

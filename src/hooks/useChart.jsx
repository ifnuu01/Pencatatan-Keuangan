import { chartService } from "../services/chartService";
import { useCrud } from "./useCrud";

export function useChart() {
  return useCrud({
    service: chartService,
    entityName: "charts",
    redirectPath: "/chart",
  });
}

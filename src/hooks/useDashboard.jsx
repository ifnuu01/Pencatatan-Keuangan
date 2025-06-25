import { dashboardService } from "../services/dashboardService";
import { useCrud } from "./useCrud";

export function useDashboard() {
  return useCrud({
    service: dashboardService,
    entityName: "dashboard",
    redirectPath: "/dashboard",
  });
}

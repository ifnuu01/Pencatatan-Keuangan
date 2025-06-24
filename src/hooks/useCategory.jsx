import { categoryService } from "../services/categoryService";
import { useCrud } from "./useCrud";

export function useCategory() {
  return useCrud({
    service: categoryService,
    entityName: "categories",
    redirectPath: "/kategori",
  });
}

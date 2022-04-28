import { api } from "./api";
import { CategoryDto } from "../../generated";
import { DeletedResult, PaginatedResult } from "./types";

export const CategoryApi = {
  getAll: async function (): Promise<PaginatedResult<CategoryDto>> {
    return api.get("/categories");
  },
  deleteById: async function (id: string): Promise<DeletedResult> {
    return api.delete(`/categories/${id}`);
  },
};

import { api } from "./api";
import { CategoryDto } from "../../../generated";
import { PaginatedResult } from "./types";

export const CategoryApi = {
  getAll: async function (): Promise<PaginatedResult<CategoryDto>> {
    return api.get("/categories");
  },
  deleteById: async function (id: string): Promise<number> {
    return api.delete(`/places/${id}`);
  },
};

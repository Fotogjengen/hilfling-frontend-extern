import { api } from "./api";
import { SecurityLevelDto } from "../../generated";
import { PaginatedResult } from "./types";

export const SecurityLevelApi = {
  getAll: async function (): Promise<PaginatedResult<SecurityLevelDto>> {
    return api.get("/security_levels");
  },
};

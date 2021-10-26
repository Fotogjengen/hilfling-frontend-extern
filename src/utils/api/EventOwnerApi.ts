import { api } from "./api";
import { EventOwnerDto } from "../../../generated";
import { PaginatedResult } from "./types";

export const EventOwnerApi = {
  getAll: async function (): Promise<PaginatedResult<EventOwnerDto>> {
    return api.get("/event_owners");
  },
};

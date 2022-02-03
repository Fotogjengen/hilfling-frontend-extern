import { api } from "./api";

export const SearchSuggestionsApi = {
  get: async function (search: string): Promise<string[]> {
    return api.get("/searchSuggestions/"+search).then(res => res.data);
  },

};

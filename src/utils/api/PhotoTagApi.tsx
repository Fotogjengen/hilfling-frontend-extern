import { api } from './api';
export const PhotoTagApi = {
  getAll: async function(): Promise<any> {
    return api.get('/photo_tags');
  }
};

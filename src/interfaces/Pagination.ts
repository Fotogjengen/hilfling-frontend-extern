export interface Pagination<T> {
  offset: number;
  limit: number;
  totalRecords: number;
  pageSize: number;
  totalPages: number;
  currentList: T[];
}

export interface PaginatedResult<T> {
    config: object;
    headers: object;
    request: any;
    status: number;
    statusText: string;
    data: {
        currentList: T[];
        limit: number;
        offset: number;
        pageSize: number;
        totalPages: number;
        totalRecords: number;
    };
}

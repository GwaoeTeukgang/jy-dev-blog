export interface ImageFormat {
    ext: string;
    url: string;
    mime: string;
    name: string;
    path: string | null;
    size: number;
    width: number;
    height: number;
}

export interface ImageInfo {
    url: string;
    formats: {
        large: ImageFormat;
        medium: ImageFormat;
        small: ImageFormat;
    }
}

export interface Response<T> {
    data: T
}

export interface PaginationResponse<T> {
    data: {
        data: T;
        meta: MetaPagination
    }
}

export interface MetaPagination {
    pagination: {
        page: number;
        pageSize: number;
        pageCount: number;
        total: number
    }
}


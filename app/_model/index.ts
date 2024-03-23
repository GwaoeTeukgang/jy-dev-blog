import {AxiosError, AxiosResponse} from "axios";

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

export interface PaginationReturnMap<T> {
    data: T;
    meta: MetaPagination
}

export interface ErrorMap {

}

export type ErrorResponse = AxiosError<ErrorMap>;

export type PaginationResponse<T> = AxiosResponse<PaginationReturnMap<T>>;

export interface MetaPagination {
    pagination: {
        page: number;
        pageSize: number;
        pageCount: number;
        total: number
    }
}


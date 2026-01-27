import { RESPONSE_CODE } from './constant';

export interface ApiResponse<T = any> {
    code: RESPONSE_CODE;
    message?: string;
    data: T;
}

export enum OrderByEnum {
    CREATE_TIME = 'createTime',
    LIKE = 'like',
    ORDER = 'order',
}

export enum OrderEnum {
    DESC = 'DESC',
    ASC = 'ASC',
}

export interface FetchListParams {
    page: number;
    pageSize: number;
    orderBy: OrderByEnum;
    order: OrderEnum;
}

export const PAGE_SIZE = 10;

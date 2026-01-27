import { OrderByEnum, OrderEnum } from './interface';

export enum RESPONSE_CODE {
    /** 成功 */
    SUCCESS = '00000',
    /** 未登录 */
    UNAUTHORIZED = 'A0001',
}

/**
 * 获取列表默认请求参数
 */
export const fetchListDefaultParams = {
    // current has a default value: 1
    current: 1,
    // pageSize has a default value: 40
    pageSize: 10,
    // orderBy has a default value: createTime
    orderBy: OrderByEnum.CREATE_TIME,
    // order has a default value: DESC
    order: OrderEnum.DESC,
};

export const pageSize = 20;

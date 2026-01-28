import axios, { AxiosError, AxiosResponse, InternalAxiosRequestConfig } from 'axios';
import Cookies from 'js-cookie';
import { ApiResponse } from '@/services/interface';
import { RESPONSE_CODE } from '@/services/constant';
import { useGlobalStore } from '@/store/global';
import { TOKEN } from '@/constants';

const requestInterceptor = (config: InternalAxiosRequestConfig): InternalAxiosRequestConfig => {
    const token = Cookies.get(TOKEN);
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
};

const requestErrorHandler = (error: AxiosError): Promise<never> => {
    return Promise.reject(error);
};

const responseInterceptor = (response: AxiosResponse<any>): any => {
    const res = response.data;
    if (res.status !== 200) {
        throw new Error(res.message || '请求失败');
    }

    if (res.status === 401) {
        Cookies.remove(TOKEN);
        const { setShowLoginModal } = useGlobalStore.getState();
        setShowLoginModal(true);
        throw new Error(res.message || '登录已失效，请重新登录');
    }

    return res;
};

const responseErrorHandler = (error: unknown): Promise<never> => {
    if (axios.isCancel(error)) {
        const cancelError = error as AxiosError;
        console.error('Request canceled:', cancelError.message);
        return Promise.reject(error);
    }

    let errorMessage = '网络请求失败';
    if (typeof error === 'object' && error !== null && 'message' in error) {
        errorMessage = (error as { message: string }).message || errorMessage;
    }

    return Promise.reject(error);
};

/** 认证 */
export const authInstance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_AUTH_API_BASE_URL,
});
authInstance.interceptors.request.use(requestInterceptor, requestErrorHandler);
authInstance.interceptors.response.use(responseInterceptor, responseErrorHandler);

/** 其他业务 */
export const baseInstance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
});
baseInstance.interceptors.request.use(requestInterceptor, requestErrorHandler);
baseInstance.interceptors.response.use(responseInterceptor, responseErrorHandler);

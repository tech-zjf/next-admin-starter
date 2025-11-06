import { RESPONSE_CODE } from '@/constants/res-code';
import { eventBus } from '@/lib/event-bus';
import axios from 'axios';
import Cookies from 'js-cookie';

export const instance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
});

instance.interceptors.request.use(
    async (config) => {
        const token = Cookies.get('token');
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    },
);

instance.interceptors.response.use(
    (response) => {
        const res = response.data;
        if (res.code === RESPONSE_CODE.UNAUTHORIZED) {
            Cookies.set('token', '', { expires: -1 });
            eventBus.publish(RESPONSE_CODE.UNAUTHORIZED);
            throw new Error(res.msg);
        }
        if (
            [
                RESPONSE_CODE.NOT_PAY,
                RESPONSE_CODE.INSUFFICIENT_POINTS,
                RESPONSE_CODE.CUSTOM_TEMPLATE_NOT_PAY,
                RESPONSE_CODE.NOT_BETA_PAYMENT_USER,
                RESPONSE_CODE.NOT_BETA_NOT_PAYMENT_USER,
            ].includes(res.code)
        ) {
            return Promise.reject(res);
        }
        if (res.code !== RESPONSE_CODE.SUCCESS) {
            window.toast({ text: res.msg, type: 'error' });
            throw new Error(res.msg);
        }
        return res;
    },
    (error) => {
        if (axios.isCancel(error)) {
            return Promise.reject(error);
        }
        const errorMessage = error.response?.data?.msg || error.message;
        window.toast({ text: errorMessage, type: 'error' });
        throw error;
    },
);

import { AxiosInstance } from 'axios';
import User from './modules/user';
import { authInstance, baseInstance } from '@/utils';

class AuthApi {
    user: User;
    constructor(axiosInstance: AxiosInstance) {
        this.user = new User(axiosInstance);
    }
}
class BaseApi {
    constructor(axiosInstance: AxiosInstance) {}
}

export const $authApi = new AuthApi(authInstance);

export const $baseApi = new BaseApi(baseInstance);

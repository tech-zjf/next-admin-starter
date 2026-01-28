import { AxiosInstance } from 'axios';
import { UserInfo, LoginParams, LoginResponse } from './interface';

class User {
    axios: AxiosInstance;
    constructor(axiosInstance: AxiosInstance) {
        this.axios = axiosInstance;
    }

    /** 登录 */
    async login(params: LoginParams): Promise<LoginResponse> {
        const { data } = await this.axios.post('/api/v1/auth/login', params);
        return data;
    }

    /** 获取当前用户信息 */
    async getCurrentUser(): Promise<UserInfo> {
        const { data } = await this.axios.get('/api/v1/auth/me');
        return data;
    }
}

export default User;

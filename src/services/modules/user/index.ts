import { AxiosInstance } from 'axios';
import { UserInfo } from './interface';

class User {
    axios: AxiosInstance;
    constructor(axiosInstance: AxiosInstance) {
        this.axios = axiosInstance;
    }

    /** 查看我的信息 */
    async fetchMyInfo(): Promise<UserInfo> {
        const { data } = await this.axios.get('/mine');
        return data;
    }

    /** 修改我的信息  */
    async updateMyInfo(body: Pick<UserInfo, 'nickname' | 'avatarUrl'>) {
        const { data } = await this.axios.put('/mine', body);
        return data;
    }
}

export default User;

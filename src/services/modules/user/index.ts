import { AxiosInstance } from 'axios';
import { ScoreListParams, ScoreResponse, UserInfo } from './interface';

class User {
    axios: AxiosInstance;
    constructor(axiosInstance: AxiosInstance) {
        this.axios = axiosInstance;
    }

    // 查看我的信息
    async fetchMyInfo(): Promise<UserInfo> {
        const { data } = await this.axios.get('/mine');
        return data;
    }

    // 修改我的信息
    async updateMyInfo(body: Pick<UserInfo, 'nickname' | 'avatarUrl'>) {
        const { data } = await this.axios.put('/mine', body);
        return data;
    }

    // 查看我的积分明细
    async fetchScoreList(params: ScoreListParams): Promise<ScoreResponse> {
        const { data } = await this.axios.get('/score', { params });
        return data;
    }
}

export default User;

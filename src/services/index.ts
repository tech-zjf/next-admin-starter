import { AxiosInstance } from 'axios';
import { instance } from '@/utils';
import User from './modules/user';

class Api {
    user: User;

    constructor(axiosInstance: AxiosInstance) {
        this.user = new User(axiosInstance);
    }
}

const $api = new Api(instance);

export default $api;

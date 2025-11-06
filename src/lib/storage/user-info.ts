import { UserInfo } from '@/services/modules/user/interface';

export const MINE_INFO = 'MINE_INFO';

export const getMineInfoByStorage = () => {
    const data = localStorage.getItem(MINE_INFO);
    return data ? JSON.parse(data) : null;
};

export const setMineInfoToStorage = (userInfo?: UserInfo) => {
    if (!userInfo) {
        localStorage.removeItem(MINE_INFO);
        return;
    }
    localStorage.setItem(MINE_INFO, JSON.stringify(userInfo));
};

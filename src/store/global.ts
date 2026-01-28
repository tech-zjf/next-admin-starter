import { UserInfo } from '@/services/modules/user/interface';
import { create } from 'zustand';

export interface GlobalState {
    userInfo: UserInfo | null;
    setUserInfo: (userInfo: UserInfo | null) => void;
    showLoginModal: boolean;
    setShowLoginModal: (showLoginModal: boolean) => void;
    showUpdateUserModal: boolean;
    setShowUpdateUserModal: (showUpdateUserModal: boolean) => void;
}

export const useGlobalStore = create<GlobalState>((set) => ({
    userInfo: null,
    showLoginModal: false,
    showUpdateUserModal: false,

    setUserInfo: (userInfo) => set({ userInfo }),
    setShowLoginModal: (showLoginModal) => set({ showLoginModal }),
    setShowUpdateUserModal: (showUpdateUserModal) => set({ showUpdateUserModal }),
}));

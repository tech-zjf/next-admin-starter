'use client';
import { createContext, useCallback, useContext, useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import Cookies from 'js-cookie';
import { useGlobalStore } from '@/store/global';
import { LoginModal } from '../common/auth/login-modal';
import { $authApi } from '@/services';
import { TOKEN } from '@/constants';
import { LoginParams, UserInfo } from '@/services/modules/user/interface';

interface AuthContextValue {
    /** 登录 */
    login: (params: LoginParams) => Promise<void>;
    /** 退出登录 */
    logout: () => Promise<void>;
    /** 获取用户信息 */
    fetchUserInfo: () => Promise<void>;
}

export const AuthContext = createContext<AuthContextValue | null>(null);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const { userInfo, setUserInfo, showLoginModal, setShowLoginModal } = useGlobalStore();
    const router = useRouter();
    const pathname = usePathname();

    const login = useCallback(
        async (params: LoginParams) => {
            try {
                const { access_token, user } = await $authApi.user.login(params);
                Cookies.set(TOKEN, access_token, { expires: 90, path: '/' });
                setUserInfo(user);
                setShowLoginModal(false);
            } catch (error) {}
        },
        [setShowLoginModal, setUserInfo],
    );

    const logout = useCallback(async () => {
        Cookies.remove(TOKEN, { path: '/' });
        setUserInfo(null);
        router.push('/');
    }, [setUserInfo, router]);

    const fetchUserInfo = useCallback(async () => {
        try {
            const userInfo = await $authApi.user.getCurrentUser();
            setUserInfo(userInfo);
        } catch (error) {
            setUserInfo(null);
        }
    }, [setUserInfo]);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            history.scrollRestoration = 'manual';
        }
        const hasToken = Cookies.get(TOKEN);
        if (hasToken && !userInfo) {
            fetchUserInfo();
        }
    }, [fetchUserInfo, pathname, router, userInfo]);

    return (
        <AuthContext.Provider
            value={{
                login,
                logout,
                fetchUserInfo,
            }}
        >
            {children}
            {showLoginModal && <LoginModal />}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};

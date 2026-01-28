'use client';
import { createContext, useCallback, useContext, useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { useGlobalStore } from '@/store/global';
import { LoginModal } from '../common/auth/login-modal';

interface AuthContextValue {
    /** 登录 */
    login: (params: { phone: string; code: string }) => Promise<void>;
    /** 退出登录 */
    logout: () => Promise<void>;
    /** 获取用户信息 */
    fetchUserInfo: () => Promise<void>;
}

export const AuthContext = createContext<AuthContextValue | null>(null);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const { setUserInfo, showLoginModal } = useGlobalStore();
    const router = useRouter();
    const pathname = usePathname();

    const login = useCallback(async (params: { phone: string; code: string }) => {}, []);

    const logout = useCallback(async () => {}, []);

    const fetchUserInfo = useCallback(async () => {}, []);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            history.scrollRestoration = 'manual';
        }
    }, [pathname, router]);

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

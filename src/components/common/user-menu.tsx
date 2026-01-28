'use client';

import React from 'react';
import { useTranslations } from 'next-intl';
import { useTheme } from 'next-themes';
import { useLocale } from 'next-intl';
import { useAuth } from '@/components/context/auth-context';
import { useGlobalStore } from '@/store/global';
import { Moon, Sun, Languages, LogOut, User } from 'lucide-react';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { localeNames } from '@/i18n/config';
import Cookies from 'js-cookie';
import { NEXT_LOCALE } from '@/constants';

interface UserMenuProps {
    children: React.ReactNode;
}

export function UserMenu({ children }: UserMenuProps) {
    const { userInfo } = useGlobalStore();
    const userName = userInfo?.nickname || 'User';
    const userAvatar = userInfo?.avatarUrl;
    const t = useTranslations('common.userMenu');
    const themeT = useTranslations('common.theme');
    const { theme, setTheme } = useTheme();
    const locale = useLocale();
    const { logout } = useAuth();

    const handleThemeChange = (newTheme: string) => {
        setTheme(newTheme);
    };

    const handleLanguageChange = (newLocale: string) => {
        if (newLocale === locale) return;
        Cookies.set(NEXT_LOCALE, newLocale, { expires: 365, path: '/' });
        window.location.reload();
    };

    const handleLogout = async () => {
        await logout();
    };

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>{children}</DropdownMenuTrigger>
            <DropdownMenuContent align="end" side="right" className="w-56" sideOffset={16} alignOffset={-8}>
                {/* 用户信息 */}
                <DropdownMenuLabel className="px-2 py-1">
                    <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                            {userAvatar ? (
                                <img src={userAvatar} alt={userName} className="h-full w-full rounded-full object-cover" />
                            ) : (
                                <User className="h-5 w-5" />
                            )}
                        </div>
                        <div className="flex min-w-0 flex-col">
                            <span className="truncate text-sm font-medium">{userName}</span>
                        </div>
                    </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator className="my-1" />

                {/* 主题切换 */}
                <DropdownMenuItem className="cursor-pointer" onClick={() => handleThemeChange(theme === 'dark' ? 'light' : 'dark')}>
                    <div className="flex flex-1 items-center">
                        {theme === 'dark' ? <Sun className="mr-2 h-4 w-4 shrink-0" /> : <Moon className="mr-2 h-4 w-4 shrink-0" />}
                        <span className="flex-1">{t('theme')}</span>
                        <span className="ml-auto shrink-0 text-xs text-muted-foreground">{theme === 'dark' ? themeT('dark') : themeT('light')}</span>
                    </div>
                </DropdownMenuItem>

                <DropdownMenuSeparator className="my-1" />

                {/* 语言切换 */}
                <DropdownMenuItem
                    className="cursor-pointer"
                    onClick={() => {
                        const nextLocale = locale === 'zh' ? 'en' : 'zh';
                        handleLanguageChange(nextLocale);
                    }}
                >
                    <div className="flex flex-1 items-center">
                        <Languages className="mr-2 h-4 w-4 shrink-0" />
                        <span className="flex-1">{t('language')}</span>
                        <span className="ml-auto shrink-0 text-xs text-muted-foreground">{localeNames[locale as keyof typeof localeNames]}</span>
                    </div>
                </DropdownMenuItem>

                <DropdownMenuSeparator className="my-1" />

                {/* 退出登录 */}
                <DropdownMenuItem className="cursor-pointer text-destructive focus:text-destructive" onClick={handleLogout}>
                    <LogOut className="mr-2 h-4 w-4 shrink-0" />
                    <span>{t('logout')}</span>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
}

'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { ThemeToggle } from '@/components/common/theme-toggle';
import { LocaleToggle } from '@/components/common/locale-toggle';

export default function Header() {
    const [user] = useState({ name: 'Admin User' });
    const t = useTranslations('header');
    const tCommon = useTranslations('common');

    return (
        <header className="fixed left-0 right-0 top-0 z-50 h-16 border-b bg-white shadow-sm transition-colors dark:border-gray-700 dark:bg-gray-900">
            <div className="flex h-full items-center justify-between px-6">
                <div className="flex items-center">
                    <h1 className="text-xl font-bold text-gray-800 dark:text-white">{t('title')}</h1>
                </div>

                <div className="flex items-center gap-4">
                    <LocaleToggle />
                    <ThemeToggle />
                    <span className="text-sm text-gray-600 dark:text-gray-300">
                        {t('welcome')}, {user.name}
                    </span>
                    <button
                        className="rounded-md bg-blue-500 px-4 py-2 text-sm text-white transition-colors hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-700"
                        onClick={() => {
                            // 退出登录逻辑
                            console.log('退出登录');
                        }}
                    >
                        {tCommon('logout')}
                    </button>
                </div>
            </div>
        </header>
    );
}

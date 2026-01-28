'use client';

import { useTranslations } from 'next-intl';

export default function Header() {
    const t = useTranslations('common.header');

    return (
        <header className="sticky left-0 right-0 top-0 z-[100] h-16 border-b border-border bg-background">
            <div className="flex h-full items-center justify-between px-6">
                <div className="flex items-center">
                    <h1 className="text-xl font-bold text-foreground">{t('logo')}</h1>
                </div>
                <div className="flex items-center gap-4">
                    <button
                        className="rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
                        onClick={() => {
                            console.log('登录/注册');
                        }}
                    >
                        {t('loginOrRegister')}
                    </button>
                </div>
            </div>
        </header>
    );
}

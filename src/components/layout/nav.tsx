'use client';

import { useGlobalStore } from '@/store/global';
import { useTranslations } from 'next-intl';
import { useRouter } from 'next/navigation';

export default function Nav() {
    const t = useTranslations('common.header');
    const { setShowLoginModal, userInfo } = useGlobalStore();
    const router = useRouter();

    return (
        <header className="sticky left-0 right-0 top-0 z-[100] h-16 border-b border-border bg-background">
            <div className="flex h-full items-center justify-between px-6">
                <div className="flex items-center">
                    <h1 className="cursor-pointer text-xl font-bold text-foreground" onClick={() => router.push('/')}>
                        {t('logo')}
                    </h1>
                </div>
                <div className="flex items-center gap-4">
                    {!userInfo && (
                        <button
                            className="rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
                            onClick={() => setShowLoginModal(true)}
                        >
                            {t('loginOrRegister')}
                        </button>
                    )}
                </div>
            </div>
        </header>
    );
}

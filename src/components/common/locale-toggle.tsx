'use client';

import { useState, useTransition } from 'react';
import { useLocale } from 'next-intl';
import Cookies from 'js-cookie';
import { localeNames } from '@/i18n/config';
import { NEXT_LOCALE } from '@/constants';

export function LocaleToggle() {
    const locale = useLocale();
    const [isPending, startTransition] = useTransition();
    const [isChanging, setIsChanging] = useState(false);

    const handleLocaleChange = (newLocale: string) => {
        if (newLocale === locale) return;
        setIsChanging(true);
        startTransition(async () => {
            Cookies.set(NEXT_LOCALE, newLocale, { expires: 365, path: '/' });
            window.location.reload();
        });
    };

    return (
        <div className="relative inline-block">
            <select
                value={locale}
                onChange={(e) => handleLocaleChange(e.target.value)}
                disabled={isPending || isChanging}
                className="h-9 rounded-md border border-gray-300 bg-white px-3 pr-8 text-sm shadow-sm transition-colors hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700"
            >
                {Object.entries(localeNames).map(([key, name]) => (
                    <option key={key} value={key}>
                        {name}
                    </option>
                ))}
            </select>
        </div>
    );
}

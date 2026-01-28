import { getRequestConfig } from 'next-intl/server';
import { cookies } from 'next/headers';
import { defaultLocale, locales, type Locale } from './config';
import { NEXT_LOCALE } from '@/constants';

async function loadMessages(locale: Locale) {
    const modules = ['common', 'theme', 'nav', 'header', 'sidebar', 'dashboard', 'users', 'settings'];

    const messages: Record<string, any> = {};

    for (const moduleName of modules) {
        try {
            const moduleMessages = await import(`./messages/${locale}/${moduleName}.json`);
            messages[moduleName] = moduleMessages.default;
        } catch (error) {
            console.warn(`Failed to load ${moduleName} translations for ${locale}:`, error);
            messages[moduleName] = {};
        }
    }

    return messages;
}

export default getRequestConfig(async () => {
    const cookieStore = await cookies();
    const localeCookie = cookieStore.get(NEXT_LOCALE)?.value as Locale;
    const locale = localeCookie && locales.includes(localeCookie) ? localeCookie : defaultLocale;

    return {
        locale,
        messages: await loadMessages(locale),
    };
});

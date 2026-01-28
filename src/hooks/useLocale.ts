import { useLocale as useNextIntlLocale } from 'next-intl';
import type { Locale } from '@/i18n/config';

export function useLocale() {
    return useNextIntlLocale() as Locale;
}

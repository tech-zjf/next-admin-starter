'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useTranslations } from 'next-intl';
import { cn } from '@/utils';

interface MenuItem {
    labelKey: string;
    href: string;
    icon?: string;
}

const menuItems: MenuItem[] = [
    { labelKey: 'dashboard', href: '/dashboard', icon: '📊' },
    { labelKey: 'users', href: '/users', icon: '👥' },
    { labelKey: 'settings', href: '/settings', icon: '⚙️' },
];

export default function Sidebar() {
    const pathname = usePathname();
    const t = useTranslations('nav');

    return (
        <aside className="fixed left-0 top-16 z-40 h-[calc(100vh-4rem)] w-64 border-r bg-white shadow-sm transition-colors dark:border-gray-700 dark:bg-gray-900">
            <nav className="h-full overflow-y-auto p-4">
                <ul className="space-y-2">
                    {menuItems.map((item) => {
                        const isActive = pathname === item.href;
                        return (
                            <li key={item.href}>
                                <Link
                                    href={item.href}
                                    className={cn(
                                        'flex items-center gap-3 rounded-lg px-4 py-3 text-sm font-medium transition-colors',
                                        isActive
                                            ? 'bg-blue-50 text-blue-600 dark:bg-blue-900/50 dark:text-blue-400'
                                            : 'text-gray-700 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-white',
                                    )}
                                >
                                    {item.icon && <span className="text-lg">{item.icon}</span>}
                                    <span>{t(item.labelKey)}</span>
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            </nav>
        </aside>
    );
}

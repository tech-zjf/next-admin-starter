'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/utils';

interface MenuItem {
    label: string;
    href: string;
    icon?: string;
}

const menuItems: MenuItem[] = [
    { label: '仪表板', href: '/dashboard', icon: '📊' },
    { label: '用户管理', href: '/users', icon: '👥' },
    { label: '内容管理', href: '/content', icon: '📝' },
    { label: '设置', href: '/settings', icon: '⚙️' },
];

export default function Sidebar() {
    const pathname = usePathname();

    return (
        <aside className="fixed left-0 top-16 z-40 h-[calc(100vh-4rem)] w-64 border-r bg-white shadow-sm">
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
                                        isActive ? 'bg-blue-50 text-blue-600' : 'text-gray-700 hover:bg-gray-100 hover:text-gray-900',
                                    )}
                                >
                                    {item.icon && <span className="text-lg">{item.icon}</span>}
                                    <span>{item.label}</span>
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            </nav>
        </aside>
    );
}

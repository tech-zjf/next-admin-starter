'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useTranslations } from 'next-intl';
import { Home, Image as ImageIcon, Lightbulb, Film, HelpCircle, Bell, Wallet, User } from 'lucide-react';
import { cn } from '@/utils/index';
import { UserMenu } from '@/components/common/user-menu';

const Sidebar = () => {
    const pathname = usePathname();
    const t = useTranslations('common.sidebar');

    type MenuItem = {
        icon: React.ComponentType<{ className?: string }>;
        labelKey: string;
        href: string;
    };

    const mainMenuItems: MenuItem[] = [
        { icon: Home, labelKey: 'home', href: '/dashboard' },
        { icon: ImageIcon, labelKey: 'materialLibrary', href: '/material-library' },
        { icon: Lightbulb, labelKey: 'superHitGeneration', href: '/super-hit-generation' },
        { icon: Film, labelKey: 'edit', href: '/edit' },
    ];

    const bottomMenuItems: MenuItem[] = [
        { icon: HelpCircle, labelKey: 'help', href: '/help' },
        { icon: Bell, labelKey: 'notifications', href: '/notifications' },
        { icon: Wallet, labelKey: 'recharge', href: '/recharge' },
    ];

    const renderMenuItem = (item: MenuItem, isActive: boolean) => {
        const Icon = item.icon;
        return (
            <Link
                href={item.href}
                className={cn(
                    'flex flex-col items-center justify-center gap-1 rounded-md transition-colors',
                    'h-16 w-full',
                    isActive ? 'bg-primary text-primary-foreground' : 'text-foreground hover:bg-accent hover:text-accent-foreground',
                )}
            >
                <Icon className="h-5 w-5" />
                <span className="text-center text-xs">{t(item.labelKey)}</span>
            </Link>
        );
    };

    return (
        <aside className="sticky top-16 flex h-[calc(100vh-4rem)] w-20 flex-col border-r border-border bg-secondary">
            <nav className="flex h-full flex-col">
                {/* 主要菜单区域 - 可滚动 */}
                <div className="common-scrollbar flex-1 overflow-y-auto py-2">
                    <div className="space-y-1 px-2">
                        {mainMenuItems.map((item) => {
                            const isActive = pathname === item.href;
                            return <div key={item.href}>{renderMenuItem(item, isActive)}</div>;
                        })}
                    </div>
                </div>
                {/* 底部菜单区域 - 固定在底部 */}
                <div className="space-y-1 border-t border-border px-2 py-2">
                    {bottomMenuItems.map((item) => {
                        const isActive = pathname === item.href;
                        return <div key={item.href}>{renderMenuItem(item, isActive)}</div>;
                    })}
                </div>
                {/* 底部用户设置按钮 */}
                <div className="border-t border-border p-2">
                    <UserMenu>
                        <button className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground transition-opacity hover:opacity-90">
                            <User className="h-5 w-5" />
                        </button>
                    </UserMenu>
                </div>
            </nav>
        </aside>
    );
};

export default Sidebar;

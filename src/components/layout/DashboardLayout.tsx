'use client';

import Header from './header';
import Sidebar from './sidebar';

interface DashboardLayoutProps {
    children: React.ReactNode;
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
    return (
        <div className="min-h-screen bg-background text-foreground transition-colors">
            <Header />
            <div className="flex">
                <Sidebar />
                <main className="flex-1 bg-background">
                    <div className="h-[3000px] space-y-6 p-6">{children}</div>
                </main>
            </div>
        </div>
    );
}

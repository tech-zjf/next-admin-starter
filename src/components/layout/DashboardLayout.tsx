'use client';

import Header from './Header';
import Sidebar from './Sidebar';

interface DashboardLayoutProps {
    children: React.ReactNode;
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
    return (
        <div className="min-h-screen bg-gray-50 transition-colors dark:bg-gray-950">
            <Header />
            <Sidebar />
            <main className="ml-64 mt-16 p-6">{children}</main>
        </div>
    );
}

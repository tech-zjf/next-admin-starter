'use client';
import Header from './Header';
interface DashboardLayoutProps {
    children: React.ReactNode;
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
    return (
        <div className="min-h-screen bg-gray-50 transition-colors dark:bg-gray-950">
            <Header />
            <main className="min-h-screen p-6">{children}</main>
        </div>
    );
}

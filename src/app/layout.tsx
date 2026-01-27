import type { Metadata } from 'next';
import Head from 'next/head';
import './globals.css';
import { AuthProvider } from '@/components/context/auth-context';

export const metadata: Metadata = {
    title: 'nextjs',
    description: '这是一个nextjs 魔板',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
            </Head>
            <body>
                <AuthProvider>{children}</AuthProvider>
            </body>
        </html>
    );
}

import type { Metadata } from 'next';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import Head from 'next/head';
import { AuthProvider } from '@/components/context/auth-context';
import { ThemeProvider } from '@/components/context/theme-provider';
import './globals.css';

export const metadata: Metadata = {
    title: 'Next Admin Starter',
    description: '这是一个 Next.js 管理后台模板',
};

export default async function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    const messages = await getMessages();

    return (
        <html lang="zh" suppressHydrationWarning>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
            </Head>
            <body>
                <NextIntlClientProvider messages={messages}>
                    <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
                        <AuthProvider>{children}</AuthProvider>
                    </ThemeProvider>
                </NextIntlClientProvider>
            </body>
        </html>
    );
}

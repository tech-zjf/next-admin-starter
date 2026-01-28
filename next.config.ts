import type { NextConfig } from 'next';
import createNextIntlPlugin from 'next-intl/plugin';

const withBundleAnalyzer = require('@next/bundle-analyzer')({
    enabled: process.env.ANALYZE === 'true',
});

const withNextIntl = createNextIntlPlugin('./src/i18n/request.ts');

const nextConfig: NextConfig = {
    reactStrictMode: false,
    images: {
        localPatterns: [
            {
                pathname: 'src/assets/images/**',
                search: '',
            },
        ],
    },
    output: 'standalone',
    turbopack: {},
};

export default withBundleAnalyzer(withNextIntl(nextConfig));

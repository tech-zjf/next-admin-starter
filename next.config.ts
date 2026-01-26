import type { NextConfig } from 'next';

const withBundleAnalyzer = require('@next/bundle-analyzer')({
    enabled: process.env.ANALYZE === 'true',
});

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
};

export default withBundleAnalyzer(nextConfig);

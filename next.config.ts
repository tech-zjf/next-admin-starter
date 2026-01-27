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
    // Next.js 16 默认使用 Turbopack，添加空配置避免 webpack 配置冲突警告
    turbopack: {},
};

export default withBundleAnalyzer(nextConfig);

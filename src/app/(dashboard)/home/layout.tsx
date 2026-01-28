import { StringTools } from '@/utils';
import { Metadata } from 'next';
import React, { ReactNode } from 'react';

interface HomeLayoutProps {
    children: ReactNode;
}

export const metadata: Metadata = {
    title: 'HeyCool - 首页',
    description: '',
    keywords: [],
};

const HomeLayout: React.FC<HomeLayoutProps> = ({ children }) => {
    return <>{children}</>;
};

export default HomeLayout;

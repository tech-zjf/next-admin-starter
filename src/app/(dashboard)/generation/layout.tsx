import { StringTools } from '@/utils';
import { Metadata } from 'next';
import React, { ReactNode } from 'react';

interface GenerationLayoutProps {
    children: ReactNode;
}

export const metadata: Metadata = {
    title: 'HeyCool - 爆款复刻',
    description: '',
    keywords: [],
};

const GenerationLayout: React.FC<GenerationLayoutProps> = ({ children }) => {
    return <>{children}</>;
};

export default GenerationLayout;

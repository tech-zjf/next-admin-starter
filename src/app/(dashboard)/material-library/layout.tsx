import { StringTools } from '@/utils';
import { Metadata } from 'next';
import React, { ReactNode } from 'react';

interface MaterialLibraryLayoutProps {
    children: ReactNode;
}

export const metadata: Metadata = {
    title: 'HeyCool - 素材库',
    description: '',
    keywords: [],
};

const MaterialLibraryLayout: React.FC<MaterialLibraryLayoutProps> = ({ children }) => {
    return <>{children}</>;
};

export default MaterialLibraryLayout;

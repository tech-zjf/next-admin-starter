import { StringTools } from '@/utils';
import { Metadata } from 'next';
import React, { ReactNode } from 'react';

interface VideoClipLayoutProps {
    children: ReactNode;
}

export const metadata: Metadata = {
    title: 'HeyCool - 视频剪辑',
    description: '',
    keywords: [],
};

const VideoClipLayout: React.FC<VideoClipLayoutProps> = ({ children }) => {
    return <>{children}</>;
};

export default VideoClipLayout;

import React, { ReactNode } from 'react';

interface IDragContainerProps {
    children: ReactNode;
    onError?: (error: Error) => void;
    validFileTypes?: string[];
    maxCount?: number;
    maxFileSize?: number; // 新增属性：文件大小限制（单位：字节）
    onFilesDropped: (files: File[]) => void;
    className?: string; // 可选的类名属性
    onUploadBefore?: () => Promise<boolean>; // 上传前的回调函数
}

const isValidFileType = (file: File, validFileTypes: string[]): boolean => {
    return validFileTypes.some((type) => {
        // 处理通配符
        if (type.includes('*')) {
            const regex = new RegExp(`^${type.replace(/\*/g, '.*')}$`);
            return regex.test(file.type);
        }
        // 处理文件扩展名
        const extension = file.name.split('.').pop();
        if (type.startsWith('.')) {
            return type === `.${extension}`; // 直接比较扩展名
        }

        return file.type === type; // 精确匹配 MIME 类型
    });
};

const DragContainer: React.FC<IDragContainerProps> = (props) => {
    const { children, onError, maxCount = 1, validFileTypes = [], maxFileSize, onFilesDropped, onUploadBefore } = props;

    const handleDrop = async (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();

        const items = e.dataTransfer.items;
        let hasFolders = false;
        const files: File[] = [];

        for (let i = 0; i < items.length; i++) {
            const item = items[i];
            if (item.kind === 'file') {
                if (item.webkitGetAsEntry()?.isDirectory) {
                    hasFolders = true;
                } else {
                    files.push(item.getAsFile() as File);
                }
            }
        }

        if (onUploadBefore) {
            const canUpload = await onUploadBefore();
            if (!canUpload) {
                return;
            }
        }

        if (hasFolders) {
            onError && onError?.(new Error('不支持拖拽文件夹!'));
            return;
        }

        if (files.length > maxCount) {
            onError && onError?.(new Error(`最多只能上传 ${maxCount} 个文件！`));
            return;
        }

        if (maxFileSize) {
            const oversizedFiles = files.filter((file) => file.size > maxFileSize);
            if (oversizedFiles.length > 0) {
                const fileNames = oversizedFiles.map((file) => file.name).join(', ');
                onError && onError?.(new Error(`文件 ${fileNames} 超过了 ${maxFileSize / 1024 / 1024} MB 的限制！`));
                return;
            }
        }

        const validFiles = files.filter((file) => isValidFileType(file, validFileTypes));
        if (validFiles.length === 0) {
            onError && onError?.(new Error(`有效的文件长度为 0 ，请重新上传！`));
            return;
        }

        onFilesDropped(Array.from(validFiles));
    };

    const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault(); // 防止默认行为以允许拖拽
    };

    return (
        <div id="drag-container" onDrop={handleDrop} onDragOver={handleDragOver} className={props.className || ''}>
            {children}
        </div>
    );
};

export default DragContainer;

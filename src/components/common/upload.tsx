'use client';

export enum acceptEnum {
    VIDEO = 'video/*',
    AUDIO = 'audio/*',
    IMAGE = 'image/*',
    EXCEL = '.xls,.xlsx,application/vnd.ms-excel',
    ZIP = '.zip,.rar',
    ANY = '*/*',
}

export interface UploadOptions {
    accept: acceptEnum | string;
    isMultiple: boolean;
    maxFileSize?: number;
    maxFiles?: number;
    validateFileType?: (file: File) => boolean;
    onError?: (message: string) => void;
}

export const UploadDialog = (options: UploadOptions): Promise<File[] | undefined> => {
    return new Promise((resolve) => {
        const input: HTMLInputElement = document.createElement('input');
        input.type = 'file';
        input.accept = options.accept;
        input.multiple = options.isMultiple;
        input.style.display = 'none';
        document.body.appendChild(input);

        input.onchange = () => {
            const files = input.files;
            if (!files || files.length === 0) {
                resolve(undefined);
                return;
            }

            // 检查文件数量限制
            if (options.maxFiles && files.length > options.maxFiles) {
                const message = `最多只能选择 ${options.maxFiles} 个文件`;
                options.onError && options.onError(message);
                resolve(undefined);
                document.body.removeChild(input);
                return;
            }

            // 检查文件大小限制
            if (options.maxFileSize) {
                for (let i = 0; i < files.length; i++) {
                    if (files[i].size > options.maxFileSize) {
                        const message = `文件 ${files[i].name} 超过最大大小限制`;
                        options.onError && options.onError(message);
                        resolve(undefined);
                        document.body.removeChild(input);
                        return;
                    }
                }
            }

            // 自定义文件类型验证
            if (options.validateFileType) {
                for (let i = 0; i < files.length; i++) {
                    if (!options.validateFileType(files[i])) {
                        const message = `文件 ${files[i].name} 类型不符合要求`;
                        options.onError && options.onError(message);
                        resolve(undefined);
                        document.body.removeChild(input);
                        return;
                    }
                }
            }
            resolve(Array.from(files));
            document.body.removeChild(input);
        };

        input.onabort = () => {
            resolve(undefined);
            document.body.removeChild(input);
        };

        input.click();
    });
};

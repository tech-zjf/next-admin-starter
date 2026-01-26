import { cn, StringTools } from '@/utils';
import React, { useState } from 'react';
import './style.css';

export interface CustomModalProps {
    title: string;
    tips?: string;
    confirmText?: string;
    cancelText?: string;
    input?: {
        placeholder: string;
        validationFailMsg: string;
        validate: (value: string) => Promise<boolean> | boolean;
        defaultValue?: string;
    };
    onCancel?: () => void | Promise<void>;
    onConfirm: (value: string) => void | Promise<void>;
}

const CustomModal: React.FC<CustomModalProps> = (props) => {
    const { title, tips, confirmText = '确认', cancelText = '取消', input, onCancel = () => {}, onConfirm } = props;
    const [value, setValue] = useState(input?.defaultValue || '');
    const [loading, setLoading] = useState(false);

    const [validationFailed, setValidationFailed] = useState(false);

    const handleConfirm = async () => {
        if (loading) return;
        if (input && input.validate) {
            const isValid = await input.validate(value);
            if (!isValid) {
                setValidationFailed(true);
                return;
            }
        }
        try {
            setLoading(true);
            await onConfirm(value);
        } catch (e) {
            console.error('Error during confirmation:', e);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className={cn('fixed inset-0 z-[99999] flex items-center justify-center bg-black bg-opacity-60')}>
            <div className="w-[480px] rounded-xl bg-white p-5">
                <div className="relative">
                    <h4 className="text-center text-[20px] font-semibold text-gray-700">{title}</h4>
                    <svg
                        onClick={onCancel}
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        className="absolute right-0 top-0 cursor-pointer"
                        viewBox="0 0 16 16"
                        fill="none"
                    >
                        <path d="M2.66699 2.66666L13.3337 13.3333" stroke="#969AA3" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M2.66699 13.3333L13.3337 2.66666" stroke="#969AA3" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </div>
                {tips && <p className="before-require mt-5 text-center text-sm text-gray-700">{tips}</p>}
                {!!input && (
                    <>
                        <input
                            id="custom-modal-input"
                            type="text"
                            className={cn(
                                'mt-5 box-border w-full rounded-lg bg-gray-100 py-[14px] pl-5 text-sm text-gray-700 outline-none placeholder:text-sm placeholder:text-gray-400',
                            )}
                            placeholder={input.placeholder}
                            value={value}
                            onChange={async (e) => {
                                setValidationFailed(false);
                                setValue(e.target.value);
                            }}
                            autoComplete="off"
                        />
                        {validationFailed && <p className="mt-2 text-xs text-[#FF3D4A]">{input.validationFailMsg}</p>}
                    </>
                )}
                <div className="mt-10 flex items-center gap-x-3">
                    <button className="h-[48px] flex-1 rounded-full border border-gray-700 bg-white text-base font-medium text-gray-700" onClick={onCancel}>
                        {cancelText}
                    </button>
                    <button
                        className="flex h-[48px] flex-1 items-center justify-center rounded-full border border-gray-700 bg-gray-700 text-base font-medium text-white"
                        onClick={handleConfirm}
                    >
                        <span className="relative">
                            {confirmText}
                            {loading && (
                                <img
                                    className="absolute left-full top-1/2 ml-2 h-4 w-4 -translate-y-1/2"
                                    src={StringTools.loadOssImg('loading-white.gif')}
                                    alt=""
                                />
                            )}
                        </span>
                    </button>
                </div>
            </div>
        </div>
    );
};
export default CustomModal;

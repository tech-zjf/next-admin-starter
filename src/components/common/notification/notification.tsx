import { cn, StringTools } from '@/utils';

const notificationIconMap = new Map([
    ['success', 'toast-success.png'],
    ['error', 'toast-error.png'],
    ['warning', 'toast-warning.png'],
]);

interface NotificationProps {
    type?: 'success' | 'error' | 'warning' | 'default';
    title: string;
    text: string;
    onClose: () => void;
    placement?: 'top' | 'topLeft' | 'topRight' | 'bottom' | 'bottomLeft' | 'bottomRight' | 'center';
}

export const CustomNotification: React.FC<NotificationProps> = (props) => {
    const { type = 'default', placement = 'center', title, text, onClose } = props;
    return (
        <div
            className={cn('fixed z-[100] w-[295px] select-none rounded-[10px] bg-white p-5 md:w-[480px]', {
                'left-1/2 top-10 translate-x-[-50%] translate-y-0': placement === 'top',
                'left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%]': placement === 'center',
                'bottom-10 left-1/2 translate-x-[-50%] translate-y-[0]': placement === 'bottom',
                'left-10 top-10': placement === 'topLeft',
                'right-10 top-10': placement === 'topRight',
                'bottom-10 left-10': placement === 'bottomLeft',
                'bottom-10 right-10': placement === 'bottomRight',
            })}
            style={{
                boxShadow: '0px 4px 8px 0px rgba(17, 17, 17, 0.05), 0px 8px 24px 0px rgba(17, 17, 17, 0.08)',
            }}
        >
            <div className="flex items-center justify-between">
                <div className="flex items-center">
                    {notificationIconMap.has(type) && (
                        <img className="mr-2 h-5 w-5" src={StringTools.loadOssImg(notificationIconMap.get(type)!)} alt="notification icon" />
                    )}
                    <p
                        className={cn('text-base font-medium text-gray-700 md:text-[18px]', {
                            'text-42-success': type === 'success',
                            'text-42-error': type === 'error',
                            'text-42-warning': type === 'warning',
                        })}
                    >
                        {title}
                    </p>
                </div>
                <svg
                    onClick={() => {
                        onClose();
                    }}
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    className="cursor-pointer"
                    viewBox="0 0 16 16"
                    fill="none"
                >
                    <path d="M2.66699 2.66666L13.3337 13.3333" stroke="#969AA3" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M2.66699 13.3333L13.3337 2.66666" stroke="#969AA3" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </div>
            <p
                className={cn('mt-1 text-[13px] text-gray-700 md:text-sm', {
                    'pl-[28px]': type !== 'default',
                })}
            >
                {text}
            </p>
        </div>
    );
};

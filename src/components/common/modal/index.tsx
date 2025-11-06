import { createRoot } from 'react-dom/client';
import CustomModal, { CustomModalProps } from './modal';

const openModal = (props: CustomModalProps) => {
    const container = document.createElement('div');
    document.body.appendChild(container);
    const root = createRoot(container);

    const destroy = () => {
        root.unmount();
        container.remove();
    };

    root.render(
        <CustomModal
            {...props}
            onCancel={async () => {
                if (props.onCancel) {
                    await props.onCancel();
                }
                destroy();
            }}
            onConfirm={async (value: string) => {
                await props.onConfirm(value);
                destroy();
            }}
        />,
    );
};

export default openModal;

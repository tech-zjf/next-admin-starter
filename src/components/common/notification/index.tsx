import { createRoot } from 'react-dom/client';
import { CustomNotification } from './notification';

type NotificationType = 'success' | 'error' | 'warning' | 'default';
type NotificationConfig = {
    title: string;
    text: string;
    duration?: number;
    onClose?: () => void;
};

class NotificationManager {
    private container: HTMLDivElement | null = null;
    private root: ReturnType<typeof createRoot> | null = null;
    private timer: NodeJS.Timeout | null = null;

    private createContainer() {
        if (!this.container) {
            this.container = document.createElement('div');
            this.container.className = 'notification-container';
            document.body.appendChild(this.container);
        }
        return this.container;
    }

    private renderNotification(type: NotificationType, config: NotificationConfig) {
        this.destroy();

        const container = this.createContainer();
        this.root = createRoot(container);

        const { duration, onClose } = config;

        this.root.render(<CustomNotification type={type} {...config} onClose={() => this.handleClose(onClose)} />);

        if (duration) {
            this.timer = setTimeout(() => {
                this.handleClose(onClose);
            }, duration);
        }
    }

    private handleClose(callback?: () => void) {
        callback?.();
        this.destroy();
    }

    private destroy() {
        if (this.timer) {
            clearTimeout(this.timer);
            this.timer = null;
        }

        if (this.root) {
            this.root.unmount();
            this.root = null;
        }

        if (this.container) {
            this.container.remove();
            this.container = null;
        }
    }

    open = (config: NotificationConfig) => this.renderNotification('default', config);
    success = (config: NotificationConfig) => this.renderNotification('success', config);
    error = (config: NotificationConfig) => this.renderNotification('error', config);
    warning = (config: NotificationConfig) => this.renderNotification('warning', config);
}

export const notification = new NotificationManager();

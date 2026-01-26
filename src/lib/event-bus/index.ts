export class EventBus {
    events: Record<string, (() => void)[]>;

    constructor() {
        this.events = {};
    }

    subscribe(status: string, callback: () => void) {
        if (!this.events[status]) {
            this.events[status] = [];
        }
        this.events[status].push(callback);
    }

    publish(status: string) {
        const callbacks = this.events[status];
        if (callbacks) {
            callbacks.forEach((callback) => callback());
        }
    }
}

export const eventBus = new EventBus();

import { noop } from 'lodash';
import { useRef, useState } from 'react';

export const useCountDown = ({ onEnd = noop } = {}) => {
    const [count, setCount] = useState<number>();
    const timer = useRef<NodeJS.Timeout>();

    const start = (t: number = 60) => {
        if (timer.current) {
            clearInterval(timer.current);
        }
        setCount(t);
        timer.current = setInterval(() => {
            setCount((c) => {
                if (c === undefined || c === 0) {
                    clearInterval(timer.current);
                    onEnd && onEnd();
                    return 0;
                }
                return c - 1;
            });
        }, 1000);
    };

    const stop = () => {
        if (timer.current) {
            clearInterval(timer.current);
        }
        setCount(0);
    };

    return {
        count,
        start,
        stop,
    };
};

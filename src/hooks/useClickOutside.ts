import { RefObject, useEffect } from 'react';

export const useOnClickOutside = (ref: RefObject<HTMLElement>, handler: (event: MouseEvent) => void) => {
    useEffect(() => {
        const listener = (event: MouseEvent) => {
            if (!ref.current || ref.current.contains(event.target as Node)) {
                return;
            }
            handler(event);
        };
        window.addEventListener('click', listener);
        return () => window.removeEventListener('click', listener);
    }, [ref, handler]);
};

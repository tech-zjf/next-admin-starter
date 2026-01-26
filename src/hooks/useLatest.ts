import { useRef } from 'react';

/**
 * useLatest
 * @description A custom hook that returns a ref object containing the latest value.
 * This is useful for avoiding stale closures in asynchronous code.
 * @param value - The value to be stored in the ref.
 * @returns A ref object containing the latest value.
 */
export function useLatest<T>(value: T) {
    const ref = useRef(value);
    ref.current = value;
    return ref;
}

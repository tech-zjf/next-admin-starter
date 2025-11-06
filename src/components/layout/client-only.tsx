import { useEffect, useState } from 'react';

/**
 * A component that renders its children only on the client-side, not during server-side rendering.
 * This is useful for components that use browser-specific APIs or need to access window/document.
 *
 * @component
 * @param {Object} props - The component props
 * @param {React.ReactNode} props.children - The content to render only on the client
 * @returns {React.ReactNode | null} The children when mounted on client, or null during SSR
 *
 * @example
 * ```tsx
 * <ClientOnly>
 *   <ComponentThatUsesWindowOrDocument />
 * </ClientOnly>
 * ```
 */
function ClientOnly({ children }: { children: React.ReactNode }) {
    const [mounted, setMounted] = useState(false);
    useEffect(() => setMounted(true), []);
    return mounted ? children : null;
}

export default ClientOnly;

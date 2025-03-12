export { }; // Ensures TypeScript treats this file as a module

declare global {
    interface Window {
        plausible?: {
            (event: string, options?: Record<string, any>): void;
            q?: Array<[string, Record<string, any>?]>; // Support for event queue
        };
    }
}

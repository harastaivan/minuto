import type { ReactNode } from 'react';

export interface AnonymousLayoutProps {
    children: ReactNode;
}

export const AnonymousLayout = ({ children }: AnonymousLayoutProps) => {
    return (
        <main className="flex flex-col bg-slate-100 h-screen items-center justify-center px-6 py-4 w-full">
            {children}
        </main>
    );
};

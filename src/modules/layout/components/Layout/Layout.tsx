import type { ReactNode } from 'react';
import { Sidebar } from '../Sidebar';

export interface LayoutProps {
    children: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
    return (
        <div className="flex flex-row bg-slate-100 h-screen">
            <Sidebar />
            <main className="px-6 py-4 w-full">{children}</main>
        </div>
    );
};

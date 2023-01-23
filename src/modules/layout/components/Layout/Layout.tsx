import { TasksContextProvider } from 'modules/tasks';
import { Outlet } from 'react-router-dom';
import { Sidebar } from '../Sidebar';

export interface LayoutProps {}

export const Layout = ({}: LayoutProps) => {
    return (
        <div className="flex flex-row bg-slate-100 h-screen">
            <Sidebar />
            <main className="px-6 py-4 w-full">
                <TasksContextProvider>
                    <Outlet />
                </TasksContextProvider>
            </main>
        </div>
    );
};

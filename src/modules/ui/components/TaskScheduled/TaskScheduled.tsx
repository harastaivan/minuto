import type { ReactNode } from 'react';

export interface TaskScheduledProps {
    children: ReactNode;
}

export const TaskScheduled = ({ children }: TaskScheduledProps) => {
    return <div className="bg-slate-300 px-2 text-slate-500 rounded font-bold lowercase">{children}</div>;
};

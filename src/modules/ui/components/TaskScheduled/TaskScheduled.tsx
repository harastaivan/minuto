import { forwardRef, HTMLAttributes, ReactNode } from 'react';

export interface TaskScheduledProps extends HTMLAttributes<HTMLDivElement> {
    children: ReactNode;
}

export const TaskScheduled = forwardRef<HTMLDivElement, TaskScheduledProps>((props, ref) => {
    return (
        <div
            className="bg-slate-300 px-2 text-slate-500 rounded font-bold lowercase cursor-pointer"
            ref={ref}
            {...props}
        />
    );
});

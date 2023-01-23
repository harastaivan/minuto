import type { ReactNode } from 'react';

export interface TaskItemProps {
    children: ReactNode;
    rightContent: ReactNode;
}

export const TaskItem = ({ children, rightContent }: TaskItemProps) => {
    return (
        <div className="bg-slate-200 my-3 px-3 py-2 rounded font-mono text-slate-600 flex gap-6 justify-between cursor-default">
            <div className="flex items-center gap-4 w-full">{children}</div>
            {rightContent}
        </div>
    );
};

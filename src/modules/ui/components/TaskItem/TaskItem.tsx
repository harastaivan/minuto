import type { ReactNode } from 'react';
import { TrashIcon } from '@heroicons/react/24/outline';

export interface TaskItemProps {
    loading?: boolean;
    children: ReactNode;
    rightContent: ReactNode;
    onArchive?: () => void;
}

export const TaskItem = ({ children, rightContent, onArchive }: TaskItemProps) => {
    return (
        <div className="flex items-center group text-slate-400">
            <div className="bg-slate-200 my-2 px-3 py-2 rounded font-mono text-slate-600 flex gap-6 justify-between cursor-default w-full">
                <div className="flex items-center gap-4 w-full">{children}</div>
                {rightContent}
            </div>
            {onArchive ? (
                <div
                    className="w-8 h-8  flex items-center justify-center opacity-0 group-hover:opacity-70 hover:text-red-600 transition-opacity hover:bg-red-200 transition-colors cursor-pointer rounded-tr rounded-br"
                    onClick={onArchive}
                >
                    <TrashIcon className="w-4 h-4" />
                </div>
            ) : (
                <div className="w-8 h-8 opacity-0" />
            )}
        </div>
    );
};

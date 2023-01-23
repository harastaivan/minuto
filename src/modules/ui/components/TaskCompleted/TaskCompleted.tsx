import type { HTMLAttributes } from 'react';
import { CheckIcon } from '@heroicons/react/24/solid';

export interface TaskCompletedProps extends HTMLAttributes<HTMLDivElement> {
    completed?: boolean;
}

export const TaskCompleted = ({ completed = false, ...props }: TaskCompletedProps) => {
    return (
        <div
            className={`w-5 h-5 ${
                completed ? 'bg-indigo-900 text-indigo-300' : 'bg-slate-300 text-slate-500'
            } rounded flex items-center justify-center ${props.onClick ? 'cursor-pointer' : ''}`}
            {...props}
        >
            {completed && <CheckIcon className="w-4 h-4" />}
        </div>
    );
};

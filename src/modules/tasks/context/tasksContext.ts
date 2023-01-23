import { createContext } from 'react';
import type { PartialTask, Task } from '../types';

interface TasksContext {
    tasks: Task[];
    addTask: (task: Task) => void;
    updateTask: (task: PartialTask) => void;
}

export const tasksContext = createContext<TasksContext | null>(null);

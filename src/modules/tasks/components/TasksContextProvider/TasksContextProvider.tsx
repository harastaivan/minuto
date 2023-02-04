import { type ReactNode, useState } from 'react';
import { tasksContext } from '../../context';
import { PartialTask, Task } from '../../types';

export interface TasksContextProviderProps {
    children: ReactNode;
}

export const TasksContextProvider = ({ children }: TasksContextProviderProps) => {
    const [tasks, setTasks] = useState<Task[]>([]);

    const addTask = (task: Task) => {
        setTasks([...tasks, task]);
    };

    const updateTask = (task: PartialTask) => {
        const newTasks = tasks.map((t) => {
            if (t.id === task.id) {
                return {
                    ...t,
                    ...task,
                };
            }

            return t;
        });

        setTasks(newTasks);
    };

    const value = {
        tasks,
        addTask,
        updateTask,
    };

    return <tasksContext.Provider value={value}>{children}</tasksContext.Provider>;
};
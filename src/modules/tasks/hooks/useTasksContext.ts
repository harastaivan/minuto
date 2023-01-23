import { useContext } from 'react';
import { tasksContext } from '../context';

export const useTasksContext = () => {
    const context = useContext(tasksContext);

    if (context === null) {
        throw new Error('useTasksContext can be used only in TasksContextProvider');
    }

    return context;
};

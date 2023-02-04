import { api, QueryKey } from 'modules/api';
import { useQuery } from 'react-query';
import { Task } from '../types';

interface SelectResult<T> {
    count: number | null;
    data: T;
    error: string | null;
    status: number;
    statusText: string;
}

export const useTasks = () => {
    const tasks = useQuery(
        [QueryKey.TASKS],
        () =>
            api.from('tasks').select().eq('archived', false).order('created_at') as unknown as Promise<
                SelectResult<Task[]>
            >,
    );

    return tasks;
};

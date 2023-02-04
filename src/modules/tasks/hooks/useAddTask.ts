import { useMutation, useQueryClient } from 'react-query';
import { api, QueryKey } from 'modules/api';
import type { AddTask } from '../types';

export const useAddTask = () => {
    const queryClient = useQueryClient();

    return useMutation((task: AddTask) => api.from('tasks').insert(task) as unknown as Promise<void>, {
        onSuccess: () => {
            queryClient.invalidateQueries(QueryKey.TASKS);
        },
    });
};

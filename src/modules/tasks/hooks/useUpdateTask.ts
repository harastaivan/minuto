import { useMutation, useQueryClient } from 'react-query';
import { api, QueryKey } from 'modules/api';
import type { UpdateTask } from '../types';

export const useUpdateTask = (id: string) => {
    const queryClient = useQueryClient();

    return useMutation((task: UpdateTask) => api.from('tasks').update(task).eq('id', id) as unknown as Promise<void>, {
        onSuccess: () => {
            queryClient.invalidateQueries(QueryKey.TASKS);
        },
    });
};

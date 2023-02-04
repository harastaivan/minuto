import moment from 'moment';

import { TaskCompleted, TaskItem } from 'modules/ui';
import { formatScheduledDate } from 'utils/date';

import { Task } from '../../types';
import { useUpdateTask } from '../../hooks';
import { Scheduled } from '../../config';
import { getScheduledDate } from '../../utils';
import { TaskScheduledDropdown } from '../TaskScheduledDropdown';

export interface TaskCardProps {
    task: Task;
}

export const TaskCard = ({ task: { id, name, scheduled, completed } }: TaskCardProps) => {
    const updateTask = useUpdateTask(id);

    const onClickCompleted = () => {
        if (completed) {
            return updateTask.mutateAsync({
                completed: null,
            });
        }

        return updateTask.mutateAsync({
            completed: moment(new Date()).format('YYYY-MM-DD'),
        });
    };

    const onChangeScheduled = (value: Scheduled) => {
        const scheduled = getScheduledDate(value);

        return updateTask.mutateAsync({
            scheduled,
        });
    };

    return (
        <TaskItem
            loading={updateTask.isLoading}
            rightContent={
                <TaskScheduledDropdown
                    value={scheduled ? formatScheduledDate(scheduled) : Scheduled.LATER}
                    onChange={onChangeScheduled}
                />
            }
        >
            <TaskCompleted completed={Boolean(completed)} onClick={onClickCompleted} />
            <div className={`${completed ? 'line-through' : ''}`}>{name}</div>
        </TaskItem>
    );
};

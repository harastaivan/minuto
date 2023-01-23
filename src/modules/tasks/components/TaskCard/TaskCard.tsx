import moment from 'moment';

import { TaskCompleted, TaskItem, TaskScheduled } from 'modules/ui';
import { formatScheduledDate } from 'utils/date';

import { Task } from '../../types';
import { useTasksContext } from '../../hooks';

export interface TaskCardProps {
    task: Task;
}

export const TaskCard = ({ task: { id, name, scheduled, completed } }: TaskCardProps) => {
    const { updateTask } = useTasksContext();

    const onClickCompleted = () => {
        if (completed) {
            return updateTask({
                id,
                completed: undefined,
            });
        }

        updateTask({
            id,
            completed: moment(new Date()).format('YYYY-MM-DD'),
        });
    };

    return (
        <TaskItem rightContent={<TaskScheduled>{scheduled ? formatScheduledDate(scheduled) : 'later'}</TaskScheduled>}>
            <TaskCompleted completed={Boolean(completed)} onClick={onClickCompleted} />
            <div className={`${completed ? 'line-through' : ''}`}>{name}</div>
        </TaskItem>
    );
};

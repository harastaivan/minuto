import moment from 'moment';

import { TaskCompleted, TaskItem } from 'modules/ui';
import { formatScheduledDate } from 'utils/date';

import { Task } from '../../types';
import { useTasksContext } from '../../hooks';
import { Scheduled } from '../../config';
import { getScheduledDate } from '../../utils';
import { TaskScheduledDropdown } from '../TaskScheduledDropdown';

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

    const onChangeScheduled = (value: Scheduled) => {
        const scheduled = getScheduledDate(value);

        updateTask({
            id,
            scheduled,
        });
    };

    return (
        <TaskItem
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

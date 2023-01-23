import { Heading } from 'modules/ui';
import { Task } from '../../types';
import { Scheduled } from '../../config';
import { TaskCard } from '../TaskCard';

export interface TasksListByGroupProps {
    group: Scheduled;
    tasks: Task[];
}

export const TasksListByGroup = ({ group, tasks }: TasksListByGroupProps) => {
    return (
        <>
            <Heading level={3}>{group}</Heading>

            <div>
                {tasks.map((task) => (
                    <TaskCard key={task.id} task={task} />
                ))}
            </div>
        </>
    );
};

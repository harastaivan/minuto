import { Heading } from 'modules/ui';

import { useTasksContext } from '../../hooks';
import { TaskCard } from '../TaskCard';

export interface TasksListProps {}

export const TasksList = ({}: TasksListProps) => {
    const { tasks } = useTasksContext();

    return (
        <div className="my-8">
            <Heading level={3}>today</Heading>

            <div>
                {tasks.map((task) => (
                    <TaskCard key={task.id} task={task} />
                ))}
            </div>
        </div>
    );
};

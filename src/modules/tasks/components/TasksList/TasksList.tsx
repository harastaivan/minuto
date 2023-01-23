import { useTasksContext } from '../../hooks';
import { Scheduled } from '../../config';
import { getScheduledDate } from '../../utils';
import { TasksListByGroup } from '../TasksListByGroup';

export interface TasksListProps {}

export const TasksList = ({}: TasksListProps) => {
    const { tasks } = useTasksContext();

    return (
        <div className="my-8">
            {Object.values(Scheduled)
                .map((group) => {
                    const date = getScheduledDate(group);
                    const filteredTasks = tasks.filter((task) => task.scheduled === date);

                    if (filteredTasks.length === 0) {
                        return null;
                    }

                    return <TasksListByGroup group={group} tasks={filteredTasks} />;
                })
                .filter((x) => x)}
        </div>
    );
};

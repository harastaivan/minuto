import { useTasks } from '../../hooks';
import { Scheduled } from '../../config';
import { getScheduledDate } from '../../utils';
import { TasksListByGroup } from '../TasksListByGroup';
import { Task } from 'modules/tasks/types';

export interface TasksListProps {}

export const TasksList = ({}: TasksListProps) => {
    const { isLoading, data } = useTasks();

    const tasks = data?.data;

    return (
        <div className="my-8">
            {isLoading ? (
                'loading'
            ) : tasks ? (
                <>
                    {Object.values(Scheduled)
                        .map((group) => {
                            const date = getScheduledDate(group);
                            const filteredTasks = tasks.filter((task) => task.scheduled === date);

                            if (filteredTasks.length === 0) {
                                return null;
                            }

                            return <TasksListByGroup key={group} group={group} tasks={filteredTasks} />;
                        })
                        .filter((x) => x)}
                </>
            ) : (
                'there was an error getting tasks'
            )}
        </div>
    );
};

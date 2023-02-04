import { ClockIcon } from '@heroicons/react/24/outline';
import { config } from 'config';
import { TasksListByGroup } from 'modules/tasks';
import { Scheduled } from 'modules/tasks/config';
import { useTasksContext } from 'modules/tasks/hooks';
import { getScheduledDate } from 'modules/tasks/utils';
import { Heading, Paragraph } from 'modules/ui';

export interface TimerProps {}

export const Timer = ({}: TimerProps) => {
    const { tasks } = useTasksContext();

    const completedSessions = 5;

    const date = getScheduledDate(Scheduled.TODAY);
    const filteredTasks = tasks.filter((task) => task.scheduled === date);

    return (
        <div>
            <div className="my-4">
                <Heading level={2}>start a focus session</Heading>
                <div className="flex flex-col items-center">
                    <div className="flex gap-2">
                        {[...Array(config.timeTracking.goal).keys()].map((session) => (
                            <div
                                key={session}
                                className={`h-1 w-4 ${session < completedSessions ? 'bg-indigo-900' : 'bg-slate-300'} ${
                                    session % 4 === 0 ? 'ml-2' : ''
                                } rounded`}
                            />
                        ))}
                    </div>
                    <ClockIcon className="w-20 h-20 text-red-400 my-4" />
                    <Heading level={1}>25:00</Heading>
                </div>
            </div>
            <TasksListByGroup group={Scheduled.TODAY} tasks={filteredTasks} />
        </div>
    );
};

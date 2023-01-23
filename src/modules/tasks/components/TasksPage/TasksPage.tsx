import { Heading, Paragraph } from 'modules/ui';

import { AddTask } from '../AddTask';
import { TasksContextProvider } from '../TasksContextProvider';
import { TasksList } from '../TasksList';

export interface TasksPageProps {}

export const TasksPage = ({}: TasksPageProps) => {
    return (
        <TasksContextProvider>
            <div>
                <Heading level={1}>tasks</Heading>
                <Paragraph bold mt={3} light>
                    plan your day
                </Paragraph>
                <Paragraph>manage your projects and tasks, see your spent time</Paragraph>

                <TasksList />
                <AddTask />
            </div>
        </TasksContextProvider>
    );
};

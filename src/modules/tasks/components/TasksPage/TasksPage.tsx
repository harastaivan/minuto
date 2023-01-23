import { Heading, Paragraph } from 'modules/ui';

import { AddTask } from '../AddTask';
import { TasksList } from '../TasksList';

export interface TasksPageProps {}

export const TasksPage = ({}: TasksPageProps) => {
    return (
        <div>
            <Heading level={1}>tasks</Heading>
            <Paragraph bold mt={3} light>
                plan your day
            </Paragraph>
            <Paragraph>manage your projects and tasks, see your spent time</Paragraph>

            <TasksList />
            <AddTask />
        </div>
    );
};

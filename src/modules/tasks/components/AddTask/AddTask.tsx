import { type FormEventHandler, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import moment from 'moment';

import { Paragraph, TaskCompleted, TaskItem, TaskScheduled } from 'modules/ui';
import { formatScheduledDate } from 'utils/date';

import { useTasksContext } from '../../hooks';

export interface AddTaskProps {}

export const AddTask = ({}: AddTaskProps) => {
    const [name, setName] = useState('');
    const { addTask } = useTasksContext();

    const scheduled = moment(new Date()).format('YYYY-MM-DD');

    const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
        e.preventDefault();

        addTask({
            id: uuidv4(),
            name,
            scheduled,
        });

        setName('');
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <TaskItem
                    rightContent={<TaskScheduled>{scheduled ? formatScheduledDate(scheduled) : 'later'}</TaskScheduled>}
                >
                    <TaskCompleted />
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="bg-inherit font-mono font-semibold text-inherit focus-visible:outline-0"
                        placeholder="add task"
                    />
                </TaskItem>
            </form>
        </div>
    );
};

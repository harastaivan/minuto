import { type FormEventHandler, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import moment from 'moment';

import { Paragraph, TaskCompleted, TaskItem, TaskScheduled } from 'modules/ui';
import { formatScheduledDate } from 'utils/date';

import { useTasksContext } from '../../hooks';
import { Scheduled } from '../../config';
import { getScheduledDate } from '../../utils';
import { TaskScheduledDropdown } from '../TaskScheduledDropdown';

export interface AddTaskProps {}

export const AddTask = ({}: AddTaskProps) => {
    const [name, setName] = useState('');
    const [scheduled, setScheduled] = useState<string | undefined>(undefined);
    const { addTask } = useTasksContext();

    const onChangeScheduled = (value: Scheduled) => {
        const scheduled = getScheduledDate(value);
        setScheduled(scheduled);
    };

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
                    rightContent={
                        <TaskScheduledDropdown
                            value={scheduled ? formatScheduledDate(scheduled) : 'later'}
                            onChange={onChangeScheduled}
                        />
                    }
                >
                    <TaskCompleted />
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="bg-inherit font-mono font-semibold text-inherit w-full focus-visible:outline-0"
                        placeholder="add task"
                    />
                </TaskItem>
            </form>
        </div>
    );
};

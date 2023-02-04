import { type FormEventHandler, useState } from 'react';

import { TaskCompleted, TaskItem } from 'modules/ui';
import { formatScheduledDate } from 'utils/date';

import { useAddTask } from '../../hooks';
import { Scheduled } from '../../config';
import { getScheduledDate } from '../../utils';
import { TaskScheduledDropdown } from '../TaskScheduledDropdown';

export interface AddTaskProps {}

export const AddTask = ({}: AddTaskProps) => {
    const [name, setName] = useState('');
    const [scheduled, setScheduled] = useState<string | null>(null);
    const addTask = useAddTask();

    const onChangeScheduled = (value: Scheduled) => {
        const scheduled = getScheduledDate(value);
        setScheduled(scheduled);
    };

    const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
        e.preventDefault();

        try {
            const result = await addTask.mutateAsync({ name, scheduled, completed: null });
            console.log(result);
        } catch (error) {
            console.error(error);
        }

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

import type { ReactNode } from 'react';
import { Dropdown, TaskScheduled } from 'modules/ui';
import { Scheduled } from '../../config';

export interface TaskScheduledDropdownProps {
    value: ReactNode;
    onChange: (value: Scheduled) => void;
}

export const TaskScheduledDropdown = ({ value, onChange }: TaskScheduledDropdownProps) => {
    return (
        <Dropdown>
            <Dropdown.Trigger asChild>
                <TaskScheduled>{value}</TaskScheduled>
            </Dropdown.Trigger>

            <Dropdown.Portal>
                <Dropdown.Content sideOffset={5}>
                    {Object.values(Scheduled).map((value) => (
                        <Dropdown.Item key={value} onClick={() => onChange(value)}>
                            {value}
                        </Dropdown.Item>
                    ))}
                </Dropdown.Content>
            </Dropdown.Portal>
        </Dropdown>
    );
};

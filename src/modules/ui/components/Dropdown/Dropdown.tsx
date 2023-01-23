import { Root, Trigger, Portal, Label, Group, type DropdownMenuProps } from '@radix-ui/react-dropdown-menu';
import { DropdownContent } from './DropdownContent';
import { DropdownItem } from './DropdownItem';

export interface DropdownProps extends DropdownMenuProps {}

export const Dropdown = (props: DropdownProps) => {
    return <Root {...props} />;
};

Dropdown.Content = DropdownContent;
Dropdown.Item = DropdownItem;
Dropdown.Trigger = Trigger;
Dropdown.Portal = Portal;
Dropdown.Label = Label;
Dropdown.Group = Group;

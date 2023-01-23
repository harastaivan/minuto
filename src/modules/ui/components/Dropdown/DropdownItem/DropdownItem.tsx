import { DropdownMenuItem, type DropdownMenuItemProps } from '@radix-ui/react-dropdown-menu';

export interface DropdownItemProps extends Omit<DropdownMenuItemProps, 'className'> {}

export const DropdownItem = ({ ...props }: DropdownItemProps) => {
    return (
        <DropdownMenuItem
            className="bg-inherit text-inherit font-mono font-semibold  focus-visible:outline-0 py-1 px-4 hover:text-slate-600 hover:bg-slate-400 rounded cursor-pointer transition-colors"
            {...props}
        />
    );
};

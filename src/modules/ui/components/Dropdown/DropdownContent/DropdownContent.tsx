import { forwardRef } from 'react';
import { DropdownMenuContent, type DropdownMenuContentProps } from '@radix-ui/react-dropdown-menu';

export interface DropdownContentProps extends Omit<DropdownMenuContentProps, 'className'> {}

export const DropdownContent = forwardRef<HTMLDivElement>(({ ...props }: DropdownContentProps, ref) => {
    return <DropdownMenuContent className="bg-slate-300 text-slate-500 px-2 py-2 rounded" {...props} ref={ref} />;
});

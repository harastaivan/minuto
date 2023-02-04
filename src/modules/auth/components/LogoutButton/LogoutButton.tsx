import { ArrowLeftOnRectangleIcon } from '@heroicons/react/24/solid';
import { api } from 'modules/api';
import { Tooltip } from 'modules/ui';

export interface LogoutButtonProps {}

export const LogoutButton = ({}: LogoutButtonProps) => {
    const onClick = () => {
        api.auth.signOut();
    };

    return (
        <Tooltip content={<div>logout</div>}>
            <button className="px-4 py-2 text-slate-500 hover:text-slate-700 transition-colors" onClick={onClick}>
                <ArrowLeftOnRectangleIcon className="h-7 w-7" />
            </button>
        </Tooltip>
    );
};

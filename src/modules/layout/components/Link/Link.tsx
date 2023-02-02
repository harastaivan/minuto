import { NavLink } from 'react-router-dom';
import type { config } from 'config';
import { Tooltip } from 'modules/ui';

export interface LinkProps {
    Icon: (
        props: React.SVGProps<SVGSVGElement> & {
            title?: string | undefined;
            titleId?: string | undefined;
        },
    ) => JSX.Element;
    to: keyof typeof config.routes;
    title: string;
}

export const Link = ({ Icon, to, title }: LinkProps) => {
    return (
        <NavLink
            to={to}
            className={({ isActive }) =>
                isActive ? 'text-red-400' : 'text-slate-500 hover:text-slate-700 transition-colors'
            }
        >
            <Tooltip content={<div>{title}</div>}>
                <div className="px-4 py-2">
                    <Icon className="h-7 w-7" />
                </div>
            </Tooltip>
        </NavLink>
    );
};

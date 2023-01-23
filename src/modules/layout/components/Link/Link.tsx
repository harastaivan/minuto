import { NavLink } from 'react-router-dom';
import type { config } from 'config';

export interface LinkProps {
    Icon: (
        props: React.SVGProps<SVGSVGElement> & {
            title?: string | undefined;
            titleId?: string | undefined;
        },
    ) => JSX.Element;
    to: keyof typeof config.routes;
}

export const Link = ({ Icon, to }: LinkProps) => {
    return (
        <NavLink
            to={to}
            className={({ isActive }) =>
                isActive ? 'text-red-400' : 'text-slate-500 hover:text-slate-700 transition-colors'
            }
        >
            <div className="px-4 py-2 ">
                <Icon className="h-6 w-6 " />
            </div>
        </NavLink>
    );
};

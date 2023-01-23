import { BookOpenIcon, CalendarIcon, ClockIcon, RectangleStackIcon } from '@heroicons/react/24/outline';
import { config } from 'config';
import { Link } from '../Link';

const items = {
    today: {
        Icon: CalendarIcon,
        to: config.routes.today,
    },
    tasks: {
        Icon: RectangleStackIcon,
        to: config.routes.tasks,
    },
    timeTracker: {
        Icon: ClockIcon,
        to: config.routes.timeTracker,
    },
    journal: {
        Icon: BookOpenIcon,
        to: config.routes.journal,
    },
};

export interface SidebarProps {}

export const Sidebar = ({}: SidebarProps) => {
    return (
        <div className="flex flex-col h-full bg-slate-200 py-2">
            {Object.values(items).map((props) => (
                <Link {...props} />
            ))}
        </div>
    );
};

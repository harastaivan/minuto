import {
    BookOpenIcon,
    CalendarIcon,
    ClockIcon,
    RectangleStackIcon,
    ArrowLeftOnRectangleIcon,
} from '@heroicons/react/24/outline';
import { config } from 'config';
import { LogoutButton, UserInfo } from 'modules/auth';
import { JournalPage } from 'modules/journal';
import { Link } from '../Link';

const items = {
    today: {
        Icon: CalendarIcon,
        to: config.routes.today,
        title: 'today',
    },
    tasks: {
        Icon: RectangleStackIcon,
        to: config.routes.tasks,
        title: 'tasks',
    },
    timeTracker: {
        Icon: ClockIcon,
        to: config.routes.timeTracker,
        title: 'time tracking',
    },
    journal: {
        Icon: BookOpenIcon,
        to: config.routes.journal,
        title: 'journal',
    },
};

export interface SidebarProps {}

export const Sidebar = ({}: SidebarProps) => {
    return (
        <div className="flex flex-col h-full bg-slate-200 py-2 justify-between">
            <div className="flex flex-col">
                {Object.values(items).map((props) => (
                    <Link key={props.to} {...props} />
                ))}
            </div>

            <div className="flex flex-col">
                <UserInfo />
                <LogoutButton />
            </div>
        </div>
    );
};

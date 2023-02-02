import { createBrowserRouter, RouterProvider, useLoaderData } from 'react-router-dom';

import { config } from 'config';
import { Authenticated, LoginPage, RedirectPage } from 'modules/auth';
import { TodayPage } from 'modules/today';
import { TasksPage } from 'modules/tasks';
import { TimeTrackingPage } from 'modules/time-tracking';
import { JournalPage } from 'modules/journal';
import { loginPageLoader, redirectPageLoader } from 'modules/api';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Authenticated />,
        children: [
            {
                path: config.routes.today,
                element: <TodayPage />,
            },
            {
                path: config.routes.tasks,
                element: <TasksPage />,
            },
            {
                path: config.routes.timeTracker,
                element: <TimeTrackingPage />,
            },
            {
                path: config.routes.journal,
                element: <JournalPage />,
            },
        ],
    },
    {
        path: config.routes.login,
        element: <LoginPage />,
        loader: loginPageLoader,
    },
    {
        path: config.routes.redirect,
        element: <RedirectPage />,
        loader: redirectPageLoader,
    },
]);

export const Application = () => <RouterProvider router={router} />;

import { createBrowserRouter, RouterProvider, useLoaderData } from 'react-router-dom';

import { config } from 'config';
import { Layout } from 'modules/layout';
import { TodayPage } from 'modules/today';
import { TasksPage } from 'modules/tasks';
import { TimeTrackingPage } from 'modules/time-tracking';
import { JournalPage } from 'modules/journal';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
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
]);

export const Application = () => <RouterProvider router={router} />;

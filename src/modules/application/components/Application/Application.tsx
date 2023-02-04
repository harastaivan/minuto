import { createBrowserRouter, RouterProvider, useLoaderData } from 'react-router-dom';

import { config } from 'config';
import { Authenticated, AuthProvider, LoginPage } from 'modules/auth';
import { TodayPage } from 'modules/today';
import { TasksPage } from 'modules/tasks';
import { TimeTrackingPage } from 'modules/time-tracking';
import { JournalPage } from 'modules/journal';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();

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
    },
]);

export const Application = () => (
    <AuthProvider>
        <QueryClientProvider client={queryClient}>
            <RouterProvider router={router} />
        </QueryClientProvider>
    </AuthProvider>
);

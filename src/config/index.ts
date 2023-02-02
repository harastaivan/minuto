export const config = {
    appUrl: 'http://127.0.0.1:1420',
    api: {
        url: 'https://minuto.fly.dev',
    },
    routes: {
        login: 'login',
        redirect: 'redirect',
        today: 'today',
        tasks: 'tasks',
        timeTracker: 'timeTracker',
        journal: 'journal',
    },
    timeTracking: {
        focusMins: 25,
        breakMins: 5,
        goal: 12,
    },
} as const;

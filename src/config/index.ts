import { AuthProvider } from 'modules/auth/constants';

export const config = {
    appUrl: 'http://127.0.0.1:1420',
    api: {
        url: 'https://dnhirwaewivjpxjnhepz.supabase.co',
        key: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRuaGlyd2Fld2l2anB4am5oZXB6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzU1MTc4NzAsImV4cCI6MTk5MTA5Mzg3MH0._dxuWZ7SOy4K-xIAewctDrrq9WhXHAtfbeeyx61EBDg',
        providers: [AuthProvider.GOOGLE],
    },
    routes: {
        login: 'login',
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

import { type ReactNode, useEffect, useState } from 'react';
import { Session } from '@supabase/supabase-js';

import { api } from 'modules/api';
import { authContext } from '../../context';
import type { AuthContextValue } from '../../types';

export interface AuthProviderProps {
    children: ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
    const [session, setSession] = useState<Session | null>(null);

    const init = async () => {
        const {
            data: { session },
        } = await api.auth.getSession();
        if (session) {
            setSession(session);
        }
    };

    useEffect(() => {
        init();

        api.auth.onAuthStateChange((event, session) => {
            setSession(session);
        });
    }, []);

    const value: AuthContextValue = {
        session,
    };

    const { Provider } = authContext;

    return <Provider value={value}>{children}</Provider>;
};

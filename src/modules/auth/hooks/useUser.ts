import { useAuthContext } from './useAuthContext';

export const useUser = () => {
    const { session } = useAuthContext();

    if (!session) {
        throw new Error('useUser only when authenticated');
    }

    return session.user;
};

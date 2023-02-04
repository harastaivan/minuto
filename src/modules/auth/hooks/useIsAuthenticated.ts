import { useAuthContext } from './useAuthContext';

export const useIsAuthenticated = () => {
    const { session } = useAuthContext();

    return session !== null;
};

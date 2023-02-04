import { useContext } from 'react';
import { authContext } from '../context';

export const useAuthContext = () => {
    const context = useContext(authContext);

    if (context === null) {
        throw new Error('useAuthContext must be wrapped with AuthProvider');
    }

    return context;
};

import { Navigate } from 'react-router-dom';

import { config } from 'config';
import { api } from 'modules/api';
import { Layout } from 'modules/layout';

export interface AuthenticatedProps {}

export const Authenticated = ({}: AuthenticatedProps) => {
    const isAuthenticated = api.authStore.isValid && api.authStore.token;

    if (!isAuthenticated) {
        return <Navigate to={config.routes.login} replace={true} />;
    }

    return <Layout />;
};

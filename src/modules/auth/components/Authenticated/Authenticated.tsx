import { Navigate, Outlet } from 'react-router-dom';

import { config } from 'config';
import { Layout } from 'modules/layout';
import { useIsAuthenticated } from '../../hooks';

export interface AuthenticatedProps {}

export const Authenticated = ({}: AuthenticatedProps) => {
    const isAuthenticated = useIsAuthenticated();

    if (!isAuthenticated) {
        return <Navigate to={config.routes.login} replace={true} />;
    }

    return (
        <Layout>
            <Outlet />
        </Layout>
    );
};

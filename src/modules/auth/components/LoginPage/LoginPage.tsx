import { Navigate } from 'react-router-dom';

import { AnonymousLayout } from 'modules/layout';
import { config } from 'config';

import { AuthProviderButton } from '../AuthProviderButton';
import { useIsAuthenticated } from '../../hooks';

export interface LoginPageProps {}

export const LoginPage = ({}: LoginPageProps) => {
    const isAuthenticated = useIsAuthenticated();

    if (isAuthenticated) {
        return <Navigate to={`/${config.routes.today}`} />;
    }

    return (
        <AnonymousLayout>
            {config.api.providers.map((provider) => {
                return <AuthProviderButton key={provider} provider={provider} />;
            })}
        </AnonymousLayout>
    );
};

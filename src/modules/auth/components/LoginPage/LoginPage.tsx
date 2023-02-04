import { Navigate } from 'react-router-dom';

import { AnonymousLayout } from 'modules/layout';
import { config } from 'config';
import { Heading } from 'modules/ui';

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
            <div className="pb-6">
                <Heading level={1}>
                    welcome to <span className="text-black">minuto</span>
                </Heading>
            </div>
            <div className="pb-48 text-neutral-500 text-center">
                <Heading level={3}>plan your day / time tracker / journal desktop app</Heading>
                <Heading level={3}>made for freelancers</Heading>
            </div>
            {config.api.providers.map((provider) => {
                return <AuthProviderButton key={provider} provider={provider} />;
            })}
        </AnonymousLayout>
    );
};

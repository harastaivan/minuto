import { AuthProvider } from '../AuthProvider';
import { useLoaderData } from 'react-router-dom';
import type { LoginPageData } from 'modules/api';
import { AnonymousLayout } from 'modules/layout';

export interface LoginPageProps {}

export const LoginPage = ({}: LoginPageProps) => {
    const authMethods = useLoaderData() as LoginPageData;

    return (
        <AnonymousLayout>
            {authMethods === undefined && <div>loading</div>}
            {authMethods?.authProviders.map((authProvider) => {
                return <AuthProvider key={authProvider.name} authProvider={authProvider} />;
            })}
        </AnonymousLayout>
    );
};

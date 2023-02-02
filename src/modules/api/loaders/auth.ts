import { LoaderFunctionArgs } from 'react-router-dom';
import { config } from 'config';
import { api } from '../api';

export const loginPageLoader = () => api.collection('users').listAuthMethods();

export type LoginPageData = Awaited<ReturnType<typeof loginPageLoader>>;

export const redirectPageLoader = async ({ request: { url } }: LoaderFunctionArgs) => {
    const params = new URL(url).searchParams;

    const providerText = localStorage.getItem('provider');

    if (!providerText) {
        throw new Error('No provider in localStorage');
    }

    // load the previously stored provider's data
    const provider = JSON.parse(providerText);

    // compare the redirect's state param and the stored provider's one
    if (provider.state !== params.get('state')) {
        throw "State parameters don't match.";
    }

    const redirectUrl = `${config.appUrl}/${config.routes.redirect}`;

    // authenticate
    const user = await api.collection('users').authWithOAuth2(
        provider.name,
        params.get('code')!,
        provider.codeVerifier,
        redirectUrl,
        // pass optional user create data
        {
            emailVisibility: false,
        },
    );

    await api.collection('users').update(user.record.id, {
        avatarUrl: user.meta?.avatarUrl,
    });

    localStorage.removeItem('provider');
    localStorage.setItem('user', JSON.stringify(user));

    return user;
};

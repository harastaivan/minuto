import { config } from 'config';
import type { AuthProviderInfo } from 'pocketbase';

export interface AuthProviderProps {
    authProvider: AuthProviderInfo;
}

export const AuthProvider = ({ authProvider }: AuthProviderProps) => {
    const onClick = () => {
        console.log('login with google');

        localStorage.setItem('provider', JSON.stringify(authProvider));

        const redirectUrl = `${config.appUrl}/${config.routes.redirect}`;

        setTimeout(() => {
            window.location.href = `${authProvider.authUrl}${redirectUrl}`;
        }, 1000);
    };

    return (
        <>
            <button
                onClick={onClick}
                className="font-mono font-bold bg-slate-200 text-slate-500 px-8 py-2 rounded m-2 hover:text-slate-600 hover:bg-slate-300 transition-colors"
            >
                login with {authProvider.name}
            </button>
        </>
    );
};

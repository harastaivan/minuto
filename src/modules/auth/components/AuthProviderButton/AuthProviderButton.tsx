import { api } from 'modules/api';
import type { AuthProvider as Provider } from '../../constants';

export interface AuthProviderButtonProps {
    provider: Provider;
}

export const AuthProviderButton = ({ provider }: AuthProviderButtonProps) => {
    const onClick = () => {
        api.auth.signInWithOAuth({
            provider,
        });
    };

    return (
        <>
            <button
                onClick={onClick}
                className="font-mono font-bold bg-slate-200 text-slate-500 px-8 py-2 rounded m-2 hover:text-slate-600 hover:bg-slate-300 transition-colors"
            >
                login with {provider}
            </button>
        </>
    );
};

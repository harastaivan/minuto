import { api } from 'modules/api';
import { GoogleIcon } from 'modules/ui/modules/icons';
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
                className="font-mono font-bold bg-red-200 text-red-500 px-7 py-2 rounded m-2 hover:text-slate-600 hover:bg-slate-300 transition-colors flex items-center gap-3"
            >
                <GoogleIcon className="w-4 h-4" />
                login with {provider}
            </button>
        </>
    );
};

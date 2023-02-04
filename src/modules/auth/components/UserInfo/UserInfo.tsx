import { api } from 'modules/api';
import { Tooltip } from 'modules/ui';

import { useUser } from '../../hooks';

export interface UserInfoProps {}

export const UserInfo = ({}: UserInfoProps) => {
    const user = useUser();

    const googleIdentity = user.identities?.find((identity) => identity.provider === 'google');
    const googleAvatar = googleIdentity?.identity_data.picture as string | undefined;

    return (
        <Tooltip content={<div>{user.email}</div>}>
            <div className="px-4 py-2">
                {googleAvatar && <img src={googleAvatar} className="h-7 w-7 rounded-full" />}
            </div>
        </Tooltip>
    );
};

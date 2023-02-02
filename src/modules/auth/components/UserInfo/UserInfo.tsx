import { api } from 'modules/api';
import { Tooltip } from 'modules/ui';

export interface UserInfoProps {}

export const UserInfo = ({}: UserInfoProps) => {
    const avatarUrl = api.authStore.model?.avatarUrl;

    return (
        <Tooltip content={<div>{api.authStore.model?.email}</div>}>
            <div className="px-4 py-2">
                <img src={avatarUrl} className="h-7 w-7 rounded-full" />
            </div>
        </Tooltip>
    );
};

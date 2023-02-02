import { Navigate } from 'react-router-dom';
import { config } from 'config';

export interface RedirectPageProps {}

export const RedirectPage = () => {
    return <Navigate to={`/${config.routes.today}`} />;
};

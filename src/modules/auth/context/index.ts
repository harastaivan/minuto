import { createContext } from 'react';
import { AuthContextValue } from '../types';

export const authContext = createContext<AuthContextValue | null>(null);

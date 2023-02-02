import { config } from 'config';
import Pocketbase from 'pocketbase';

export const api = new Pocketbase(config.api.url);

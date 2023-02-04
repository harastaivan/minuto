import { config } from 'config';
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = config.api.url
const supabaseKey = config.api.key

export const api = createClient(supabaseUrl, supabaseKey)

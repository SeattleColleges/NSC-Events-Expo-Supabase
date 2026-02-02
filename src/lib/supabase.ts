import 'react-native-url-polyfill/auto';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.EXPO_PUBLIC_SUPABASE_URL || null;
const supabaseAnonKey = process.env.EXPO_PUBLIC_SUPABASE_ANON_KEY || null;

function checkEnvFile() {
    if (!supabaseUrl || !supabaseAnonKey) throw new Error('Check .env file for supabaseUrl and supabaseAnonKey values');
}
checkEnvFile();

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
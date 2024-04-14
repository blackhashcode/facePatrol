import { createClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL; // You can find this in your project settings on Supabase
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_KEY; // Also found in project settings

const supabase = createClient(supabaseUrl, supabaseAnonKey);

export default supabase;

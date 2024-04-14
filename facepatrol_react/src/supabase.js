import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://qwpwaxwdkqewcjcmlrvp.supabase.co"; // You can find this in your project settings on Supabase
const supabaseAnonKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InF3cHdheHdka3Fld2NqY21scnZwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTMxMTU1NDQsImV4cCI6MjAyODY5MTU0NH0.z119zIBDL-FHX1wFEllQVbIHNsmSL5gnIYRPJdcN4Hw"; // Also found in project settings

const supabase = createClient(supabaseUrl, supabaseAnonKey);

export default supabase;

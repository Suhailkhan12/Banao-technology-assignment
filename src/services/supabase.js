import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://aenjaawcfisrprfjgftx.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFlbmphYXdjZmlzcnByZmpnZnR4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDY0MzA3MzcsImV4cCI6MjAyMjAwNjczN30.qeF-ka3iI0aUTWgxzkCeZq_HvT31DT5Xb60jWq0y64E";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;

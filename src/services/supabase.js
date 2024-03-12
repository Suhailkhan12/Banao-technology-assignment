import { createClient } from "@supabase/supabase-js";

// export const supabaseUrl = "https://jbdjvznwlgvrrnmgklme.supabase.co";

export const supabaseUrl = "https://iqavmrmuakwbsgprvljo.supabase.co";

const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlxYXZtcm11YWt3YnNncHJ2bGpvIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTcxMDE2NjQxMCwiZXhwIjoyMDI1NzQyNDEwfQ.neTO_fzz0k4QB192oYDJ-deHEmcafv5c83PR3bM_904";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;

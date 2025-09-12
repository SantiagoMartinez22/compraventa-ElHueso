import { createClient } from "https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm";

const SUPABASE_URL = "https://sppzbrmslxadplopnker.supabase.co";
const SUPABASE_ANON_KEY = "TU_ANON_KEY_AQUI";

const sb = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
window.sb = sb; // disponible globalmente

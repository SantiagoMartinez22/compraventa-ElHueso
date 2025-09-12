import { createClient } from "https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm";

const SUPABASE_URL = "https://sppzbrmslxadplopnker.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNwcHpicm1zbHhhZHBsb3Bua2VyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTc3MDYwMDEsImV4cCI6MjA3MzI4MjAwMX0.XXzfsaB052T_KuQHLjqZm3lVKfifd115lZQwIES-cTg";

const sb = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
window.sb = sb; // lo exponemos global para usarlo en otras páginas

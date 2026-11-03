import { createBrowserClient } from "@supabase/ssr";
import { supabaseEnv } from "./env";

export function createClient() {
  const env = supabaseEnv();
  if (!env) throw new Error("Supabase não configurado (veja docs/setup.md)");
  return createBrowserClient(env.url, env.key);
}

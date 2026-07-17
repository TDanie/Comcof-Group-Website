import { createClient, type SupabaseClient } from "@supabase/supabase-js";
import { isCommerceConfigured } from "@/lib/env";

/**
 * Server-side Supabase client using the anonymous key; Row-Level Security
 * governs what this client can read. Returns null in LAUNCH mode so callers
 * degrade gracefully instead of throwing.
 *
 * The service-role key, when configured, must only ever be read inside
 * server actions or route handlers that enforce staff authorisation first.
 */
export function getServerSupabase(): SupabaseClient | null {
  if (!isCommerceConfigured()) return null;
  return createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    { auth: { persistSession: false } }
  );
}

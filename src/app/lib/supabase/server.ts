'use server';
import { createServerClient, type CookieOptions } from '@supabase/ssr';
import { cookies } from 'next/headers';
import { createClient } from '@supabase/supabase-js';

export async function createSupabaseServerClientReadOnly() {
	const cookieStore = cookies();

	return createServerClient(
		process.env.NEXT_PUBLIC_SUPABASE_URL!,
		process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
		{
			cookies: {
				get(name: string) {
					return cookieStore.get(name)?.value;
				},
			},
		}
	);
}

export async function createSupabaseServerClient() {
	const cookieStore = cookies();

	return createServerClient(
		process.env.NEXT_PUBLIC_SUPABASE_URL!,
		process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
		{
			cookies: {
				get(name: string) {
					return cookieStore.get(name)?.value;
				},
				set(name: string, value: string, options: CookieOptions) {
					cookieStore.set({ name, value, ...options });
				},
				remove(name: string, options: CookieOptions) {
					cookieStore.delete({ name, ...options });
				},
			},
		}
	);
}

export async function createSupabaseAdmin() {
	return createClient(
		process.env.NEXT_PUBLIC_SUPABASE_URL!,
		process.env.SERVICE_ROLE!,
		{
			auth: {
				autoRefreshToken: false,
				persistSession: false,
			},
		}
	);
}

export async function createSupabaseClient() {
	const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!; // Replace with your Supabase URL
	const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!; // Replace with your Supabase Anon/Public Key

	return createClient(supabaseUrl, supabaseAnonKey);
}

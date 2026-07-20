import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabaseClient';
import bcrypt from 'bcryptjs';

export async function POST(request) {
  try {
    const { username, password } = await request.json();

    // 1. Fetch user by username
    const { data: user, error } = await supabase
      .from('crm_users')
      .select('*')
      .eq('username', username)
      .single();

    if (error || !user) {
      return NextResponse.json({ error: 'Invalid username or password.' }, { status: 401 });
    }

    // 2. Verify Password
    const isValid = await bcrypt.compare(password, user.password_hash);
    if (!isValid) {
      return NextResponse.json({ error: 'Invalid username or password.' }, { status: 401 });
    }

    // 3. Generate Session Token
    const sessionToken = crypto.randomUUID();
    await supabase.from('crm_users').update({ 
      session_token: sessionToken
    }).eq('id', user.id);

    // 4. Set HTTP-only Cookie containing both token and role for easy middleware access
    const response = NextResponse.json({ success: true, role: user.role });
    response.cookies.set({
      name: 'crm_session',
      value: JSON.stringify({ token: sessionToken, role: user.role }),
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      maxAge: 60 * 60 * 24 * 7 // 7 days
    });

    return response;

  } catch (err) {
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}

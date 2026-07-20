import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabaseClient';
import bcrypt from 'bcryptjs';

// Reusable function to verify superadmin status from cookie
async function verifySuperAdmin(request) {
  const cookieVal = request.cookies.get('crm_session')?.value;
  if (!cookieVal) return false;
  
  try {
    const sessionData = JSON.parse(cookieVal);
    if (sessionData.role !== 'superadmin') return false;

    // Verify token matches DB
    const { data, error } = await supabase
      .from('crm_users')
      .select('role')
      .eq('session_token', sessionData.token)
      .single();

    return !error && data?.role === 'superadmin';
  } catch (e) {
    return false;
  }
}

export async function GET(request) {
  const isSuper = await verifySuperAdmin(request);
  if (!isSuper) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

  const { data, error } = await supabase.from('crm_users').select('id, username, role, created_at').order('created_at', { ascending: false });
  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json({ users: data });
}

export async function POST(request) {
  const isSuper = await verifySuperAdmin(request);
  if (!isSuper) return NextResponse.json({ error: 'Unauthorized. Only Superadmins can create users.' }, { status: 401 });

  try {
    const { username, password, role } = await request.json();
    
    if (!['superadmin', 'admin', 'employee'].includes(role)) {
       return NextResponse.json({ error: 'Invalid role.' }, { status: 400 });
    }

    const salt = await bcrypt.genSalt(10);
    const password_hash = await bcrypt.hash(password, salt);

    const { error } = await supabase.from('crm_users').insert([{ username, password_hash, role }]);
    if (error) {
       if (error.code === '23505') return NextResponse.json({ error: 'Username already exists.' }, { status: 400 });
       return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}

export async function DELETE(request) {
  const isSuper = await verifySuperAdmin(request);
  if (!isSuper) return NextResponse.json({ error: 'Unauthorized. Only Superadmins can delete users.' }, { status: 401 });

  try {
    const url = new URL(request.url);
    const id = url.searchParams.get('id');
    
    if (!id) return NextResponse.json({ error: 'User ID is required.' }, { status: 400 });

    const { error } = await supabase.from('crm_users').delete().eq('id', id);
    if (error) return NextResponse.json({ error: error.message }, { status: 500 });

    return NextResponse.json({ success: true });
  } catch (err) {
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}

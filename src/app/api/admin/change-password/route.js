import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabaseClient';
import bcrypt from 'bcryptjs';

export async function POST(request) {
  try {
    const { currentPassword, newPassword } = await request.json();
    
    // Check authentication cookie
    const sessionToken = request.cookies.get('admin_session')?.value;
    if (!sessionToken) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    // 1. Fetch the admin record
    const { data: admin, error } = await supabase
      .from('admin_auth')
      .select('*')
      .eq('id', 1)
      .single();

    if (error || !admin || admin.session_token !== sessionToken) {
      return NextResponse.json({ error: 'Unauthorized or session expired.' }, { status: 401 });
    }

    // 2. Verify Current Password
    const isValid = await bcrypt.compare(currentPassword, admin.password_hash);
    if (!isValid) {
      return NextResponse.json({ error: 'Current password is incorrect.' }, { status: 400 });
    }

    // 3. Hash new password
    const salt = await bcrypt.genSalt(10);
    const newHash = await bcrypt.hash(newPassword, salt);

    // 4. Update password in database
    await supabase.from('admin_auth').update({ 
      password_hash: newHash 
    }).eq('id', 1);

    return NextResponse.json({ success: true });

  } catch (err) {
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}

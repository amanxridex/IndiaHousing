import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabaseClient';
import bcrypt from 'bcryptjs';

export async function POST(request) {
  try {
    const { password } = await request.json();

    // 1. Fetch the admin record
    const { data: admin, error } = await supabase
      .from('admin_auth')
      .select('*')
      .eq('id', 1)
      .single();

    if (error || !admin) {
      return NextResponse.json({ error: 'Admin record not found.' }, { status: 500 });
    }

    // 2. Check if currently locked out
    if (admin.lockout_until) {
      const lockoutTime = new Date(admin.lockout_until).getTime();
      const now = new Date().getTime();
      if (lockoutTime > now) {
        const minutesLeft = Math.ceil((lockoutTime - now) / 60000);
        return NextResponse.json({ 
          error: `Account locked due to multiple failed attempts. Try again in ${minutesLeft} minutes.` 
        }, { status: 429 });
      } else {
        // Lockout expired, reset failed attempts
        await supabase.from('admin_auth').update({ failed_attempts: 0, lockout_until: null }).eq('id', 1);
        admin.failed_attempts = 0;
      }
    }

    // 3. Verify Password
    const isValid = await bcrypt.compare(password, admin.password_hash);

    if (!isValid) {
      const newAttempts = admin.failed_attempts + 1;
      let updateData = { failed_attempts: newAttempts };

      // 4. Trigger lockout if >= 5 attempts
      if (newAttempts >= 5) {
        const lockoutDate = new Date();
        lockoutDate.setMinutes(lockoutDate.getMinutes() + 30);
        updateData.lockout_until = lockoutDate.toISOString();
        await supabase.from('admin_auth').update(updateData).eq('id', 1);
        return NextResponse.json({ 
          error: 'Maximum attempts reached. Account locked for 30 minutes.' 
        }, { status: 429 });
      }

      await supabase.from('admin_auth').update(updateData).eq('id', 1);
      return NextResponse.json({ 
        error: `Incorrect password. ${5 - newAttempts} attempts remaining.` 
      }, { status: 401 });
    }

    // 5. Successful Login - Generate Session Token
    const sessionToken = crypto.randomUUID();
    await supabase.from('admin_auth').update({ 
      failed_attempts: 0, 
      lockout_until: null,
      session_token: sessionToken
    }).eq('id', 1);

    // 6. Set HTTP-only Cookie
    const response = NextResponse.json({ success: true });
    response.cookies.set({
      name: 'admin_session',
      value: sessionToken,
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

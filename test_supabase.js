const { createClient } = require('@supabase/supabase-js');
const bcrypt = require('bcryptjs');

const supabaseUrl = 'https://bcyjxmldruvrrryovhiz.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJjeWp4bWxkcnV2cnJyeW92aGl6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODQ1Mjg0NjgsImV4cCI6MjEwMDEwNDQ2OH0.jcafIKbUcZOonOTaLq4Z1D4oryRx1ottcdLcBKmKI_E';

const supabase = createClient(supabaseUrl, supabaseAnonKey);

async function testLogin() {
  console.log('Fetching user...');
  const { data: user, error } = await supabase
    .from('crm_users')
    .select('*')
    .eq('username', 'superadmin')
    .single();

  if (error) {
    console.error('Supabase error:', error);
    return;
  }
  
  if (!user) {
    console.log('User not found!');
    return;
  }

  console.log('User found:', user.username);
  console.log('Password hash:', user.password_hash);
  
  const isValid = await bcrypt.compare('admin123', user.password_hash);
  console.log('Password matches admin123?', isValid);
}

testLogin();

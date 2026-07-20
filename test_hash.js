const bcrypt = require('bcryptjs');
const hash = '$2a$06$3yqrdbVw9JiQ84nHHzYRvu/oVNS7CDombV.5RvDuGon9Ksm8kr/OG';
const password = 'admin123';
console.log('Match?', bcrypt.compareSync(password, hash));

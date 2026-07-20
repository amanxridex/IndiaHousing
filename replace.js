const fs = require('fs');
const path = require('path');

const replacements = [
  { regex: /\+91 98765 43210/g, replacement: '+91-1353144161' },
  { regex: /\+919876543210/g, replacement: '+911353144161' },
  { regex: /919876543210/g, replacement: '911353144161' },
  { regex: /\+91 22 1234 5678/g, replacement: '+91-1353144161' },
  { regex: /1234567890/g, replacement: '+911353144161' },
  { regex: /\+91 124 456 7890/g, replacement: '+91-1353144161' },
  { regex: /\+91 120 456 7890/g, replacement: '+91-1353144161' },
  { regex: /\+91 522 456 7890/g, replacement: '+91-1353144161' },
  { regex: /Vijay Colony, near Centrio Mall,<br \/>Dehradun/g, replacement: 'Shakti colony, near Centrio Mall,<br />Dehradun' },
  { regex: /Unit 401, Cyber Hub, Phase 2, Gurugram, Haryana 122002/g, replacement: 'Shakti colony, near Centrio Mall, Dehradun' },
  { regex: /Sector 62, Electronic City, Noida, UP 201309/g, replacement: 'Shakti colony, near Centrio Mall, Dehradun' },
  { regex: /Gomti Nagar Extension, Lucknow, UP 226010/g, replacement: 'Shakti colony, near Centrio Mall, Dehradun' },
];

function processDir(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      processDir(fullPath);
    } else if (fullPath.endsWith('.jsx') || fullPath.endsWith('.js')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      let changed = false;
      for (const {regex, replacement} of replacements) {
        if (regex.test(content)) {
          content = content.replace(regex, replacement);
          changed = true;
        }
      }
      if (changed) {
        fs.writeFileSync(fullPath, content);
        console.log('Updated', fullPath);
      }
    }
  }
}

processDir(path.join(__dirname, 'src'));

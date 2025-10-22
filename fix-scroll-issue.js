const fs = require('fs');

// Read the file
let content = fs.readFileSync('app/page.tsx', 'utf8');

// Remove overflow: hidden from main container
content = content.replace(
  /overflow: 'hidden',/g,
  ''
);

// Find the scroll-reveal class and make it visible by default
content = content.replace(
  /\.scroll-reveal \{[\s\S]*?opacity: 0;[\s\S]*?transform: translateY\(30px\);[\s\S]*?transition: all 0\.6s ease-out;[\s\S]*?\}/g,
  `.scroll-reveal {
          opacity: 1;
          transform: translateY(0);
          transition: all 0.6s ease-out;
        }`
);

// Write back
fs.writeFileSync('app/page.tsx', content);
console.log('Fixed scroll visibility issue');

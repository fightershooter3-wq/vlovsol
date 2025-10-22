const fs = require('fs');

// Read the file
let content = fs.readFileSync('app/page.tsx', 'utf8');

// Find all sections and ensure they have proper styling
// Add zIndex and position relative to ensure visibility
content = content.replace(
  /id="about" style=\{\{/g,
  'id="about" style={{\n          position: \'relative\',\n          zIndex: 1,'
);

content = content.replace(
  /id="videos" style=\{\{/g,
  'id="videos" style={{\n          position: \'relative\',\n          zIndex: 1,'
);

content = content.replace(
  /id="chatbots" style=\{\{/g,
  'id="chatbots" style={{\n          position: \'relative\',\n          zIndex: 1,'
);

content = content.replace(
  /id="contact" style=\{\{/g,
  'id="contact" style={{\n          position: \'relative\',\n          zIndex: 1,'
);

// Write back
fs.writeFileSync('app/page.tsx', content);
console.log('Fixed section visibility');

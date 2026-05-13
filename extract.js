const fs = require('fs');
const content = fs.readFileSync('js/data.js', 'utf8');
const regex = /name: "([^"]+)"/g;
let match;
while ((match = regex.exec(content)) !== null) {
  console.log(match[1]);
}

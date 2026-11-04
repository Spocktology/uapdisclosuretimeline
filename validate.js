const fs = require('fs');
const html = fs.readFileSync('index.html', 'utf8');
const m = html.match(/const EVENTS = (\[[\s\S]*?\n\]);/);
if (!m) { console.log('FAIL: no match'); process.exit(1); }
try {
  const e = eval(m[1]);
  console.log('OK', e.length, 'events');
} catch (err) {
  console.log('FAIL:', err.message);
  process.exit(1);
}

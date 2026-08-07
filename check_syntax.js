const fs = require('fs');
const vm = require('vm');

try {
    const code = fs.readFileSync('script.js', 'utf8');
    new vm.Script(code);
    console.log("Syntax OK!");
} catch (e) {
    console.error("Syntax Error found:", e);
}

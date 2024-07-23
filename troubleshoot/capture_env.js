const fs = require('fs');
fs.writeFileSync('vscode_env.txt', JSON.stringify(process.env, null, 2));
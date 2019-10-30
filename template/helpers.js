
const __fs = require('fs');
const __util = require('util');
const __readline = require('readline')

const readDir = __util.promisify(__fs.readdir);

const args = [];
const options = {};
let __cursor = null;
for (const arg of process.argv.slice(2)) {
  if (arg.startsWith('-')) {
    __cursor = arg.replace(/^--?/, '');
    options[__cursor] = true;
  } else if (__cursor) {
    options[__cursor] = arg;
    __cursor = null;
  } else {
    args.push(arg);
  }
}

module.exports = {
  readDirVerbose,
  prompt,
  args,
  options,
}

async function readDirVerbose(path) {
  const contents = await readDir(path, {withFileTypes: true});
  return contents.map(file => ({
    name: file.name,
    type: file.isDirectory() ? 'dir' : 'file',
  }));
}

async function prompt(question) {
  const rl = __readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
  return new Promise(resolve => {
    rl.question(`${question} [Y/n]`, answer => {
      const response = answer === '' || answer.toLowerCase() === 'y';
      rl.close();
      resolve(response);
    });
  });
}

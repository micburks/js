#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const util = require('util');

const mkdir = util.promisify(fs.mkdir);
const readDir = util.promisify(fs.readdir);
const copyFile = util.promisify(fs.copyFile);

if (process.argv.length < 3) {
  console.error('must supply a directory name');
  process.exit(1);
}

const targetDir = path.join(
  process.cwd(),
  process.argv[2],
);
const templateDir = path.join(__dirname, './template');

mkdir(targetDir)
  .then(copyAll)
  .then(() => {
    console.log(`scaffold initialized at ${process.argv[2]}`)
  });

async function copyAll() {
  const files = await readDir(templateDir);
  return Promise.all(
    files.map(file => {
      return copyFile(
        path.join(templateDir, file),
        path.join(targetDir, file)
      );
    })
  );
}

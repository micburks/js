#!/usr/bin/env node

const __fs = require('fs');
const __path = require('path');
const __util = require('util');
const __cp = require('child_process');
const __helpers = require('./helpers.js');

const pathJoin = __path.join;
const pathResolve = __path.resolve;
const pathDirname = __path.dirname;
const pathBasename = __path.basename;

const readDir = __util.promisify(__fs.readdir);
const readDirVerbose = __helpers.readDirVerbose;
const readFile = __util.promisify(__fs.readFile);
const writeFile = __util.promisify(__fs.writeFile);
const copyFile = __util.promisify(__fs.copyFile);

const exec = __util.promisify(__cp.exec);
const spawn = __util.promisify(__cp.spawn);
const execFile = __util.promisify(__cp.execFile);

const prompt = __helpers.prompt;

// cli args/options
const args = __helpers.args;
const options = __helpers.options;

(async () => {
  console.log('new script', {args, options});
  // TODO
})();

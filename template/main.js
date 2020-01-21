#!/usr/bin/env node

import __fs from 'fs';
import __path from 'path';
import __util from 'util';
import __cp from 'child_process';
import * as __helpers from './helpers.js';

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

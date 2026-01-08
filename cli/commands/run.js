#!/usr/bin/env node

/**
 * Run command - Execute TypeScript files with ts-node
 */

import { execSync } from 'child_process';
import { existsSync } from 'fs';
import { resolve } from 'path';

function checkGlobalPackage(packageName) {
  try {
    execSync(`${packageName} --version`, { stdio: 'ignore' });
    return true;
  } catch {
    return false;
  }
}

export async function runCommand(file, options) {
  // Check if ts-node is installed globally
  if (!checkGlobalPackage('ts-node')) {
    console.error('❌ ts-node is not installed globally.');
    console.log('💡 Run: easy-ts setup');
    console.log('   Or: npm install -g ts-node');
    process.exit(1);
  }

  const filePath = resolve(file);

  if (!existsSync(filePath)) {
    console.error(`❌ File not found: ${filePath}`);
    process.exit(1);
  }

  console.log(`🚀 Running: ${file}\n`);

  try {
    const watchFlag = options.watch ? '--watch' : '';
    execSync(`ts-node --esm ${watchFlag} "${filePath}"`, { 
      stdio: 'inherit',
      cwd: process.cwd()
    });
  } catch (error) {
    // Exit code is already handled by execSync
    process.exit(error.status || 1);
  }
}


#!/usr/bin/env node

/**
 * Build command - Compile TypeScript project
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

export async function buildCommand(options) {
  // Check if TypeScript is installed globally
  if (!checkGlobalPackage('tsc')) {
    console.error('❌ TypeScript is not installed globally.');
    console.log('💡 Run: easy-ts setup');
    console.log('   Or: npm install -g typescript');
    process.exit(1);
  }

  // Check if tsconfig.json exists
  const tsconfigPath = resolve('tsconfig.json');
  if (!existsSync(tsconfigPath)) {
    console.error('❌ tsconfig.json not found in current directory.');
    console.log('💡 Run: easy-ts init');
    process.exit(1);
  }

  console.log('🔨 Building TypeScript project...\n');

  try {
    const watchFlag = options.watch ? '--watch' : '';
    execSync(`tsc ${watchFlag}`, { 
      stdio: 'inherit',
      cwd: process.cwd()
    });
  } catch (error) {
    process.exit(error.status || 1);
  }
}


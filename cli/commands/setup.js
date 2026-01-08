#!/usr/bin/env node

/**
 * Setup command - Install global TypeScript dependencies
 */

import { execSync } from 'child_process';

function checkGlobalPackage(packageName) {
  try {
    execSync(`${packageName} --version`, { stdio: 'ignore' });
    return true;
  } catch {
    return false;
  }
}

function installGlobalPackage(packageName) {
  console.log(`📦 Installing ${packageName} globally...`);
  try {
    execSync(`npm install -g ${packageName}`, { stdio: 'inherit' });
    console.log(`✅ ${packageName} installed successfully\n`);
    return true;
  } catch (error) {
    console.error(`❌ Failed to install ${packageName}:`, error.message);
    return false;
  }
}

export async function setupCommand() {
  console.log('🔍 Checking global TypeScript dependencies...\n');

  const globalPackages = ['typescript', 'ts-node'];
  let allInstalled = true;

  // Check what's installed
  for (const pkg of globalPackages) {
    if (checkGlobalPackage(pkg)) {
      try {
        const version = execSync(`${pkg} --version`, { encoding: 'utf-8' }).trim();
        console.log(`✅ ${pkg} is installed (${version})`);
      } catch {
        console.log(`✅ ${pkg} is installed`);
      }
    } else {
      console.log(`⚠️  ${pkg} is not installed`);
      allInstalled = false;
    }
  }

  if (!allInstalled) {
    console.log('\n📦 Installing missing packages...\n');
    for (const pkg of globalPackages) {
      if (!checkGlobalPackage(pkg)) {
        installGlobalPackage(pkg);
      }
    }
  } else {
    console.log('\n✅ All dependencies are already installed!');
  }

  console.log('\n🎉 Setup complete!');
  console.log('\nYou can now use:');
  console.log('  easy-ts init    - Create a new TypeScript project');
  console.log('  easy-ts run     - Run TypeScript files');
  console.log('  easy-ts build   - Build TypeScript project');
}


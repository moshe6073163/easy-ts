#!/usr/bin/env node

/**
 * easy-ts CLI
 * Command-line interface for TypeScript project management
 */

import { program } from 'commander';
import { initCommand } from './commands/init.js';
import { runCommand } from './commands/run.js';
import { buildCommand } from './commands/build.js';
import { setupCommand } from './commands/setup.js';
import { devCommand } from './commands/dev.js';
import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const packageJsonPath = join(__dirname, '..', 'package.json');
const packageJson = JSON.parse(readFileSync(packageJsonPath, 'utf-8'));

program
    .name('easy-ts')
    .description('Easy TypeScript project setup and management CLI')
    .version(packageJson.version);

program
    .command('init')
    .description('Initialize a new TypeScript project')
    .option('-n, --name <name>', 'Project name', 'my-typescript-project')
    .option('-d, --dir <dir>', 'Project directory', '.')
    .action(initCommand);

program
    .command('run')
    .description('Run TypeScript files with ts-node')
    .argument('[file]', 'TypeScript file to run', 'src/index.ts')
    .option('-w, --watch', 'Watch mode (auto-reload on changes)')
    .action(runCommand);

program
    .command('build')
    .description('Build TypeScript project')
    .option('-w, --watch', 'Watch mode')
    .action(buildCommand);

program
    .command('dev')
    .description('Run TypeScript in development mode (watch)')
    .argument('[file]', 'TypeScript file to run', 'src/index.ts')
    .action(devCommand);

program
    .command('setup')
    .description('Setup global TypeScript dependencies (typescript and ts-node)')
    .action(setupCommand);

program.parse();


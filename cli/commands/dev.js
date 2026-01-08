#!/usr/bin/env node

/**
 * Dev command - Run TypeScript in watch mode
 */

import { runCommand } from './run.js';

export async function devCommand(file) {
  await runCommand(file, { watch: true });
}


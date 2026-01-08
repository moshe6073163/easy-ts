#!/usr/bin/env node

/**
 * Init command - Create a new TypeScript project
 */

import { writeFileSync, mkdirSync, existsSync, readdirSync } from 'fs';
import { join, resolve } from 'path';

const templates = {
  'package.json': `{
  "name": "{{name}}",
  "version": "1.0.0",
  "description": "TypeScript project",
  "type": "module",
  "main": "dist/index.js",
  "scripts": {
    "start": "easy-ts run",
    "build": "easy-ts build",
    "dev": "easy-ts dev"
  },
  "keywords": ["typescript"],
  "author": "",
  "license": "ISC"
}`,

  'tsconfig.json': `{
  "compilerOptions": {
    "target": "ES2020",
    "module": "ESNext",
    "lib": ["ES2020"],
    "moduleResolution": "node",
    "rootDir": "./src",
    "outDir": "./dist",
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true,
    "resolveJsonModule": true,
    "declaration": true,
    "declarationMap": true,
    "sourceMap": true
  },
  "include": ["src/**/*"],
  "exclude": ["node_modules", "dist"]
}`,

  'src/index.ts': `// Main TypeScript entry point

console.log('🚀 Hello from TypeScript!');

// Example function
function greet(name: string): string {
  return \`Hello, \${name}!\`;
}

const message = greet('TypeScript Developer');
console.log(message);
`,

  '.gitignore': `# Dependencies
node_modules/

# Build output
dist/

# TypeScript cache
*.tsbuildinfo

# Environment variables
.env
.env.local

# IDE
.vscode/
.idea/
*.swp
*.swo
*~

# OS
.DS_Store
Thumbs.db

# Logs
*.log
npm-debug.log*
yarn-debug.log*
yarn-error.log*
`,

  'README.md': `# {{name}}

TypeScript project created with easy-ts.

## Getting Started

### Install dependencies

\`\`\`bash
npm install
\`\`\`

### Run the project

\`\`\`bash
npm start
# or
easy-ts run
\`\`\`

### Build the project

\`\`\`bash
npm run build
# or
easy-ts build
\`\`\`

### Development mode

\`\`\`bash
npm run dev
# or
easy-ts dev
\`\`\`

## Project Structure

- \`src/\` - TypeScript source files
- \`dist/\` - Compiled JavaScript output
- \`tsconfig.json\` - TypeScript configuration
`
};

function createFile(dir, filename, content, projectName) {
  const filePath = join(dir, filename);
  const processedContent = content.replace(/\{\{name\}\}/g, projectName);
  writeFileSync(filePath, processedContent, 'utf-8');
  console.log(`✅ Created ${filename}`);
}

export async function initCommand(options) {
  const projectName = options.name;
  const targetDir = resolve(options.dir);

  console.log(`🚀 Creating TypeScript project: ${projectName}`);
  console.log(`📁 Directory: ${targetDir}\n`);

  // Check if directory exists and is not empty
  if (existsSync(targetDir)) {
    const files = readdirSync(targetDir);
    if (files.length > 0 && !files.includes('package.json')) {
      console.log('⚠️  Directory is not empty. Continuing anyway...\n');
    }
  } else {
    mkdirSync(targetDir, { recursive: true });
  }

  // Create directory structure
  const srcDir = join(targetDir, 'src');
  if (!existsSync(srcDir)) {
    mkdirSync(srcDir, { recursive: true });
  }

  // Create files
  console.log('📝 Creating project files...\n');
  
  createFile(targetDir, 'package.json', templates['package.json'], projectName);
  createFile(targetDir, 'tsconfig.json', templates['tsconfig.json'], projectName);
  createFile(targetDir, 'src/index.ts', templates['src/index.ts'], projectName);
  createFile(targetDir, '.gitignore', templates['.gitignore'], projectName);
  createFile(targetDir, 'README.md', templates['README.md'], projectName);

  console.log('\n✅ Project created successfully!');
  console.log('\n📦 Next steps:');
  console.log(`   cd ${targetDir}`);
  console.log('   npm install');
  console.log('   npm start');
}


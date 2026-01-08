# easy-ts

🚀 **Easy TypeScript project setup and management CLI tool**

A simple command-line tool to quickly set up, run, and build TypeScript projects on Node.js using global TypeScript and ts-node.

## Installation

Install globally via npm:

```bash
npm install -g easy-ts
```

## Quick Start

### 1. Setup Global Dependencies

First, ensure TypeScript and ts-node are installed globally:

```bash
easy-ts setup
```

This command will:

- Check if `typescript` and `ts-node` are installed globally
- Install them automatically if missing
- Verify everything is ready

### 2. Create a New TypeScript Project

Initialize a new TypeScript project:

```bash
easy-ts init
```

Or specify a project name and directory:

```bash
easy-ts init --name my-project --dir ./my-project
```

This creates:

- `package.json` with ES module configuration
- `tsconfig.json` with TypeScript settings
- `src/index.ts` with example code
- `.gitignore` file
- `README.md` with project instructions

### 3. Run Your TypeScript Code

Navigate to your project and run:

```bash
cd my-project
npm install
easy-ts run
```

Or use the npm scripts:

```bash
npm start      # Run with easy-ts run
npm run build  # Build with easy-ts build
npm run dev    # Development mode with watch
```

## CLI Commands

### `easy-ts setup`

Setup global TypeScript dependencies (typescript and ts-node).

```bash
easy-ts setup
```

**What it does:**

- Checks if `typescript` and `ts-node` are installed globally
- Installs missing packages automatically
- Only installs what's needed to run TypeScript

### `easy-ts init [options]`

Create a new TypeScript project.

**Options:**

- `-n, --name <name>` - Project name (default: `my-typescript-project`)
- `-d, --dir <dir>` - Project directory (default: `.`)

**Examples:**

```bash
easy-ts init
easy-ts init --name my-app
easy-ts init --name my-app --dir ./projects/my-app
```

### `easy-ts run [file]`

Run TypeScript files with ts-node.

**Arguments:**

- `[file]` - TypeScript file to run (default: `src/index.ts`)

**Options:**

- `-w, --watch` - Watch mode (auto-reload on changes)

**Examples:**

```bash
easy-ts run
easy-ts run src/app.ts
easy-ts run --watch src/app.ts
```

### `easy-ts build [options]`

Build TypeScript project (compile to JavaScript).

**Options:**

- `-w, --watch` - Watch mode

**Examples:**

```bash
easy-ts build
easy-ts build --watch
```

### `easy-ts dev [file]`

Run TypeScript in development mode with watch enabled.

**Arguments:**

- `[file]` - TypeScript file to run (default: `src/index.ts`)

**Examples:**

```bash
easy-ts dev
easy-ts dev src/app.ts
```

## Project Structure

When you run `easy-ts init`, it creates:

```
my-project/
├── src/
│   └── index.ts          # Main TypeScript file
├── dist/                 # Compiled JavaScript (after build)
├── package.json          # Project config with ES modules
├── tsconfig.json         # TypeScript configuration
├── .gitignore           # Git ignore file
└── README.md            # Project documentation
```

## Generated package.json

The `init` command creates a `package.json` with:

```json
{
  "type": "module",
  "scripts": {
    "start": "easy-ts run",
    "build": "easy-ts build",
    "dev": "easy-ts dev"
  }
}
```

## Requirements

- **Node.js** v14 or higher
- **npm** or **yarn** package manager

Global dependencies (installed by `easy-ts setup`):

- `typescript` - TypeScript compiler
- `ts-node` - TypeScript execution engine

## How It Works

1. **Global Installation**: Install `easy-ts` globally via npm
2. **Setup**: Run `easy-ts setup` to install global TypeScript tools
3. **Create Projects**: Use `easy-ts init` to scaffold new projects
4. **Run & Build**: Use CLI commands or npm scripts to run and build

## Why Use easy-ts?

✅ **Simple**: One command to set up everything  
✅ **Fast**: Uses global TypeScript tools (no local dependencies needed)  
✅ **Flexible**: Works with any TypeScript project  
✅ **ES Modules**: Configured for modern ES module syntax  
✅ **Auto-setup**: Automatically installs global dependencies when needed  

## Examples

### Create and Run a New Project

```bash
# Install easy-ts globally
npm install -g easy-ts

# Setup global dependencies
easy-ts setup

# Create a new project
easy-ts init --name my-app

# Navigate to project
cd my-app

# Install project dependencies (if any)
npm install

# Run the project
easy-ts run
# or
npm start
```

### Build for Production

```bash
# Build TypeScript to JavaScript
easy-ts build

# Run compiled JavaScript
node dist/index.js
```

### Development Mode

```bash
# Run with auto-reload on file changes
easy-ts dev
# or
npm run dev
```

## Troubleshooting

### Command not found: easy-ts

Make sure you installed it globally:

```bash
npm install -g easy-ts
```

### ts-node is not installed

Run the setup command:

```bash
easy-ts setup
```

### TypeScript compilation errors

Check your `tsconfig.json` configuration. The generated config uses:

- ES2020 target
- ESNext modules
- Strict mode enabled
- Source maps enabled

### Module resolution errors

Make sure your `package.json` has `"type": "module"` and use `.js` extensions in imports:

```typescript
import { something } from './file.js';
```

## Contributing

Contributions are welcome! Feel free to open issues or submit pull requests.

## License

ISC

## Resources

- [TypeScript Documentation](https://www.typescriptlang.org/docs/)
- [ts-node Documentation](https://typestrong.org/ts-node/)
- [Node.js ES Modules](https://nodejs.org/api/esm.html)

# easy-ts

🚀 **Easy TypeScript project setup and management CLI tool**

A simple command-line tool to quickly set up, run, and build TypeScript projects on Node.js using global TypeScript and ts-node.

## 📦 Installation

Install the package globally from npm:

```bash
npm install -g nodejs-easy-ts
```

After installation, you can use the `easy-ts` command globally.

### Verify Installation

Check that the installation was successful:

```bash
easy-ts --version
```

If you see a version number, the installation was successful!

### Troubleshooting: Command Not Found

If you get `'easy-ts' is not recognized as an internal or external command`:

**✅ Best Solution: Use npx (works everywhere)**

```bash
# Use npx instead - no global installation needed!
npx easy-ts setup
npx easy-ts init
npx easy-ts run
```

**Alternative Solutions:**

**For Windows:**

- Make sure npm's global bin directory is in your PATH
- Check npm global prefix: `npm config get prefix`
- Add it to PATH if needed, or restart your terminal after installation

**For all platforms:**

- Try restarting your terminal after installation
- Verify installation: `npm list -g nodejs-easy-ts`

**💡 Recommendation:** You can use `npx easy-ts` for all commands without installing globally. The generated project scripts use `npx easy-ts` automatically, so they work everywhere!

## 🚀 Quick Start

### Step 1: Setup Global Dependencies

First, ensure TypeScript and ts-node are installed globally:

```bash
easy-ts setup
```

This command will:

- Check if `typescript` and `ts-node` are installed globally
- Install them automatically if missing
- Verify everything is ready

**Note:** This only installs global dependencies needed to run TypeScript. It does NOT install project dependencies.

### Step 2: Create a New TypeScript Project

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

### Step 3: Run Your TypeScript Code

Navigate to your project and run:

```bash
cd my-project
npm install

# Option A: Direct command (if globally installed)
easy-ts run

# Option B: Use npx (works everywhere)
npx easy-ts run
```

Or use the npm scripts that were created (these use `npx easy-ts` automatically):

```bash
npm start      # Runs: npx easy-ts run
npm run build  # Runs: npx easy-ts build
npm run dev    # Runs: npx easy-ts dev
```

**Note:** The generated scripts use `npx easy-ts`, so they work even if `easy-ts` is not globally installed or not in your PATH.

## 📋 CLI Commands

### `easy-ts setup`

Setup global TypeScript dependencies (typescript and ts-node).

```bash
# If installed globally
easy-ts setup

# Or use npx
npx easy-ts setup
```

**What it does:**

- Checks if `typescript` and `ts-node` are installed globally
- Installs missing packages automatically
- Only installs what's needed to run TypeScript (no project dependencies)

**Example output:**

```
🔍 Checking global TypeScript dependencies...

✅ typescript is installed (5.3.3)
✅ ts-node is installed (10.9.2)

✅ All dependencies are already installed!
```

### `easy-ts init [options]`

Create a new TypeScript project with all necessary files.

**Options:**

- `-n, --name <name>` - Project name (default: `my-typescript-project`)
- `-d, --dir <dir>` - Project directory (default: `.`)

**Examples:**

```bash
# Create project in current directory
easy-ts init
# or
npx easy-ts init

# Create project with custom name
easy-ts init --name my-app
# or
npx easy-ts init --name my-app

# Create project in specific directory
easy-ts init --name my-app --dir ./projects/my-app
# or
npx easy-ts init --name my-app --dir ./projects/my-app
```

**What it creates:**

```
my-project/
├── src/
│   └── index.ts          # Main TypeScript file
├── package.json          # Project config with ES modules
├── tsconfig.json         # TypeScript configuration
├── .gitignore           # Git ignore file
└── README.md            # Project documentation
```

### `easy-ts run [file]`

Run TypeScript files with ts-node (no compilation needed).

**Arguments:**

- `[file]` - TypeScript file to run (default: `src/index.ts`)

**Options:**

- `-w, --watch` - Watch mode (auto-reload on changes)

**Examples:**

```bash
# Run default file (src/index.ts)
easy-ts run
# or
npx easy-ts run

# Run specific file
easy-ts run src/app.ts
# or
npx easy-ts run src/app.ts

# Run with watch mode
easy-ts run --watch src/app.ts
# or
npx easy-ts run --watch src/app.ts
```

### `easy-ts build [options]`

Build TypeScript project (compile to JavaScript).

**Options:**

- `-w, --watch` - Watch mode

**Examples:**

```bash
# Build once
easy-ts build
# or
npx easy-ts build

# Build with watch mode
easy-ts build --watch
# or
npx easy-ts build --watch
```

**Output:** Compiled JavaScript files in `dist/` directory.

### `easy-ts dev [file]`

Run TypeScript in development mode with watch enabled.

**Arguments:**

- `[file]` - TypeScript file to run (default: `src/index.ts`)

**Examples:**

```bash
# Run default file in watch mode
easy-ts dev
# or
npx easy-ts dev

# Run specific file in watch mode
easy-ts dev src/app.ts
# or
npx easy-ts dev src/app.ts
```

## 📁 Project Structure

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

## 📄 Generated package.json

The `init` command creates a `package.json` with:

```json
{
  "name": "my-project",
  "version": "1.0.0",
  "type": "module",
  "scripts": {
    "start": "npx easy-ts run",
    "build": "npx easy-ts build",
    "dev": "npx easy-ts dev"
  }
}
```

**Important:** The generated scripts use `npx easy-ts`, which means:

- ✅ Works even if `easy-ts` is not globally installed
- ✅ Works even if `easy-ts` is not in your PATH
- ✅ Automatically uses the correct version
- ✅ No need to install `easy-ts` globally to use the scripts

## ⚙️ Requirements

- **Node.js** v14 or higher
- **npm** or **yarn** package manager

Global dependencies (installed by `easy-ts setup`):

- `typescript` - TypeScript compiler
- `ts-node` - TypeScript execution engine

## 🔄 Complete Workflow Example

### 1. Install and Setup

```bash
# Install easy-ts globally from npm
npm install -g nodejs-easy-ts

# Setup global TypeScript dependencies
easy-ts setup

# Or use npx (no global installation needed)
npx easy-ts setup
```

### 2. Create a New Project

```bash
# If installed globally
easy-ts init --name my-app

# Or use npx
npx easy-ts init --name my-app

# Navigate to project
cd my-app
```

### 3. Develop

```bash
# Direct command (if globally installed)
easy-ts dev

# Or use npx
npx easy-ts dev

# Or use npm script (recommended - uses npx automatically)
npm run dev
```

### 4. Build for Production

```bash
# Direct command (if globally installed)
easy-ts build

# Or use npx
npx easy-ts build

# Or use npm script (recommended)
npm run build

# Run compiled JavaScript
node dist/index.js
```

## 🐛 Troubleshooting

### 'easy-ts' is not recognized as an internal or external command

**✅ Best Solution: Use npx (No installation needed)**

```bash
# Use npx instead - works everywhere!
npx easy-ts setup
npx easy-ts init
npx easy-ts run
```

**Alternative Solutions:**

**Solution 1: Install globally from npm**

```bash
npm install -g nodejs-easy-ts
easy-ts --version
```

**Solution 2: Check PATH (Windows)**

- Find npm global directory: `npm config get prefix`
- Add `{npm-global-directory}\node_modules` to your PATH
- Restart terminal

**💡 Recommendation:** Just use `npx easy-ts` - it works everywhere without any setup!

### ts-node is not installed

Run the setup command:

```bash
# If installed globally
easy-ts setup

# Or use npx
npx easy-ts setup
```

Or install manually:

```bash
npm install -g ts-node typescript
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

**Note:** Even though you're importing a `.ts` file, TypeScript requires `.js` extension for ES modules.

### Permission errors (macOS/Linux)

If you get permission errors when installing globally:

```bash
sudo npm install -g nodejs-easy-ts
```

Or configure npm to use a different directory:

```bash
mkdir ~/.npm-global
npm config set prefix '~/.npm-global'
export PATH=~/.npm-global/bin:$PATH
```

## 💡 How It Works

1. **Global Installation**: Install `nodejs-easy-ts` globally via npm (or use `npm link` for local dev)
2. **Setup**: Run `easy-ts setup` to install global TypeScript tools (typescript & ts-node)
3. **Create Projects**: Use `easy-ts init` to scaffold new projects
4. **Run & Build**: Use CLI commands or npm scripts to run and build

## ✨ Why Use easy-ts?

✅ **Simple**: One command to set up everything  
✅ **Fast**: Uses global TypeScript tools (no local dependencies needed)  
✅ **Flexible**: Works with any TypeScript project  
✅ **ES Modules**: Configured for modern ES module syntax  
✅ **Auto-setup**: Automatically installs global dependencies when needed  

## 📚 Resources

- [TypeScript Documentation](https://www.typescriptlang.org/docs/)
- [ts-node Documentation](https://typestrong.org/ts-node/)
- [Node.js ES Modules](https://nodejs.org/api/esm.html)

## 📝 License

ISC

## 🤝 Contributing

Contributions are welcome! Feel free to open issues or submit pull requests.

GitHub: [https://github.com/moshe6073163/easy-ts](https://github.com/moshe6073163/easy-ts)

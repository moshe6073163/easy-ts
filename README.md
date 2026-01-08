# easy-ts

🚀 **Easy TypeScript project setup and management CLI tool**

A simple command-line tool to quickly set up, run, and build TypeScript projects on Node.js using global TypeScript and ts-node.

## 📦 Installation

### Option 1: Install from npm (Published Package)

If the package is published to npm:

```bash
npm install -g nodejs-easy-ts
```

After installation, you can use the `easy-ts` command globally.

### Option 2: Install Locally for Development

If you're developing or testing the package locally:

1. **Navigate to the project directory:**

   ```bash
   cd easy-ts
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Link the package globally (creates the `easy-ts` command):**

   ```bash
   npm link
   ```

   This creates a global symlink so you can use `easy-ts` from anywhere.

4. **Verify installation:**

   ```bash
   easy-ts --version
   ```

   If you see the version number, the installation was successful!

### Troubleshooting: Command Not Found

If you get `'easy-ts' is not recognized as an internal or external command`:

**For Windows:**

- Make sure npm's global bin directory is in your PATH
- Check npm global prefix: `npm config get prefix`
- Add it to PATH if needed, or restart your terminal after installation

**For all platforms:**

- Try restarting your terminal after installation
- Verify installation: `npm list -g nodejs-easy-ts`
- Use full path: `npx easy-ts` (if installed locally)

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
easy-ts run
```

Or use the npm scripts that were created:

```bash
npm start      # Runs: easy-ts run
npm run build  # Runs: easy-ts build
npm run dev    # Runs: easy-ts dev
```

## 📋 CLI Commands

### `easy-ts setup`

Setup global TypeScript dependencies (typescript and ts-node).

```bash
easy-ts setup
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

# Create project with custom name
easy-ts init --name my-app

# Create project in specific directory
easy-ts init --name my-app --dir ./projects/my-app
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

# Run specific file
easy-ts run src/app.ts

# Run with watch mode
easy-ts run --watch src/app.ts
```

### `easy-ts build [options]`

Build TypeScript project (compile to JavaScript).

**Options:**

- `-w, --watch` - Watch mode

**Examples:**

```bash
# Build once
easy-ts build

# Build with watch mode
easy-ts build --watch
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

# Run specific file in watch mode
easy-ts dev src/app.ts
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
    "start": "easy-ts run",
    "build": "easy-ts build",
    "dev": "easy-ts dev"
  }
}
```

**Important:** The generated project uses `easy-ts` commands, so make sure `easy-ts` is installed globally or use `npx easy-ts` instead.

## ⚙️ Requirements

- **Node.js** v14 or higher
- **npm** or **yarn** package manager

Global dependencies (installed by `easy-ts setup`):

- `typescript` - TypeScript compiler
- `ts-node` - TypeScript execution engine

## 🔄 Complete Workflow Example

### 1. Install and Setup

```bash
# Install easy-ts globally (or use npm link for local development)
npm install -g nodejs-easy-ts

# Setup global TypeScript dependencies
easy-ts setup
```

### 2. Create a New Project

```bash
# Create a new project
easy-ts init --name my-app

# Navigate to project
cd my-app
```

### 3. Develop

```bash
# Run in development mode (with watch)
easy-ts dev

# Or use npm script
npm run dev
```

### 4. Build for Production

```bash
# Build TypeScript to JavaScript
easy-ts build

# Run compiled JavaScript
node dist/index.js
```

## 🐛 Troubleshooting

### 'easy-ts' is not recognized as an internal or external command

**Solution 1: Install globally**

```bash
npm install -g nodejs-easy-ts
```

**Solution 2: Use npm link (for local development)**

```bash
cd easy-ts
npm install
npm link
```

**Solution 3: Use npx**

```bash
npx easy-ts --version
```

**Solution 4: Check PATH (Windows)**

- Find npm global directory: `npm config get prefix`
- Add `{npm-global-directory}\node_modules` to your PATH
- Restart terminal

### ts-node is not installed

Run the setup command:

```bash
easy-ts setup
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

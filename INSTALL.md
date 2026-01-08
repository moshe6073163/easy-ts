# Installation Guide

## Quick Installation

Install the package globally from npm:

```bash
npm install -g nodejs-easy-ts
```

## Verify Installation

After installation, test the command:

```bash
easy-ts --version
```

If you see a version number, installation was successful!

## First Time Setup

After installing `easy-ts`, run the setup command to install global TypeScript dependencies:

```bash
easy-ts setup
```

This will install:

- `typescript` (globally)
- `ts-node` (globally)

## Troubleshooting

### Command Not Found Error

**Windows:**

1. Check if npm global bin is in PATH: `npm config get prefix`
2. Restart terminal after installation
3. Try: `npm list -g nodejs-easy-ts` to verify installation

**All Platforms:**

- Restart terminal after installation
- Use `npx easy-ts` if command not found (works without global installation)

### Permission Errors (macOS/Linux)

```bash
sudo npm install -g nodejs-easy-ts
```

Or configure npm to avoid sudo:

```bash
mkdir ~/.npm-global
npm config set prefix '~/.npm-global'
export PATH=~/.npm-global/bin:$PATH
```

## Next Steps

1. Run `easy-ts setup` to install global dependencies
2. Run `easy-ts init` to create your first project
3. See README.md for full documentation

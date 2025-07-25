# Monorepo Project

## Overview
Monorepo is a robust and scalable project organized as a monorepo, employing the capabilities of Turbo for task running and dependency management. It's designed for efficient development and deployment across multiple applications and packages.

## Project Structure
The project uses a workspace structure with the following components:
- `apps/`: Contains all the application-specific code.
- `packages/`: Contains shared libraries and configurations used across applications.

## Installation
To get started with the project, install the necessary dependencies with:
```bash
npm install
```

## Available Scripts
The following scripts are available for development and production builds:

- `npm run dev`: Starts all applications in development mode.
- `npm run build`: Builds all applications for production.
- `npm run lint`: Runs ESLint across all projects to ensure code quality.
- `npm run test`: Executes tests for all projects.
- `npm run format`: Formats all code using Prettier standards.

## Shared Configurations
The project shares configuration files for consistent style and testing across components:
- ESLint: `@repo/eslint-config`
- Prettier: `@repo/prettier-config`
- Jest: `@repo/jest-config`

## Tooling
Monorepo leverages the following development tools:
- **Turbo**: Task runner for efficient dependency management.
- **ESLint & Prettier**: Enforce coding standards and format.
- **Jest**: Testing framework for robust code validation.

## Node Compatibility
The project requires Node.js version 22 or higher.

## Contribution Guidelines
To contribute, follow these steps:
1. Fork the repository.
2. Create a feature branch (`git checkout -b feature/YourFeatureName`).
3. Commit your changes (`git commit -m 'Add your message here'`).
4. Push to the branch (`git push origin feature/YourFeatureName`).
5. Open a Pull Request.

## License
MIT License. Please see the LICENSE file for more information.

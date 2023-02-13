# Next.js Prisma Starter

![Build](https://img.shields.io/github/actions/workflow/status/rorazliev/next-prisma-starter/ci.yml)

A starting point for Next.js apps with Prisma.

## Table of Contents

- [Requirements](#requirements)
- [Get Started](#get-started)
- [Environment Variables](#environment-variables)
- [Project Structure](#project-structure)
- [`npm` Scripts](#npm-scripts)
- [Dependencies](#dependencies)
  - [`dependencies`](#dependencies-1)
  - [`devDependencies`](#devdependencies)
- [License](#license)

### Requirements

- Install [Node.js](https://nodejs.org/en/)
- Install [Docker](https://www.docker.com/)

## Get Started

Create a repository from the template by following [this guide](https://docs.github.com/en/repositories/creating-and-managing-repositories/creating-a-repository-from-a-template).

Clone a newly created repository to your machine by running the `git clone` command.

`cd` to the project folder, and install all dependencies by running the `npm install` command.

## Environment Variables

| Name                    | Description                                                    |
| ----------------------- | -------------------------------------------------------------- |
| `NEXTAUTH_URL`          | https://next-auth.js.org/configuration/options#nextauth_url    |
| `NEXTAUTH_SECRET`       | https://next-auth.js.org/configuration/options#nextauth_secret |
| `EMAIL_SERVER_HOST`     | SMTP server name                                               |
| `EMAIL_SERVER_PORT`     | SMTP port                                                      |
| `EMAIL_SERVER_USER`     | SMTP username                                                  |
| `EMAIL_SERVER_PASSWORD` | SMTP password                                                  |
| `EMAIL_FROM`            | The email address from which emails are sent                   |
| `DATABASE_URL`          | Database connection string                                     |

For examples, see [`.env.example`](.env.example).

## Project Structure

| Name                 | Description                                |
| -------------------- | ------------------------------------------ |
| `__tests__`          | Contains Jest tests                        |
| `.husky`             | Contains Git hooks                         |
| `.github`            | Contains GitHub Actions workflows          |
| `components`         | Contains React components                  |
| `libs/prisma`        | Contains Prisma schema and related scripts |
| `pages`              | Contains pages assosiated with routes      |
| `pages/api`          | Contains API endpoints                     |
| `public`             | Contains public assets                     |
| `styles`             | Contains CSS styles                        |
| `types               | Contains custom \*.d.ts files              |
| `utils`              | Contains utility functions                 |
| `views`              | Contains Next.js page views                |
| `.env.example`       | Contains examples of environment variables |
| `.eslintrc`          | ESlint rules and configurations            |
| `.prettierrc`        | Prettier rules configurations              |
| `docker-compose.yml` | Compose file for Docker                    |
| `jest.config.js`     | Jest configuration file                    |
| `next.config.js`     | Next.js configuration file                 |
| `tailwind.config.js` | Tailwind configuration file                |
| `tsconfig.json`      | TypeScript configuration file              |

## `npm` Scripts

| Name                 | Description                           |
| -------------------- | ------------------------------------- |
| `dev`                | Start Next.js app in development mode |
| `build`              | Build the app for production usage    |
| `start`              | Start a Next.js production server     |
| `prepare`            | Enable Git hooks                      |
| `test`               | Run Jest in watch mode                |
| `test:ci`            | Run Jest in a CI environment          |
| `lint`               | Fix the code code                     |
| `lint:check`         | Check the code style                  |
| `format`             | Format the code                       |
| `format:check`       | Check the code format                 |
| `types:check`        | Check types                           |
| `code-quality:check` | Check the code quality                |
| `db:up`              | Start and run Docker containers       |
| `db:down`            | Stop Docker containers                |
| `db:migrate`         | Migrate your database                 |
| `db:generate`        | Generate types for Prisma Client      |
| `db:seed`            | Seed your database                    |
| `db:studio`          | Run Prisma Studio                     |

## Dependencies

Dependencies are managed throuth `package.json`. In the file, you will find two sections:

### dependencies

| Name                        | Description                                        |
| --------------------------- | -------------------------------------------------- |
| `@hookform/resolvers`       | Validation resolvers for `react-hook-form`         |
| `@next-auth/prisma-adapter` | `next-auth` adapter for Prisma                     |
| `@prisma/client`            | auto-generated and type-safe query builder         |
| `axios`                     | Promise-based HTTP client for browsers and Node.js |
| `framer-motion`             | Production-ready motion library for React          |
| `lodash`                    | JavaScript utility library                         |
| `next`                      | React framework                                    |
| `next-auth`                 | Authentication library for Next.js apps            |
| `next-connect`              | Method routing and middleware for Next.js          |
| `nodemailer`                | Node.js module that allows to send emails          |
| `react`                     | JavaScript library                                 |
| `react-cookie`              | Cookies provider for React                         |
| `react-dom`                 | React package for working with the DOM             |
| `react-hook-form`           | React hooks based forms library                    |
| `zod`                       | TypeScript-first validation library                |

### devDependencies

| Name           | Description                                         |
| -------------- | --------------------------------------------------- |
| `@types`       | Dependencies that provide types                     |
| `autoprefixer` | CSS parser and prefixer                             |
| `eslint`       | AST-based pattern checker for JavaScript            |
| `husky`        | Git hooks                                           |
| `jest`         | JavaScript testing framework                        |
| `postcss`      | Tool that transforms styles with JavaScript plugins |
| `prettier`     | Code formatter                                      |
| `prisma`       | TypeScript-first ORM for Node.js                    |
| `tailwindcss`  | Utility-first CSS framework                         |
| `ts-node`      | TypeScript execution environment for Node.js        |
| `typescript`   | JavaScript superset that provides types             |

To update dependencies, run the `npm update` command.

## License

This is an open-source project licensed under the [MIT Lisense](LICENSE).

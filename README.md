# Turborepo starter

This Turborepo starter is maintained by the Turborepo core team.

## Using this example

Run the following command:

```sh
npx create-turbo@latest
```

## What's inside?

This Turborepo includes the following packages/apps:

### Apps and Packages

- `playground`: a [Next.js](https://nextjs.org/) app
- `@repo/ui`: a stub React component library shared by the `playground` application
- `@repo/typescript-config`: `tsconfig.json`s used throughout the monorepo

Each package/app is 100% [TypeScript](https://www.typescriptlang.org/).

### Utilities

This Turborepo has some additional tools already setup for you:

- [TypeScript](https://www.typescriptlang.org/) for static type checking
- [Biome](https://biomejs.dev/) for fast linting and formatting

### Build

To build all apps and packages, run the following command:

```
cd front_playground
pnpm build
```

### Develop

To develop all apps and packages, run the following command:

```
cd front_playground
pnpm dev
```

# Tips

### Create shadcn components

[Refer this page](https://turborepo.com/docs/guides/tools/shadcn-ui) for more details.

1. Navigate to `apps/playground`
1. Run below.
   ```
   pnpm dlx shadcn@canary add [COMPONENT]
   ```

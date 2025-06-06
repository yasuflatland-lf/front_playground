# Front Playground

This repo is for the playground of frontend development.

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

### Update Libraries at Once in Root

[Refer this page](https://turborepo.com/docs/crafting-your-repository/managing-dependencies#install-dependencies-where-theyre-used). For example, run the command below in the root of monorepo.

```
pnpm up --recursive typescript@latest
```

### Create shadcn components

[Refer this page](https://turborepo.com/docs/guides/tools/shadcn-ui).

1. Navigate to `apps/playground`
1. Run below.
   ```
   pnpm dlx shadcn@canary add [COMPONENT]
   ```

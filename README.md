# shadcn/ui Component Registry

<p align="center">
  A curated registry of new, beautiful components built on top of shadcn/ui, combining the power of Radix UI primitives with the flexibility of Tailwind CSS.
</p>

<p align="center">
  <a href="https://github.com/Codehagen/Prismui/blob/main/LICENSE.md">
    <img src="https://img.shields.io/github/license/Codehagen/Prismui?label=license&logo=github&color=f80&logoColor=fff" alt="License" />
  </a>
</p>

## Introduction

This is a community-driven registry of new components built on top of shadcn/ui. Our goal is to extend the existing shadcn/ui component library with additional, well-crafted components that follow the same principles of accessibility, customization, and developer experience.

## Tech Stack

- [shadcn/ui](https://ui.shadcn.com/) – Base component library
- [Next.js](https://nextjs.org/) – React framework
- [Radix UI](https://www.radix-ui.com/) – Accessible primitives
- [Tailwind CSS](https://tailwindcss.com/) – Styling

## Directory Structure

    .
    ├── src/
    │   ├── components/
    │   │   ├── ui/          # Base shadcn/ui components
    │   │   └── registry/    # New component registry
    │   └── registry/        # Registry configuration
    └── registry.json        # Component metadata

## Installation

```bash
# Create a new Next.js project
npx create-next-app@latest my-app --typescript --tailwind --app

# Install shadcn/ui
npx shadcn@latest init

# Add base components
npx shadcn@latest add button
```

## Contributing

We welcome contributions! Here's how you can help:

1. Fork the repository
2. Create your component following shadcn/ui's principles
3. Add it to the registry
4. Submit a pull request

### Getting Started with Issues

1. 🔍 Find an issue to work on
2. 💬 Comment `.take` on the issue
3. 🎉 Get automatically assigned

## License

Licensed under the [MIT license](https://github.com/Codehagen/Prismui/blob/main/LICENSE.md).


## Create your own component repository
### Configure the site

1. Update `src/lib/config.tsx`
2. Change the `logo` at `src/components/icons.tsx`
3. Update the og image at `public/og.png` and `public/og_static.png`
4. Update the favicon at `public/favicon.ico`

### Create your components

1. Create your component following shadcn/ui's principles
2. Add it to the registry at `src/registry/registry-components.ts`
3. Add examples at `src/registry/registry-examples.ts`
4. Build the registry with `pnpm build:registry`
5. Create a page for the component at `src/app/components/[component-name].tsx`
6. Add the component to the navigation at `src/config/docs.ts`
7. Repeat 1-6 for each component



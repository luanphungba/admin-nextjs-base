# Next.js Component Library and Feature Base

A comprehensive Next.js project that serves as a foundation for rapid UI development with well-structured, reusable components and common features. This project is specifically designed to be AI-friendly, making it easier for AI tools to understand and generate code effectively.

## Project Goals

- Provide a collection of reusable, well-documented UI components using Atomic Design principles
- Implement common features and patterns used in modern web applications
- Maintain a clear and consistent project structure
- Optimize code organization for AI understanding and code generation
- Enable rapid prototyping and development of new features

## Project Structure

```
src/
├── app/                    # Next.js app directory (pages, api routes)
│   ├── api/               # API routes
│   ├── dashboard/         # Dashboard pages
│   └── login/            # Authentication pages
├── components/            # Reusable UI components following Atomic Design
│   ├── ui/               # Atomic components (buttons, inputs, etc.)
│   ├── molecules/        # Simple component combinations
│   ├── organisms/        # Complex UI components
│   └── templates/        # Page layouts and structural components
├── constants/            # Application constants and configuration
├── hooks/               # Custom React hooks
├── i18n/                # Internationalization setup
├── lib/                # Utility functions and shared logic
├── locales/            # Translation files
├── styles/             # Global styles and CSS
└── types/              # TypeScript type definitions
```

## Component Categories

### UI (Atoms)

- Basic, atomic UI elements that serve as building blocks
- Examples: Button, Input, Card, Label, Checkbox, Switch, Dialog, Avatar
- Located in `src/components/ui/`

### Molecules

- Simple combinations of UI components that form reusable units
- Examples: FormInput, FormCheckbox, FormDatepicker, FormDropdown
- Located in `src/components/molecules/`

### Organisms

- Complex components composed of molecules and/or UI components
- Examples: LoginForm, AppSidebar, NavMain, TeamSwitcher
- Located in `src/components/organisms/`

### Templates

- Page-level layouts that define the structure
- Examples: AuthLayout, DashboardLayout, ClientAppProviders
- Located in `src/components/templates/`

## Features

- 🎨 Modern UI components built with best practices
- 📱 Responsive design patterns
- 🔒 Authentication and authorization (NextAuth.js)
- 📝 Form handling and validation
- 🌐 Internationalization (i18n) support
- 🎭 Theme customization
- 🚀 Performance optimized
- 📦 State management
- 📊 Chart components
- 🧩 Reusable UI components

## Key Directories

### `/src/app`

- Next.js App Router implementation
- Page components and API routes
- Follows Next.js 13+ file-system based routing

### `/src/components`

- Organized following Atomic Design principles
- Each component category has its own directory
- Components are modular and reusable

### `/src/hooks`

- Custom React hooks for shared functionality
- Examples: useMobile for responsive design

### `/src/i18n`

- Internationalization configuration
- Translation utilities and helpers

### `/src/lib`

- Utility functions and shared logic
- Common helpers and tools

### `/src/types`

- TypeScript type definitions
- Shared interfaces and types

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Component Development Guidelines

1. **Atomic Design**: Follow the atomic design methodology when creating new components
2. **Modularity**: Each component should be self-contained and have a single responsibility
3. **Documentation**: Components include detailed props documentation and usage examples
4. **Accessibility**: Follow WCAG guidelines and include proper ARIA attributes
5. **TypeScript**: Utilize TypeScript for better type safety and code intelligence
6. **Organization**: Place components in the appropriate atomic design category

## AI-Friendly Code Structure

This project follows specific patterns to make it AI-friendly:

1. **Consistent File Naming**: Clear, descriptive file names that indicate purpose
2. **Type Definitions**: Comprehensive TypeScript types for better code understanding
3. **Component Organization**: Logical grouping using Atomic Design principles
4. **Code Comments**: Strategic comments explaining complex logic and component usage
5. **Predictable Patterns**: Consistent code structure and architectural patterns

## Contributing

Contributions are welcome! Please read our contributing guidelines to get started.

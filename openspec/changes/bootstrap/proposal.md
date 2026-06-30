## Why

The project needs a maintainable Vue 3 component library foundation for general mobile Web applications using WeUI as the default design language. The current workspace has OpenSpec metadata but no component-library implementation, so the first change should establish the project structure, development workflow, core components, styling system, documentation, and packaging contract.

## What Changes

- Add a pnpm workspace for a Vue 3 + TypeScript component library.
- Add `packages/web` as the package source and build target.
- Add a lightweight Vite `playground` as the only interactive development and debugging surface.
- Add a VitePress documentation site for guides and API documentation without maintaining separate demo files.
- Implement a component-library package foundation with shared installation/export conventions but no concrete components yet.
- Add a Less and CSS Variables based WeUI-compatible style token system.
- Add Vitest and Vue Test Utils coverage for component behavior.
- Add build, test, typecheck, docs, and playground scripts.

## Capabilities

### New Capabilities

- `workspace-foundation`: Defines the monorepo workspace, package layout, scripts, TypeScript/Vite setup, and build outputs.
- `component-foundation`: Defines the package-level component architecture, public API conventions, and empty plugin foundation before concrete components are added.
- `style-theme-system`: Defines the Less source style structure, CSS Variables theme contract, WeUI-compatible default styling, and CSS packaging behavior.
- `documentation-and-playground`: Defines the VitePress documentation site and Vite playground responsibilities.

### Modified Capabilities

None.

## Impact

- Adds new project files under the repo root, `packages/web`, `docs`, and `playground`.
- Adds runtime dependencies for Vue 3 and development dependencies for Vite, VitePress, TypeScript, Vitest, Vue Test Utils, and declaration generation.
- Establishes package exports for full-library import and full CSS import.
- Establishes the initial public API surface for `@scope/link-ui` until the final package scope is chosen.

## Context

The repository is currently an empty implementation workspace with OpenSpec initialized. The intended product is a Vue 3 component library for general mobile Web applications, using WeUI as the default interaction and visual reference without depending on WeChat-only runtime APIs.

The first implementation must create the component-library foundation rather than a complete WeUI clone. It must support local component development, stable documentation, test coverage, and package consumption by external Vue 3 + Vite projects.

## Goals / Non-Goals

**Goals:**

- Establish a pnpm workspace with separate component package, playground, and documentation site.
- Initialize component package architecture, API conventions, and plugin shape without implementing concrete components.
- Use Vue SFCs for public components and reserve TSX for internal dynamic rendering utilities when needed.
- Use Less source files and CSS Variables for theming.
- Provide Vite library build output, TypeScript declarations, and full CSS output.
- Use VitePress for stable docs and Vite playground for interactive component debugging.

**Non-Goals:**

- Do not implement the full WeUI component set in this change.
- Do not add a separate docs demo source tree; playground is the interactive surface.
- Do not add automatic on-demand component import plugins in the first version.
- Do not depend on WeChat JS-SDK or WeChat-specific browser APIs.
- Do not publish to npm as part of the initial implementation.

## Decisions

### Use pnpm workspace

The project will use a pnpm workspace with root-level scripts and package-level ownership. This keeps the component package, VitePress docs, and playground isolated while allowing local workspace dependencies.

Alternatives considered:

- Single package project: simpler initially, but docs and playground dependencies become tangled with library publishing.
- npm/yarn workspaces: viable, but pnpm gives stricter dependency boundaries and predictable workspace linking.

### Use `.vue` SFCs for public components

Public components will default to Vue SFCs because the first component set is mostly fixed mobile DOM structure, slots, state classes, and CSS. TSX remains allowed for internal dynamic utilities such as icons or render helpers.

Alternatives considered:

- All TSX: more flexible for dynamic rendering, but less readable for WeUI-like structure and style-heavy components.
- Mixed by default: higher inconsistency for the first version.

### Use Less files and CSS Variables

The style system will use Less source files, a shared token layer, component class prefixes, and CSS Variables. Build output remains a full CSS file for consumers. This keeps authoring flexible while preserving a stable CSS consumption contract.

Alternatives considered:

- CSS Modules: good encapsulation, but less ergonomic for consumer overrides and documentation examples.

### Use playground for interaction and VitePress for docs

The playground will be the only interactive development/debugging surface. VitePress will contain guides, API tables, and inline code examples, but no separate reusable demo directory.

Alternatives considered:

- VitePress demos as source of truth: useful for docs-first libraries, but creates duplicate interaction surfaces.
- Storybook: strong state exploration, but heavier than needed for a mobile WeUI-style first version.

### Use Vite library mode plus declaration generation

The component package will build JavaScript with Vite library mode and declarations with Vue TypeScript tooling. The first version must support full import and full CSS import; the package layout can reserve room for per-component output later.

Alternatives considered:

- Rollup-only build: powerful but adds more manual configuration.
- tsup/unbuild: concise for TS libraries, but Vue SFC + CSS handling is more direct through Vite.

## Risks / Trade-offs

- No concrete component in the initial architecture -> Mitigation: keep source layout, package exports, style tokens, playground, and docs ready for follow-up component specs.
- VitePress without separate demos can drift from playground states -> Mitigation: document stable examples in Markdown and treat playground as the manual interaction source.
- CSS Variables expose a broad surface too early -> Mitigation: keep first tokens small and semantic, then extend only when components require it.
- CJS output can complicate ESM-first Vue packaging -> Mitigation: make ESM the primary contract and keep CJS optional if Vite build complexity increases.
- External package name is not final -> Mitigation: use `@scope/link-ui` as a placeholder in configuration and docs until the real scope is chosen.

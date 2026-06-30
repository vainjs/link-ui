## ADDED Requirements

### Requirement: Workspace layout
The project SHALL define a pnpm workspace with separate packages for the component library, VitePress documentation, and Vite playground.

#### Scenario: Workspace packages are discoverable
- **WHEN** dependencies are installed from the repository root
- **THEN** pnpm MUST discover `packages/web`, `docs`, and `playground` as workspace projects

### Requirement: Root development scripts
The project SHALL expose root-level scripts for playground development, documentation development, library build, documentation build, tests, and type checking.

#### Scenario: Root scripts are available
- **WHEN** a developer reads the root `package.json`
- **THEN** it MUST include scripts for `dev`, `docs:dev`, `build`, `docs:build`, `test`, and `typecheck`

### Requirement: Component package build output
The component package SHALL build distributable JavaScript, TypeScript declarations, and CSS assets for external Vue 3 consumers.

#### Scenario: Library build output is generated
- **WHEN** the library build command succeeds
- **THEN** the package `dist` directory MUST contain an ESM entry, declaration files, and a full CSS entry

### Requirement: Package export contract
The component package SHALL define package metadata that supports full-library imports and full CSS imports.

#### Scenario: Consumer imports package entry
- **WHEN** a consumer imports `{ LinkButton }` from the package root
- **THEN** the package exports MUST resolve to the built ESM entry and matching TypeScript declarations

#### Scenario: Consumer imports package styles
- **WHEN** a consumer imports the package CSS entry
- **THEN** the package exports MUST resolve to the built full CSS file

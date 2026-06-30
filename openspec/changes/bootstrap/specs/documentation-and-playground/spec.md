## ADDED Requirements

### Requirement: Vite playground
The project SHALL provide a Vite playground that is ready to consume component source code for future interactive development and debugging.

#### Scenario: Playground starts from root script
- **WHEN** a developer runs the root playground development command
- **THEN** the Vite playground MUST start and render a mobile-oriented architecture surface

### Requirement: Playground architecture shell
The playground SHALL provide a mobile-oriented shell without implementing concrete component state views in the initial architecture change.

#### Scenario: Architecture playground view exists
- **WHEN** a developer opens the playground
- **THEN** it MUST show the workspace areas and explain that future component specs will add component debugging views

### Requirement: VitePress documentation
The project SHALL provide a VitePress documentation site for introduction, installation, usage, and theme customization.

#### Scenario: Documentation starts from root script
- **WHEN** a developer runs the root documentation development command
- **THEN** VitePress MUST start with guide pages available

### Requirement: Documentation excludes component demos
The documentation site SHALL not maintain component demo pages or a reusable demo source directory in the initial architecture change.

#### Scenario: Documentation contains only architecture guides
- **WHEN** a developer opens the documentation tree
- **THEN** it MUST contain guide pages but no component demo source directory

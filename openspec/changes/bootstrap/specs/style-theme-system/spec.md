## ADDED Requirements

### Requirement: CSS variable token contract
The component library SHALL define a shared CSS Variables token layer in Less source files for primary color, danger color, warning color, text colors, surface colors, radii, font sizing, line height, and overlay z-indexes.

#### Scenario: Theme tokens are loaded
- **WHEN** the package full CSS entry is imported
- **THEN** the root CSS Variables MUST be available to all Link UI components

### Requirement: WeUI-compatible default styling
The component library SHALL use default styles that are visually compatible with WeUI mobile interfaces while avoiding direct dependency on WeUI source files.

#### Scenario: Button default style is applied
- **WHEN** `LinkButton` renders without consumer overrides
- **THEN** it MUST use Link UI class names and CSS Variables to display a mobile-friendly button style

### Requirement: Stable CSS class prefix
All public component classes SHALL use the `link-` prefix.

#### Scenario: Button class prefix is present
- **WHEN** `LinkButton` renders
- **THEN** its root element MUST include a class starting with `link-button`

### Requirement: CSS side effects are preserved
The component package SHALL mark style files as side effects so package consumers do not accidentally tree-shake required styles.

#### Scenario: Package metadata preserves CSS
- **WHEN** a bundler reads the component package metadata
- **THEN** CSS and Less assets MUST be listed as side effects

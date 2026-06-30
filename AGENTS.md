# Link UI 开发规范

## 项目定位

Link UI 是基于 Vue 3 和 WeUI 设计语言的通用移动 Web 组件库。

开发时默认面向移动端 H5 场景，不绑定微信运行环境，不依赖微信 JS-SDK。

## 技术栈

- Vue 3
- TypeScript
- Vite
- VitePress
- Vitest
- Vue Test Utils
- pnpm workspace
- Turbo
- Less + CSS Variables

## 目录职责

- `packages/web`：组件库源码、样式、构建配置和包入口。
- `playground`：本地组件开发调试环境。
- `docs`：VitePress 文档站。

## 组件规范

- 组件名使用 `Link` 前缀，例如 `LinkButton`。
- 组件目录使用 kebab-case，例如 `button`、`action-sheet`。
- 对外组件默认使用 `.vue` SFC。
- 内部动态渲染工具、图标映射等可使用 TSX。
- 表单类组件使用 Vue 标准的 `modelValue` / `update:modelValue`。
- 新组件需要从 `packages/web/src/index.ts` 导出。

## 样式规范

- 样式使用 Less 和 CSS Variables。
- 公共主题变量放在 `packages/web/src/style/variables.less`。
- 基础样式放在 `packages/web/src/style/base.less`。
- 组件样式放在对应组件目录中。
- 样式类名使用 `link-` 前缀，例如 `link-button`。
- 组件库样式入口由 `packages/web/src/style/index.less` 统一维护。

## 测试规范

- 测试使用 Vitest 和 Vue Test Utils。
- 组件测试文件放在对应组件目录的 `__tests__` 中，例如 `packages/web/src/button/__tests__/Button.test.ts`。
- 测试应覆盖组件渲染、props、slots、emits 和关键交互。
- 表单类组件需要覆盖 `v-model` 行为。

## 文档与调试

- playground 用于组件交互调试和移动端效果验证。
- docs 用于稳定的安装说明、使用说明、主题说明和组件 API 文档。
- 不维护独立 demo 目录；交互调试统一放在 playground。

## 常用命令

```bash
pnpm dev
pnpm docs:dev
pnpm test
pnpm typecheck
pnpm build
pnpm docs:build
```

提交前至少运行：

```bash
pnpm test
pnpm typecheck
pnpm build
pnpm docs:build
```

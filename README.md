# Link UI

Link UI 是一个基于 Vue 3 和 WeUI 设计语言的通用移动 Web 组件库。

项目默认面向移动端 H5 场景，视觉风格参考 WeUI，但不绑定微信运行环境，也不依赖微信 JS-SDK。

当前阶段只完成组件库工程架构初始化，具体组件会在后续逐步补充。

## 技术栈

- Vue 3
- TypeScript
- Vite
- VitePress
- Vitest
- Vue Test Utils
- pnpm workspace
- Turbo
- Less
- CSS Variables

## 目录结构

```txt
link-ui/
  packages/
    web/               # 组件库源码与打包配置
      src/
        style/         # 全局样式变量与基础样式
        index.ts       # 组件库入口
  playground/          # 本地组件开发调试环境
  docs/                # VitePress 文档站
```

## 命令说明

| 命令              | 说明                                                        |
| ----------------- | ----------------------------------------------------------- |
| `pnpm install`    | 安装 workspace 依赖。                                       |
| `pnpm dev`        | 启动 playground，用于本地组件开发和移动端效果调试。         |
| `pnpm docs:dev`   | 启动 VitePress 文档站开发服务。                             |
| `pnpm test`       | 运行组件测试。测试文件放在对应组件目录的 `__tests__` 中。   |
| `pnpm typecheck`  | 通过 Turbo 按 workspace 执行 TypeScript / Vue 类型检查。     |
| `pnpm build`      | 通过 Turbo 构建所有 workspace，并复用缓存。                  |
| `pnpm docs:build` | 构建 VitePress 静态文档。                                   |

常用开发流程：

```bash
# 启动组件调试环境
pnpm dev

# 启动文档站
pnpm docs:dev

# 提交前检查
pnpm test
pnpm typecheck
pnpm build
pnpm docs:build
```

## 样式方案

项目使用 Less 和 CSS Variables。

组件库样式入口：

```ts
import '@scope/link-ui/dist/style.css'
```

主题变量位于：

```txt
packages/web/src/style/variables.less
```

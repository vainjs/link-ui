# 主题定制

Link UI 使用 Less 组织样式，并通过 CSS Variables 暴露主题 token。

```css
:root {
  --link-color-primary: #07c160;
  --link-color-danger: #fa5151;
  --link-bg-page: #f7f7f7;
  --link-radius-md: 8px;
}
```

业务项目可以在全局样式中覆盖这些变量。

# 快速开始

本指南将帮助您快速上手 Gi Components 组件库。

## 环境要求

在使用 Gi Components 之前，请确保您的项目满足以下要求：

- Vue.js 3.x
- Element Plus 2.x
- TypeScript 4.5+（可选，但推荐）


## 引入方式

### 全局引入

全局引入是最简单的使用方式，适合在整个项目中频繁使用组件的场景。

```js
import { createApp } from 'vue'
import App from './App.vue'

// 引入样式
import 'element-plus/dist/index.css'
import GiComponents from '@gi-components/el'
import { Dialog } from '@gi-components/el';
import '@gi-components/el/dist/el.css'

const app = createApp(App)
Dialog._context = app._context; // 继承主应用的上下文

// 注册组件库
app.use(GiComponents)

app.mount('#app')
```

## TypeScript 支持

Gi Components 完全支持 TypeScript，您可以在项目中享受类型提示。如果您的项目使用 TypeScript，建议在 `tsconfig.json` 中添加以下配置：

```json
{
  "compilerOptions": {
    "types": [
      "element-plus/global",
      "@gi-components/el/packages/components.d.ts"
    ]
  }
}
```

## 常见问题

### 样式冲突

如果遇到样式冲突问题，可以尝试调整样式引入顺序，或者使用 CSS Modules 等方式进行样式隔离。

### 组件不显示

- 检查是否正确引入了样式文件
- 确认组件名称是否正确（默认前缀为 `Gi`）
- 检查 Vue 实例是否正确注册了组件

### 版本兼容性

- Gi Components 1.x 版本适用于 Vue 3.x 和 Element Plus 2.x
- 如果您使用的是旧版本的 Element Plus，请考虑升级到最新版本

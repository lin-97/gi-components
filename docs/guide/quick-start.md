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

## 内置CSS变量

```css
body {
  --padding-x: 14px;
  --padding-x-small: 10px;
  --padding-y: 10px;
  --padding-y-small: 6px;
}
```

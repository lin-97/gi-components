# 快速开始

本指南将帮助您快速上手 Gi Components 组件库。

## 安装

```bash
# 使用 npm
npm install gi-components --save

# 使用 yarn
# yarn add gi-components

# 使用 pnpm
# pnpm install gi-components
```

## 引入组件

### 全局引入

在您的项目入口文件中（通常是 main.js 或 main.ts）：

```js
import { createApp } from 'vue'
import App from './App.vue'

// 引入 Element Plus 样式
import 'element-plus/dist/index.css'

// 引入 Gi Components
import GiComponents from 'gi-components'
import 'gi-components/dist/gi-components.css'

const app = createApp(App)

// 使用组件库
app.use(GiComponents)

app.mount('#app')
```
# 安装指南

本指南提供了 Gi Components 组件库的详细安装步骤和不同环境下的配置方法。

## 环境要求

在使用 Gi Components 之前，请确保您的项目满足以下要求：

- Vue.js 3.x
- Element Plus 2.x
- TypeScript 4.5+（可选，但推荐）

## 安装依赖

### 安装 Element Plus

Gi Components 是基于 Element Plus 二次封装的组件库，因此需要先安装 Element Plus：

```bash
# 使用 npm
npm install element-plus --save

# 使用 pnpm
pnpm install element-plus
```

### 安装 Gi Components

然后安装 Gi Components：

```bash
# 使用 npm
npm install gi-components --save

# 使用 pnpm
pnpm install gi-components
```

## 引入样式

Element Plus 和 Gi Components 都需要引入各自的样式文件：

```js
// 引入 Element Plus 样式
import 'element-plus/dist/index.css'

// 引入 Gi Components 样式
import 'gi-components/dist/gi-components.css'
```

## 引入方式

### 全局引入

全局引入是最简单的使用方式，适合在整个项目中频繁使用组件的场景。

```js
import { createApp } from 'vue'
import App from './App.vue'

// 引入样式
import 'element-plus/dist/index.css'
import 'gi-components/dist/gi-components.css'

// 引入组件库
import GiComponents from 'gi-components'

const app = createApp(App)

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
      "gi-components/dist/index.d.ts"
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

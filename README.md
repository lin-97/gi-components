# Gi Components

<div align="center">
  <p>Vue3中基于Element Plus二次封装的基础组件库</p>
  <img src="https://img.shields.io/badge/Vue-3.x-brightgreen.svg" alt="Vue Version">
  <img src="https://img.shields.io/badge/Element%20Plus-2.x-blue.svg" alt="Element Plus Version">
  <img src="https://img.shields.io/badge/TypeScript-4.5%2B-yellow.svg" alt="TypeScript Version">
  <img src="https://img.shields.io/badge/License-MIT-green.svg" alt="License">
</div>

## 📦 特性

- 🚀 基于Vue3 + TypeScript开发，提供完整的类型定义
- 🎨 基于Element Plus二次封装，扩展更多实用功能
- 💪 统一的组件设计规范和使用体验
- 🔧 支持按需引入和全局注册
- 📝 完善的文档和示例

## 🚀 安装

### 使用 npm

```bash
npm install @gi-components/el --save
```

### 使用 pnpm

```bash
pnpm install @gi-components/el
```

## 🔧 快速开始

### 全局注册

```javascript
import { createApp } from 'vue';
import App from './App.vue';

// 引入样式
import 'element-plus/dist/index.css';
import GiComponents from '@gi-components/el';
import '@gi-components/el/dist/el.css';

const app = createApp(App);

// 注册组件库
app.use(GiComponents);

app.mount('#app');
```

## 🔨 开发指南

### 项目结构

gi-components/
├── docs/ # 文档站点
│ └── guide/ # 使用指南
├── packages/ # 组件源码
├── dist/ # 构建输出目录
├── vite.config.ts # Vite配置
├── tsconfig.json # TypeScript配置
└── package.json # 项目配置

````

### 开发步骤

1. 克隆仓库
   ```bash
   git clone https://github.com/lin-97/gi-components.git
   cd gi-components
````

2. 安装依赖

   ```bash
   pnpm install
   ```

3. 启动开发服务器

   ```bash
   pnpm dev
   ```

4. 构建文档

   ```bash
   pnpm docs:build
   ```

5. 构建库
   ```bash
   pnpm build:lib
   ```

## 🤝 贡献

欢迎贡献代码或提出建议！请遵循以下流程：

1. Fork 本仓库
2. 创建特性分支 (`git checkout -b feature/AmazingFeature`)
3. 提交更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 开启 Pull Request

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

## 📝 许可证

本项目采用 MIT 许可证 - 查看 [LICENSE](LICENSE) 文件了解详情

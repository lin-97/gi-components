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
- 🌐 支持国际化

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
import { createApp } from 'vue'
import App from './App.vue'

// 引入样式
import 'element-plus/dist/index.css'
import GiComponents from '@gi-components/el'
import '@gi-components/el/dist/el.css'

const app = createApp(App)

// 注册组件库
app.use(GiComponents)

app.mount('#app')
```

## 📚 组件列表

| 组件名称 | 组件描述 | 文档链接 |
|---------|---------|---------|
| GiButton | 按钮组件 | [文档](https://lin-97.github.io/gi-components/components/button/) |
| GiCard | 卡片组件 | [文档](https://lin-97.github.io/gi-components/components/card/) |
| GiCheckboxGroup | 复选框组 | [文档](https://lin-97.github.io/gi-components/components/checkbox-group/) |
| GiDialog | 对话框 | [文档](https://lin-97.github.io/gi-components/components/dialog/) |
| GiEditTable | 可编辑表格 | [文档](https://lin-97.github.io/gi-components/components/edit-table/) |
| GiForm | 表单组件 | [文档](https://lin-97.github.io/gi-components/components/form/) |
| GiGrid | 网格布局 | [文档](https://lin-97.github.io/gi-components/components/grid/) |
| GiInputGroup | 输入组 | [文档](https://lin-97.github.io/gi-components/components/input-group/) |
| GiInputSearch | 搜索输入框 | [文档](https://lin-97.github.io/gi-components/components/input-search/) |
| GiPageLayout | 页面布局 | [文档](https://lin-97.github.io/gi-components/components/page-layout/) |
| GiRadioGroup | 单选框组 | [文档](https://lin-97.github.io/gi-components/components/radio-group/) |
| GiSelect | 选择器 | [文档](https://lin-97.github.io/gi-components/components/select/) |
| GiTable | 表格组件 | [文档](https://lin-97.github.io/gi-components/components/table/) |
| GiTabs | 标签页 | [文档](https://lin-97.github.io/gi-components/components/tabs/) |

## 💡 使用示例

### GiButton 示例

```vue
<template>
  <div>
    <GiButton type="primary">主要按钮</GiButton>
    <GiButton>默认按钮</GiButton>
    <GiButton type="success">成功按钮</GiButton>
    <GiButton type="warning">警告按钮</GiButton>
    <GiButton type="danger">危险按钮</GiButton>
  </div>
</template>
```

### GiForm 示例

```vue
<template>
  <GiForm
    :model="form"
    :rules="rules"
    ref="formRef"
    label-width="100px"
  >
    <GiFormItem label="用户名" prop="username">
      <el-input v-model="form.username" placeholder="请输入用户名" />
    </GiFormItem>
    <GiFormItem label="密码" prop="password">
      <el-input v-model="form.password" type="password" placeholder="请输入密码" />
    </GiFormItem>
    <GiFormItem>
      <GiButton type="primary" @click="submitForm">提交</GiButton>
      <GiButton @click="resetForm">重置</GiButton>
    </GiFormItem>
  </GiForm>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'
import type { ElForm } from 'element-plus'

const formRef = ref<InstanceType<typeof ElForm>>()
const form = reactive({
  username: '',
  password: ''
})

const rules = {
  username: [
    { required: true, message: '请输入用户名', trigger: 'blur' }
  ],
  password: [
    { required: true, message: '请输入密码', trigger: 'blur' },
    { min: 6, max: 20, message: '密码长度在 6 到 20 个字符', trigger: 'blur' }
  ]
}

const submitForm = () => {
  formRef.value?.validate((valid) => {
    if (valid) {
      console.log('submit!', form)
    } else {
      console.log('error submit!')
      return false
    }
  })
}

const resetForm = () => {
  formRef.value?.resetFields()
}
</script>
```

## 🔨 开发指南

### 项目结构

gi-components/
├── docs/          # 文档站点
│   └── guide/     # 使用指南
├── packages/      # 组件源码
├── dist/          # 构建输出目录
├── vite.config.ts # Vite配置
├── tsconfig.json  # TypeScript配置
└── package.json   # 项目配置
```

### 开发步骤

1. 克隆仓库
   ```bash
   git clone https://github.com/lin-97/gi-components.git
   cd gi-components
   ```

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

## 📝 许可证

本项目采用 MIT 许可证 - 查看 [LICENSE](LICENSE) 文件了解详情

---

<div align="center">
  <p>Made with ❤️ by lin</p>
</div>
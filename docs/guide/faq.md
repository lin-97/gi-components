# 常见问题

本文档汇总了使用 Gi Components 组件库时常见的问题和解决方案，希望能帮助您快速解决遇到的困难。

## 安装问题

### 1. 安装时遇到依赖冲突

**问题描述**：安装 Gi Components 时遇到依赖版本冲突的错误。

**解决方案**：

- 检查您的项目中 Element Plus 的版本，确保与 Gi Components 兼容
- 使用 `--legacy-peer-deps` 参数强制安装

```bash
# npm
npm install @gi-components/el --legacy-peer-deps

# pnpm
pnpm install @gi-components/el --force
```

### 2. 安装后无法找到模块

**问题描述**：安装成功后，import Gi Components 时出现 "Cannot find module 'gi-components'" 错误。

**解决方案**：

- 检查 node_modules 目录中是否存在 gi-components 文件夹
- 确认 package.json 中是否正确记录了依赖
- 尝试重新安装依赖

```bash
# 删除 node_modules 和锁文件
rm -rf node_modules package-lock.json

# 重新安装
npm install
```

## 样式问题

### 1. 样式未生效或显示异常

**问题描述**：组件可以正常使用，但样式没有正确加载或显示异常。

**解决方案**：

- 确保正确引入了 Element Plus 和 Gi Components 的样式文件

```js
// 引入 Element Plus 样式
import 'element-plus/dist/index.css'

// 引入 Gi Components 样式
import '@gi-components/el/dist/el.css'
```

- 检查样式引入顺序，确保先引入 Element Plus 样式，再引入 Gi Components 样式
- 如果使用了 Vite 等构建工具，检查相关配置是否正确

### 2. 样式冲突

**问题描述**：组件样式与项目中其他样式发生冲突。

**解决方案**：

- 使用 CSS Modules 或 Scoped CSS 隔离样式
- 调整样式引入顺序
- 使用更具体的选择器覆盖冲突样式
- 考虑使用 CSS-in-JS 方案

## 组件使用问题

### 1. 组件不显示或显示错误

**问题描述**：引入组件后，组件不显示或显示异常。

**解决方案**：

- 检查组件名称是否正确，注意大小写和前缀
- 确认组件是否正确注册
- 检查组件的必需属性是否提供
- 查看浏览器控制台是否有相关错误信息

### 2. 组件事件不触发

**问题描述**：组件的事件回调函数没有被触发。

**解决方案**：

- 检查事件名称是否正确，注意事件命名规则（通常为 kebab-case）
- 确认事件处理器是否正确绑定
- 检查组件是否处于禁用或不可交互状态

### 3. 组件属性不生效

**问题描述**：设置了组件的属性，但没有生效。

**解决方案**：

- 检查属性名称是否正确
- 确认属性类型是否匹配（如布尔值、字符串等）
- 对于响应式属性，确保使用了 `ref` 或 `reactive` 进行包装
- 查看组件文档，确认属性的正确用法

## TypeScript 问题

### 1. 类型声明错误

**问题描述**：使用 TypeScript 时出现类型声明相关的错误。

**解决方案**：

- 确保安装了正确版本的 TypeScript
- 检查 tsconfig.json 配置是否正确
- 在 tsconfig.json 中添加类型声明文件路径

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

希望本文档能帮助您解决在使用 Gi Components 过程中遇到的问题。如果您有任何建议或改进意见，欢迎提出！
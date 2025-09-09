# GI Components Monorepo

这是一个基于 pnpm workspace + Turbo 的 monorepo 项目，包含组件库和文档站点。

## 技术栈

- **包管理**: pnpm workspace
- **构建工具**: Turbo (增量构建、并行执行、智能缓存)
- **组件库**: Vue3 + elment Plus + Vite
- **文档**: VitePress

## 项目结构

```
gi-components/
├── apps/                    # 应用目录
│   └── el/                # elment Plus 组件库
├── packages/               # 包目录
│   └── docs/              # 文档站点
├── scripts/               # 构建脚本
├── pnpm-workspace.yaml    # pnpm workspace 配置
├── turbo.json             # Turbo 配置
└── package.json           # 根 package.json
```

## 包说明

### @gi-components/el

基于 elment Plus 二次封装的 Vue3 组件库

### @gi-components/docs

基于 VitePress 的文档站点

## Turbo 优势

1. **增量构建**: 只构建发生变化的包，大幅提升构建速度
2. **并行执行**: 自动并行化任务，充分利用多核 CPU
3. **智能缓存**: 本地和远程缓存，避免重复构建
4. **任务编排**: 智能依赖管理，确保正确的构建顺序
5. **远程缓存**: 支持团队共享缓存，CI/CD 加速

## 开发命令

### 安装依赖

```bash
pnpm install
```

### 开发模式

```bash
# 启动组件库开发服务器
pnpm dev

# 启动文档开发服务器
pnpm docs:dev
```

### 构建

```bash
# 使用 Turbo 构建所有包 (推荐)
pnpm build

# 只构建组件库
pnpm build:lib

# 构建文档
pnpm docs:build

# 清理并构建
pnpm build:clean

# 预览文档
pnpm docs:preview
```

### 其他命令

```bash
# 清理构建产物
pnpm clean

# 代码检查
pnpm lint

# 类型检查
pnpm type-check
```

## Turbo 命令详解

### 基本用法

```bash
# 运行所有包的 build 任务
turbo run build

# 运行特定包的 dev 任务
turbo run dev --filter=@gi-components/el

# 运行多个包的特定任务
turbo run build --filter=@gi-components/el --filter=@gi-components/docs
```

### 过滤选项

```bash
# 运行依赖包的任务
turbo run build --filter=...@gi-components/docs

# 运行特定包及其依赖
turbo run build --filter=@gi-components/docs...

# 运行特定包及其依赖和依赖者
turbo run build --filter=...@gi-components/el...
```

### 缓存管理

```bash
# 清理缓存
turbo run build --force

# 查看缓存状态
turbo run build --dry-run
```

## 包管理

### 添加依赖

```bash
# 为特定包添加依赖
pnpm --filter @gi-components/el add vue
pnpm --filter @gi-components/docs add vitepress

# 为根目录添加开发依赖
pnpm add -D typescript -w
```

### 运行特定包的脚本

```bash
# 使用 Turbo 运行特定包的任务
turbo run build --filter=@gi-components/el
turbo run dev --filter=@gi-components/docs
```

## 工作流

1. 在 `apps/el` 中开发组件
2. 在 `packages/docs` 中编写文档和示例
3. 使用 `pnpm build` 构建所有包 (Turbo 会自动处理依赖关系)
4. 使用 `pnpm docs:preview` 预览文档

## 性能优化

### Turbo 缓存

- 本地缓存: `node_modules/.cache/turbo`
- 远程缓存: 可配置 Vercel Remote Cache 或其他服务
- 缓存键: 基于文件内容哈希和任务配置

### 构建优化

- 增量构建: 只构建变化的包
- 并行执行: 自动并行化独立任务
- 依赖优化: 智能任务依赖管理

## 代码质量工具

### ESLint + Prettier

- 使用 `@antfu/eslint-config` 作为基础配置
- 支持 Vue、TypeScript、JavaScript 文件
- 自动格式化代码

### Husky + lint-staged

- 提交前自动运行代码检查和格式化
- 提交信息规范检查

### Commitizen

- 标准化的提交信息格式
- 使用 `cz-git` 提供交互式提交

## 注意事项

- 所有包都使用 workspace 协议进行内部依赖引用
- Turbo 会自动处理包之间的依赖关系和构建顺序
- 每个包都有独立的配置文件（vite.config.ts, tsconfig.json）
- 构建产物会缓存在 `node_modules/.cache/turbo` 目录
- 使用 `moduleResolution: "bundler"` 以支持现代模块解析

## 迁移完成

✅ 已成功将项目从单一包结构迁移到基于 pnpm workspace + Turbo 的 monorepo 架构

### 主要改进：

1. **构建性能**: Turbo 提供增量构建和并行执行
2. **代码质量**: 集成 ESLint、Prettier、Husky 等工具
3. **开发体验**: 统一的脚本命令和配置管理
4. **可扩展性**: 易于添加新的包和应用

# 代码质量工具配置

本项目使用多种代码质量工具来确保代码的一致性和质量。

## 工具概览

### 1. oxlint (主要 linter)

- **速度**: 比 ESLint 快 10-100 倍
- **配置**: 基于 antfu 风格的规则
- **用途**: 主要的代码检查工具

### 2. ESLint (备用 linter)

- **配置**: 使用 `@antfu/eslint-config`
- **用途**: 作为 oxlint 的备用，支持更复杂的规则

### 3. Prettier (代码格式化)

- **配置**: 统一的代码格式化规则
- **用途**: 自动格式化代码

### 4. Husky + lint-staged (Git 钩子)

- **用途**: 提交前自动运行代码检查和格式化

## 配置说明

### oxlint 配置

oxlint 自动使用 `eslint.config.js` 配置文件，无需额外的 `.oxlintrc.json` 文件。

**主要特性**:

- 自动检测并使用现有的 ESLint 配置
- 比 ESLint 快 10-100 倍
- 支持 antfu 风格的规则
- 使用现代 JavaScript 特性

### ESLint 配置 (`eslint.config.js`)

- 基于 `@antfu/eslint-config`
- 针对不同目录有不同的规则
- 组件库: 严格的类型检查
- 文档: 宽松的规则
- 配置文件: 允许 console 和 any 类型

### Prettier 配置 (`.prettierrc`)

```json
{
  "semi": false,
  "singleQuote": true,
  "tabWidth": 2,
  "trailingComma": "none",
  "printWidth": 100,
  "endOfLine": "lf"
}
```

## 使用命令

### 代码检查

```bash
# 使用 oxlint (推荐)
pnpm lint

# 使用 ESLint
pnpm lint:eslint

# 自动修复
pnpm lint:fix
```

### 代码格式化

```bash
# 格式化所有文件
pnpm format
```

### 类型检查

```bash
# 检查所有包的类型
pnpm check-types
```

## 工作流

1. **开发时**: 使用 oxlint 进行快速检查
2. **提交前**: Husky 自动运行 lint-staged
3. **CI/CD**: 运行完整的代码质量检查

## 规则优先级

1. **oxlint**: 主要 linter，速度快
2. **ESLint**: 备用 linter，支持复杂规则
3. **Prettier**: 代码格式化
4. **TypeScript**: 类型检查

## 忽略文件

oxlint 会自动使用 `eslint.config.js` 中的 `ignores` 配置，包括：

- `**/dist/**` - 构建产物
- `**/node_modules/**` - 依赖包
- `**/*.d.ts` - 类型声明文件
- `**/.turbo/**` - Turbo 缓存
- `**/.vitepress/dist/**` - VitePress 构建产物

## 自定义规则

### 组件库规则

- 警告使用 `any` 类型
- 警告使用 `console`
- 允许修改 props（组件库常见模式）

### 文档规则

- 允许使用 `any` 类型
- 允许使用 `console`
- 允许未使用的变量

### 配置文件规则

- 允许使用 `any` 类型
- 允许使用 `console`
- 允许使用 `process.env`

## 性能优化

- oxlint 比 ESLint 快 10-100 倍
- 只检查源代码文件，忽略构建产物
- 使用并行处理提高检查速度
- 智能缓存减少重复检查

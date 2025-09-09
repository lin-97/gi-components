#!/usr/bin/env node

import { execSync } from 'node:child_process';
import { existsSync, rmSync } from 'node:fs';
import { join } from 'node:path';

const packages = [
  { name: '@gi-components/el', path: 'apps/el' },
  { name: '@gi-components/docs', path: 'packages/docs' }
];

function clean() {
  console.log('🧹 清理构建产物...');
  packages.forEach(pkg => {
    const distPath = join(pkg.path, 'dist');
    const vitepressDistPath = join(pkg.path, '.vitepress/dist');

    if (existsSync(distPath)) {
      rmSync(distPath, { recursive: true, force: true });
      console.log(`✅ 清理 ${pkg.name} 构建产物`);
    }

    if (existsSync(vitepressDistPath)) {
      rmSync(vitepressDistPath, { recursive: true, force: true });
      console.log(`✅ 清理 ${pkg.name} VitePress 构建产物`);
    }
  });
}

function build() {
  console.log('🏗️  使用 Turbo 构建所有包...');

  try {
    // 使用 Turbo 构建所有包，Turbo 会自动处理依赖关系
    // 由于 turbo.json 中配置了 "dependsOn": ["^build"]，会先构建依赖的包
    execSync('turbo run build', { stdio: 'inherit' });
    console.log('✅ Turbo 构建完成!');
  } catch (error) {
    console.error('❌ 构建失败:', error.message);
    process.exit(1);
  }
}

function buildLib() {
  console.log('📦 使用 Turbo 构建组件库...');

  try {
    execSync('turbo run build:lib', { stdio: 'inherit' });
    console.log('✅ 组件库构建完成!');
  } catch (error) {
    console.error('❌ 组件库构建失败:', error.message);
    process.exit(1);
  }
}

function buildDocs() {
  console.log('📚 使用 Turbo 构建文档...');

  try {
    execSync('turbo run docs:build', { stdio: 'inherit' });
    console.log('✅ 文档构建完成!');
  } catch (error) {
    console.error('❌ 文档构建失败:', error.message);
    process.exit(1);
  }
}

function buildSequential() {
  console.log('🏗️  按顺序构建所有包 (确保依赖关系)...');

  try {
    // 先构建组件库
    console.log('📦 第一步：构建组件库...');
    execSync('turbo run build --filter=@gi-components/el', {
      stdio: 'inherit'
    });
    console.log('✅ 组件库构建完成!');

    // 再构建文档
    console.log('📚 第二步：构建文档...');
    execSync('turbo run build --filter=@gi-components/docs', {
      stdio: 'inherit'
    });
    console.log('✅ 文档构建完成!');

    console.log('🎉 所有包构建完成!');
  } catch (error) {
    console.error('❌ 构建失败:', error.message);
    process.exit(1);
  }
}

function main() {
  const args = process.argv.slice(2);

  if (args.includes('--help')) {
    console.log(`
用法: node scripts/turbo-build.js [选项]

选项:
  --clean          清理构建产物
  --build          构建所有包 (使用 Turbo 自动处理依赖关系)
  --build:sequential 按顺序构建所有包 (确保依赖关系)
  --build:lib      只构建组件库
  --build:docs     只构建文档
  --help           显示帮助信息

示例:
  node scripts/turbo-build.js --clean --build
  node scripts/turbo-build.js --build:sequential
  node scripts/turbo-build.js --build:lib
  node scripts/turbo-build.js --build:docs
    `);
    return;
  }

  if (args.includes('--clean')) {
    clean();
  }

  if (args.includes('--build:lib')) {
    buildLib();
  } else if (args.includes('--build:docs')) {
    buildDocs();
  } else if (args.includes('--build:sequential')) {
    buildSequential();
  } else if (args.includes('--build') || args.length === 0) {
    build();
  }
}

main();

#!/usr/bin/env node

import { execSync } from 'child_process';
import { existsSync, rmSync } from 'fs';
import { join } from 'path';

const packages = [
  { name: '@gi-components/ele', path: 'apps/ele' },
  { name: '@gi-components/docs', path: 'packages/docs' }
];

function clean() {
  console.log('🧹 清理构建产物...');
  packages.forEach(pkg => {
    const distPath = join(pkg.path, 'dist');
    if (existsSync(distPath)) {
      rmSync(distPath, { recursive: true, force: true });
      console.log(`✅ 清理 ${pkg.name} 构建产物`);
    }
  });
}

function build() {
  console.log('🏗️  开始构建所有包...');

  // 构建组件库
  console.log('📦 构建 @gi-components/ele...');
  execSync('pnpm --filter @gi-components/ele build:lib', { stdio: 'inherit' });

  // 构建文档
  console.log('📚 构建 @gi-components/docs...');
  execSync('pnpm --filter @gi-components/docs build', { stdio: 'inherit' });

  console.log('✅ 所有包构建完成!');
}

function main() {
  const args = process.argv.slice(2);

  if (args.includes('--clean')) {
    clean();
  }

  if (args.includes('--build') || args.length === 0) {
    build();
  }

  if (args.includes('--help')) {
    console.log(`
用法: node scripts/build.js [选项]

选项:
  --clean    清理构建产物
  --build    构建所有包 (默认)
  --help     显示帮助信息

示例:
  node scripts/build.js --clean --build
  node scripts/build.js --clean
  node scripts/build.js
    `);
  }
}

main();

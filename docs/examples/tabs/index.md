# Tabs 标签页

<script setup>
import Demo1 from './demo1.vue'
import Demo2 from './demo2.vue'
import Demo3 from './demo3.vue'
</script>

## 基础用法

<Demo1></Demo1>

::: details 查看代码
<<< ./demo1.vue
:::

## 卡片类型

<Demo2></Demo2>

::: details 查看代码
<<< ./demo2.vue
:::

## 使用插槽

<Demo3></Demo3>

::: details 查看代码
<<< ./demo3.vue
:::

## API

### Props

| 参数  | 说明  | 类型   | 默认值 |
| :---- | :---- | :---- | :----  |
| options | 选项列表 | `OptionItem[]` |    -   |

### Slots

| 名称  | 说明  |
| :---- | :---- |
| default | 自定义内容 |
| label | 参数: \{ item \} |

::: tip
继承 `el-tabs` 的所有属性
:::

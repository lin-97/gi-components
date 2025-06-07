# Card 卡片

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

## 内置类名
内置类名提供了卡片标题伪元素样式

<Demo2></Demo2>

::: details 查看代码
<<< ./demo2.vue
:::

## 迷你卡片

<Demo3></Demo3>

::: details 查看代码
<<< ./demo3.vue
:::

## API

### Props

| 参数  | 说明  | 类型   | 默认值 |
| :---- | :---- | :---- | :----  |
| title | 标题  | `string` |    -   |
| extra | 卡片右上角的操作区域 | `string` |    -   |
| bordered | 是否有边框 | `boolean` |    false   |
| size | 尺寸  | `samll` \| `middle` | middle |
| headerStyle | 卡片头部区域的样式 | `CSSProperties` |    -   |
| bodyStyle | 卡片内容区域的样式 | `CSSProperties` |    -   |

### Slots

| 名称  | 说明  |
| :---- | :---- |
| default | 卡片内容 |
| extra | 卡片右上角的操作区域 |

# Card 卡片

<script setup>
import Demo1 from './demo1.vue'
</script>

## 基础用法

<Demo1></Demo1>

::: details 查看代码
<<< ./demo1.vue
:::

## API

### Props

| 参数  | 说明  | 类型   | 默认值 |
| :---- | :---- | :---- | :----  |
| title | 标题  | `string` |    -   |
| bordered | 是否有边框 | `boolean` |    false   |
| extra | 卡片右上角的操作区域 | `string` |    -   |
| headerStyle | 卡片头部区域的样式 | `CSSProperties` |    -   |
| bodyStyle | 卡片内容区域的样式 | `CSSProperties` |    -   |

### Slots

| 名称  | 说明  |
| :---- | :---- |
| default | 卡片内容 |
| extra | 卡片右上角的操作区域 |

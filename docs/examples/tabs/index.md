# Tabs 标签页

<script setup>
import Demo from './Demo.vue'
import DemoCard from './DemoCard.vue'
import DemoSlotExtra from './DemoSlotExtra.vue'
</script>

## 基础用法

<Demo></Demo>

::: details 查看代码
<<< ./Demo.vue
:::

## 卡片类型

<DemoCard></DemoCard>

::: details 查看代码
<<< ./DemoCard.vue
:::

## 使用插槽

<DemoSlotExtra></DemoSlotExtra>

::: details 查看代码
<<< ./DemoSlotExtra.vue
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

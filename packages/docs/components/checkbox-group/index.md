# CheckboxGroup 下拉组合

<script setup>
import Demo from './Demo.vue'
import DemoMultiple from './DemoMultiple.vue'
</script>

## 基础用法

<Demo></Demo>

::: details 查看代码
<<< ./Demo.vue
:::

## 多选

<DemoMultiple></DemoMultiple>

::: details 查看代码
<<< ./DemoMultiple.vue
:::

## API

### Props

| 参数    | 说明     | 类型           | 默认值 |
| :------ | :------- | :------------- | :----- |
| options | 选项列表 | `OptionItem[]` | -      |

::: tip
继承 `el-checkbox-group` 的所有属性

# Dialog 对话框

<script setup>
import Demo1 from './demo1.vue'
import Demo2 from './demo2.vue'
import Demo3 from './demo3.vue'
import Demo4 from './demo4.vue'
</script>

## 基础用法

<Demo1></Demo1>
::: details 查看代码
<<< ./demo1.vue
:::

## 异步关闭

<Demo2></Demo2>
::: details 查看代码
<<< ./demo2.vue
:::

## 隐藏底部

<Demo3></Demo3>
::: details 查看代码
<<< ./demo3.vue
:::

## 修改按钮

<Demo4></Demo4>
::: details 查看代码
<<< ./demo4.vue
:::

## API

### Props
| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| okText | 确认按钮文本 | string | 确定 |
| cancelText | 取消按钮文本 | string | 取消 |
| okButtonProps | 确认按钮的props | - | - |
| cancelButtonProps | 取消按钮的props | boolean | - |
| content | 内容 | string | - |
| footer | 显示尾部 | boolean | true |

### Events
| 事件名 | 说明 | 参数 |
| --- | --- | --- |
| ok | 点击确认按钮时触发 | - |
| cancel | 点击取消按钮时触发 | - |
| beforeOk | 触发 ok 事件前的回调函数 | - |

### Slots
| 名称 | 说明 |
| --- | --- |
| default | 自定义内容 |
| footer | 自定义底部 |

::: tip
继承 `el-dialog` 的所有属性
:::

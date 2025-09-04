import type { App } from 'vue'

import Button from './components/button'
import Card from './components/card'
import CheckboxGroup from './components/checkbox-group'
import Dialog from './components/dialog'
import EditTable from './components/edit-table'
import Form from './components/form'
import { Grid, GridItem } from './components/grid'
import InputGroup from './components/input-group'
import InputSearch from './components/input-search'
import PageLayout from './components/page-layout'
import RadioGroup from './components/radio-group'
import Select from './components/select'
import Table from './components/table'
import Tabs from './components/tabs'
import './styles/index.scss'

export * from './components/dialog'
export * from './components/form'

const components = {
  Button,
  Card,
  Select,
  RadioGroup,
  CheckboxGroup,
  Tabs,
  InputGroup,
  InputSearch,
  Grid,
  GridItem,
  Form,
  PageLayout,
  Dialog,
  EditTable,
  Table
}

function capitalizeWord(word: string) {
  // 检查输入是否为字符串且不为空
  if (typeof word !== 'string' || word.length === 0) {
    return word
  }
  // 首字母大写，其余字母小写
  return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
}

const obj = {
  install(app: App, options?: { prefix?: string }) {
    const prefix = options?.prefix || 'Gi'
    Object.entries(components).forEach(([name, component]) => {
      app.component(`${capitalizeWord(prefix)}${name}`, component)
    })
    // 将配置保存到全局属性
    app.config.globalProperties.$config = options
  }
}

export default obj

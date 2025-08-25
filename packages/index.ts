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

const obj = {
  install(app: App) {
    Object.entries(components).forEach(([name, component]) => {
      app.component(`Gi${name}`, component)
    })
  }
}

export default obj

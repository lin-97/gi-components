import type { App } from 'vue'

import GiButton from './components/button'
import GiCard from './components/card'
import GiCheckboxGroup from './components/checkbox-group'
import GiForm from './components/form'
import { Grid as GiGrid, GridItem as GiGridItem } from './components/grid'
import GiInputGroup from './components/input-group'
import GiPageLayout from './components/page-layout'
import GiRadioGroup from './components/radio-group'
import GiSelect from './components/select'
import GiTabs from './components/tabs'

const components = {
  GiButton,
  GiCard,
  GiSelect,
  GiRadioGroup,
  GiCheckboxGroup,
  GiTabs,
  GiInputGroup,
  GiGrid,
  GiGridItem,
  GiForm,
  GiPageLayout
}

const obj = {
  install(app: App) {
    Object.entries(components).forEach(([name, component]) => {
      app.component(name, component)
    })
  }
}

export default obj

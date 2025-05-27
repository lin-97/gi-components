import type { App } from 'vue'

import GiButton from './components/gi-button'
import GiCard from './components/gi-card'

const components = {
  GiButton,
  GiCard
}

const obj = {
  install(app: App) {
    Object.entries(components).forEach(([name, component]) => {
      app.component(name, component)
    })
  }
}

export default obj

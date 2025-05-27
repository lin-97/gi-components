import type { Component, App } from "vue"

import GiButton from './components/button'

const components = {
  GiButton
}

const obj = {
  install(app: App) {
    Object.entries(components).forEach(([name, component]) => {
      app.component(name, component)
    });
  }
}

export default obj
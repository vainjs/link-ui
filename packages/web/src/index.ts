import './style/index.less'
import type { App, Plugin } from 'vue'

const components: Array<{ name?: string }> = []

const LinkUI: Plugin = {
  install(app: App) {
    components.forEach((component) => {
      if (component.name) {
        app.component(component.name, component as never)
      }
    })
  }
}

export default LinkUI

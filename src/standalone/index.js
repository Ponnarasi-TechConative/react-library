import StandaloneLayout from "./layout"
import ConfigsPlugin from "corePlugins/configs"

// the Standalone preset

export default [
  ConfigsPlugin,
  () => {
    return {
      components: { StandaloneLayout }
    }
  },
]

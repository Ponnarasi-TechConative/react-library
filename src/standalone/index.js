import StandaloneLayout from "./layout"
import ConfigsPlugin from "corePlugins/configs"
import SafeRenderPlugin from "core/plugins/safe-render"

// the Standalone preset

export default [
  ConfigsPlugin,
  () => {
    return {
      components: { StandaloneLayout }
    }
  },
  SafeRenderPlugin({
    fullOverride: true,
    componentList: [
      "StandaloneLayout",
    ]
  })
]

/**
 * @prettier
 */
import layout from "core/plugins/layout"
import view from "core/plugins/view"
import logs from "core/plugins/logs"
import configsPlugin from "core/plugins/configs"
import App from "core/components/app"
import BaseLayout from "core/components/layouts/base"
import * as LayoutUtils from "core/components/layout-utils"
import Increment from "core/components/increment"
export default function () {
  let coreComponents = {
    components: {
      App,
      increment: Increment,
      BaseLayout,
      },
  }

  let formComponents = {
    components: LayoutUtils,
  }

  return [
    configsPlugin,
    logs,
    view,
    layout,
    coreComponents,
    formComponents,
  ]
}

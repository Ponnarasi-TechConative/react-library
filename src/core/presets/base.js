/**
 * @prettier
 */
import err from "core/plugins/err"
import layout from "core/plugins/layout"
import spec from "core/plugins/spec"
import view from "core/plugins/view"
import samples from "core/plugins/samples"
import requestSnippets from "core/plugins/request-snippets"
import logs from "core/plugins/logs"
import swaggerJs from "core/plugins/swagger-js"
import auth from "core/plugins/auth"
import util from "core/plugins/util"
import downloadUrlPlugin from "core/plugins/download-url"
import configsPlugin from "core/plugins/configs"
import deepLinkingPlugin from "core/plugins/deep-linking"
import filter from "core/plugins/filter"
import onComplete from "core/plugins/on-complete"
import safeRender from "core/plugins/safe-render"
import App from "core/components/app"
import BaseLayout from "core/components/layouts/base"
import * as LayoutUtils from "core/components/layout-utils"
import * as JsonSchemaComponents from "core/json-schema-components"
import Increment from "core/components/increment"
export default function () {
  let coreComponents = {
    components: {
      App,
      BaseLayout,
      increment: Increment,
      },
  }

  let formComponents = {
    components: LayoutUtils,
  }

  let jsonSchemaComponents = {
    components: JsonSchemaComponents,
  }

  return [
    configsPlugin,
    util,
    logs,
    view,
    spec,
    err,
    layout,
    samples,
    coreComponents,
    formComponents,
    swaggerJs,
    jsonSchemaComponents,
    auth,
    downloadUrlPlugin,
    deepLinkingPlugin,
    filter,
    onComplete,
    requestSnippets,
    safeRender(),
  ]
}

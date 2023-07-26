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
import AuthorizeBtn from "core/components/auth/authorize-btn"
import AuthorizeBtnContainer from "core/containers/authorize-btn"
import AuthorizeOperationBtn from "core/components/auth/authorize-operation-btn"
import Auths from "core/components/auth/auths"
import AuthItem from "core/components/auth/auth-item"
import AuthError from "core/components/auth/error"
import ApiKeyAuth from "core/components/auth/api-key-auth"
import Oauth2 from "core/components/auth/oauth2"
import Clear from "core/components/clear"
import Headers from "core/components/headers"
import Errors from "core/components/errors"
import BaseLayout from "core/components/layouts/base"
import * as LayoutUtils from "core/components/layout-utils"
import * as JsonSchemaComponents from "core/json-schema-components"

export default function () {
  let coreComponents = {
    components: {
      App,
      authorizeBtn: AuthorizeBtn,
      AuthorizeBtnContainer,
      authorizeOperationBtn: AuthorizeOperationBtn,
      auths: Auths,
      AuthItem: AuthItem,
      authError: AuthError,
      oauth2: Oauth2,
      apiKeyAuth: ApiKeyAuth,
      clear: Clear,
      headers: Headers,
      errors: Errors,
      BaseLayout,
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

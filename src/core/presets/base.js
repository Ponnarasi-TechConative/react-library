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
import BasicAuth from "core/components/auth/basic-auth"
import Oauth2 from "core/components/auth/oauth2"
import Clear from "core/components/clear"
import LiveResponse from "core/components/live-response"
import OnlineValidatorBadge from "core/components/online-validator-badge"
import Operation from "core/components/operation"
import OperationSummary from "core/components/operation-summary"
import OperationSummaryMethod from "core/components/operation-summary-method"
import OperationSummaryPath from "core/components/operation-summary-path"
import OperationExt from "core/components/operation-extensions"
import OperationExtRow from "core/components/operation-extension-row"
import HighlightCode from "core/components/highlight-code"
import Responses from "core/components/responses"
import Response from "core/components/response"
import ResponseExtension from "core/components/response-extension"
import ResponseBody from "core/components/response-body"
import { Parameters } from "core/components/parameters"
import ParameterExt from "core/components/parameter-extension"
import ParameterRow from "core/components/parameter-row"
import Execute from "core/components/execute"
import Headers from "core/components/headers"
import Errors from "core/components/errors"
import ContentType from "core/components/content-type"
import InitializedInput from "core/components/initialized-input"
import Info, { InfoUrl, InfoBasePath } from "core/components/info"
import Contact from "core/components/contact"
import License from "core/components/license"
import JumpToPath from "core/components/jump-to-path"
import CopyToClipboardBtn from "core/components/copy-to-clipboard-btn"
import Footer from "core/components/footer"
import ParamBody from "core/components/param-body"
import Curl from "core/components/curl"
import Schemes from "core/components/schemes"
import ModelCollapse from "core/components/model-collapse"
import ModelExample from "core/components/model-example"
import Model from "core/components/model"
import Models from "core/components/models"
import EnumModel from "core/components/enum-model"
import ObjectModel from "core/components/object-model"
import ArrayModel from "core/components/array-model"
import PrimitiveModel from "core/components/primitive-model"
import Property from "core/components/property"
import TryItOutButton from "core/components/try-it-out-button"
import VersionStamp from "core/components/version-stamp"
import Markdown from "core/components/providers/markdown"
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
      basicAuth: BasicAuth,
      clear: Clear,
      liveResponse: LiveResponse,
      InitializedInput,
      info: Info,
      InfoUrl,
      InfoBasePath,
      Contact,
      License,
      JumpToPath,
      CopyToClipboardBtn,
      onlineValidatorBadge: OnlineValidatorBadge,
      operation: Operation,
      OperationSummary,
      OperationSummaryMethod,
      OperationSummaryPath,
      highlightCode: HighlightCode,
      responses: Responses,
      response: Response,
      ResponseExtension: ResponseExtension,
      responseBody: ResponseBody,
      parameters: Parameters,
      parameterRow: ParameterRow,
      execute: Execute,
      headers: Headers,
      errors: Errors,
      contentType: ContentType,
      footer: Footer,
      ParamBody: ParamBody,
      curl: Curl,
      schemes: Schemes,
      modelExample: ModelExample,
      ModelCollapse,
      Model,
      Models,
      EnumModel,
      ObjectModel,
      ArrayModel,
      PrimitiveModel,
      Property,
      TryItOutButton,
      Markdown,
      BaseLayout,
      VersionStamp,
      OperationExt,
      OperationExtRow,
      ParameterExt,
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

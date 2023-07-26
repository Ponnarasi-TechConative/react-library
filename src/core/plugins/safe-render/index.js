import zipObject from "lodash/zipObject"

import ErrorBoundary from "./components/error-boundary"
import Fallback from "./components/fallback"
import { componentDidCatch, withErrorBoundary } from "./fn"

const safeRenderPlugin = ({componentList = [], fullOverride = false} = {}) => ({ getSystem }) => {
  const defaultComponentList = [
    "App",
    "BaseLayout",
    "AuthorizeBtnContainer",
    "Operations",
    "parameters",
    "responses",
    "OperationServers",
    "Models",
  ]
  const mergedComponentList = fullOverride ? componentList : [...defaultComponentList, ...componentList]
  const wrapFactory = (Original, { fn }) => fn.withErrorBoundary(Original)
  const wrapComponents = zipObject(mergedComponentList, Array(mergedComponentList.length).fill(wrapFactory))

  return {
    fn: {
      componentDidCatch,
      withErrorBoundary: withErrorBoundary(getSystem),
    },
    components: {
      ErrorBoundary,
      Fallback,
    },
    wrapComponents,
  }
}

export default safeRenderPlugin

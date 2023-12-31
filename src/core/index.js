import deepExtend from "deep-extend"

import System from "./system"
import ApisPreset from "./presets/apis"
import AllPlugins from "./plugins/all"

export default function RESTIMPORTUI(opts) {

  const defaults = {
    // Some general settings, that we floated to the top
    dom_id: null, // eslint-disable-line camelcase
    domNode: null,
    spec: {},
    value:{},
    layout: "BaseLayout",
    validatorUrl: "",
    configs: {},
    custom: {},
    displayRequestDuration: false,
    deepLinking: false,
    tryItOutEnabled: false,
    requestInterceptor: (a => a),
    responseInterceptor: (a => a),
    showMutatedRequest: true,
    defaultModelRendering: "example",
    defaultModelExpandDepth: 1,
    defaultModelsExpandDepth: 1,
    showExtensions: false,
    showCommonExtensions: false,
    withCredentials: undefined,
    supportedSubmitMethods: [
      "get",
      "put",
      "post",
      "delete",
      "options",
      "head",
      "patch",
      "trace"
    ],
    queryConfigEnabled: false,

    // Initial set of plugins ( TODO rename this, or refactor - we don't need presets _and_ plugins. Its just there for performance.
    // Instead, we can compile the first plugin ( it can be a collection of plugins ), then batch the rest.
    presets: [
      ApisPreset
    ],

    // Plugins; ( loaded after presets )
    plugins: [
    ],

    pluginsOptions: {
      // Behavior during plugin registration. Can be :
      // - legacy (default) : the current behavior for backward compatibility – last plugin takes precedence over the others
      // - chain : chain wrapComponents when targeting the same core component
      pluginLoadType: "legacy"
    },

    // Initial state
    initialState: { },

    // Inline Plugin
    fn: { },
    components: { },
    syntaxHighlight: {
      activated: true,
      theme: "agate"
    }
  }

  let queryConfig = opts.queryConfigEnabled ? {} : {}

  const domNode = opts.domNode
  delete opts.domNode

  const constructorConfig = deepExtend({}, defaults, opts, queryConfig)
  const storeConfigs = {
    system: {
      configs: constructorConfig.configs
    },
    plugins: constructorConfig.presets,
    pluginsOptions: constructorConfig.pluginsOptions,
    ObjValue : constructorConfig.value,
    state: deepExtend({
      layout: {
        layout: constructorConfig.layout,
        filter: constructorConfig.filter
      },
      spec: {
        spec: "",
        url: constructorConfig.url
      },
    }, constructorConfig.initialState)
  }
  if(constructorConfig.initialState) {
    // if the user sets a key as `undefined`, that signals to us that we
    // should delete the key entirely.
    // known usage: Swagger-Editor validate plugin tests
    for (var key in constructorConfig.initialState) {
      if(
        Object.prototype.hasOwnProperty.call(constructorConfig.initialState, key)
        && constructorConfig.initialState[key] === undefined
      ) {
        delete storeConfigs.state[key]
      }
    }
  }

 

  var store = new System(storeConfigs)

  var system = store.getSystem()
  const downloadSpec = (fetchedConfig) => {
    let localConfig = system.specSelectors.getLocalConfig ? system.specSelectors.getLocalConfig() : {}
    let mergedConfig = deepExtend({}, localConfig, constructorConfig, fetchedConfig || {}, queryConfig)
    console.log(mergedConfig.url)
    console.log(mergedConfig.value)
    // deep extend mangles domNode, we need to set it manually
    if(domNode) {
      mergedConfig.domNode = domNode
    }

    store.setConfigs(mergedConfig)

    system.configsActions.loaded()

    if (fetchedConfig !== null) {
      if (!queryConfig.url && typeof mergedConfig.spec === "object" && Object.keys(mergedConfig.spec).length) {
        system.specActions.updateUrl("")
        system.specActions.updateLoadingStatus("success")
        system.specActions.updateSpec(JSON.stringify(mergedConfig.spec))
      } else if (system.specActions.download && mergedConfig.url && !mergedConfig.urls) {
        system.specActions.updateUrl(mergedConfig.url)
        system.specActions.download(mergedConfig.url)
      }
    }

    if(mergedConfig.domNode) {
      system.render(mergedConfig.domNode, "App")
    } else if(mergedConfig.dom_id) {
      let domNode = document.querySelector(mergedConfig.dom_id)
      system.render(domNode, "App")
    } else if(mergedConfig.dom_id === null || mergedConfig.domNode === null) {
      // do nothing
      // this is useful for testing that does not need to do any rendering
    } else {
      console.error("Skipped rendering: no `dom_id` or `domNode` was specified")
    }
   
    return system
  }

  const configUrl = queryConfig.config || constructorConfig.configUrl

  if (configUrl && system.specActions && system.specActions.getConfigByUrl) {
    system.specActions.getConfigByUrl({
      url: configUrl,
      loadRemoteConfig: true,
    }, downloadSpec)
  } else {
    return downloadSpec()
  }

  return system
}

// Add presets
RESTIMPORTUI.presets = {
  apis: ApisPreset,
}

// All Plugins
RESTIMPORTUI.plugins = AllPlugins

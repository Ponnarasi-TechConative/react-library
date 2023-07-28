/* eslint-disable no-undef */
window.onload = function() {
  window["RestImportBundle"] = window["swagger-ui-bundle"]
  window["SwaggerUIStandalonePreset"] = window["swagger-ui-standalone-preset"]
  // Build a system
  const ui = RestImportBundle({
    url: "https://petstore.swagger.io/v2/swagger.json",
    dom_id: "#rest-import-ui",
    presets: [
      RestImportBundle.presets.apis,
      SwaggerUIStandalonePreset
    ],
    plugins: [
      RestImportBundle.plugins.DownloadUrl
    ],
    // requestSnippetsEnabled: true,
    layout: "StandaloneLayout"
  })

  window.ui = ui

  ui.initOAuth({
    clientId: "your-client-id",
    clientSecret: "your-client-secret-if-required",
    realm: "your-realms",
    appName: "your-app-name",
    scopeSeparator: " ",
    scopes: "openid profile email phone address",
    additionalQueryStringParams: {},
    useBasicAuthenticationWithAccessCodeGrant: false,
    usePkceWithAuthorizationCodeGrant: false
  })
}

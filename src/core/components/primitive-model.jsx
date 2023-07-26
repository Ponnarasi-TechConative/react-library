import React, { Component } from "react"
import PropTypes from "prop-types"
import { getExtensions, sanitizeUrl } from "core/utils"

const propClass = "property primitive"

export default class Primitive extends Component {
  static propTypes = {
    schema: PropTypes.object.isRequired,
    getComponent: PropTypes.func.isRequired,
    getConfigs: PropTypes.func.isRequired,
    name: PropTypes.string,
    displayName: PropTypes.string,
    depth: PropTypes.number,
    expandDepth: PropTypes.number
  }

  render() {
    let { schema, getComponent, getConfigs, name, displayName, depth, expandDepth } = this.props

    const { showExtensions } = getConfigs()

    if (!schema || !schema.get) {
      // don't render if schema isn't correctly formed
      return <div></div>
    }

    let type = schema.get("type")
    let format = schema.get("format")
    let xml = schema.get("xml")
    let enumArray = schema.get("enum")
    let title = schema.get("title") || displayName || name
    let description = schema.get("description")
    let extensions = getExtensions(schema)
    let properties = schema
      .filter((_, key) => ["enum", "type", "format", "description", "$$ref", "externalDocs"].indexOf(key) === -1)
      .filterNot((_, key) => extensions.has(key))
    let externalDocsUrl = schema.getIn(["externalDocs", "url"])
    let externalDocsDescription = schema.getIn(["externalDocs", "description"])

    const Link = getComponent("Link")

    const titleEl = title &&
      <span className="model-title">
        <span className="model-title__text">{title}</span>
      </span>

    return <span className="model">
  
    </span>
  }
}

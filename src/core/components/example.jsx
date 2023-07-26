/**
 * @prettier
 */

import React from "react"
import PropTypes from "prop-types"
import ImPropTypes from "react-immutable-proptypes"
import { stringify } from "core/utils"

export default function Example(props) {
  const { example, showValue, getComponent, getConfigs } = props


  if(!example) return null

  return (
    <div className="example">
      {example.get("description") ? (
        <section className="example__section">
          <div className="example__section-header">Example Description</div>
        
        </section>
      ) : null}
      {showValue && example.has("value") ? (
        <section className="example__section">
          <div className="example__section-header">Example Value</div>
        </section>
      ) : null}
    </div>
  )
}

Example.propTypes = {
  example: ImPropTypes.map.isRequired,
  showValue: PropTypes.bool,
  getComponent: PropTypes.func.isRequired,
  getConfigs: PropTypes.func.getConfigs,
}

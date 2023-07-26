/**
 * @prettier
 */
import React from "react"
import PropTypes from "prop-types"
import ImPropTypes from "react-immutable-proptypes"

const Callbacks = ({ callbacks, specPath, specSelectors, getComponent }) => {
  const operationDTOs = specSelectors.callbacksOperations({
    callbacks,
    specPath,
  })
  const callbackNames = Object.keys(operationDTOs)


  if (callbackNames.length === 0) return <span>No callbacks</span>

  return (
    <div>
      {callbackNames.map((callbackName) => (
        <div key={`${callbackName}`}>
          <h2>{callbackName}</h2>

        
        </div>
      ))}
    </div>
  )
}

Callbacks.propTypes = {
  getComponent: PropTypes.func.isRequired,
  specSelectors: PropTypes.shape({
    callbacksOperations: PropTypes.func.isRequired,
  }).isRequired,
  callbacks: ImPropTypes.iterable.isRequired,
  specPath: ImPropTypes.list.isRequired,
}

export default Callbacks

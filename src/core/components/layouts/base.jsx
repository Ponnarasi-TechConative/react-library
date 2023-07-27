/**
 * @prettier
 */
import React from "react"
import PropTypes from "prop-types"

export default class BaseLayout extends React.Component {
  static propTypes = {
    errSelectors: PropTypes.object.isRequired,
    errActions: PropTypes.object.isRequired,
    specSelectors: PropTypes.object.isRequired,
    oas3Selectors: PropTypes.object.isRequired,
    oas3Actions: PropTypes.object.isRequired,
    getComponent: PropTypes.func.isRequired,
  }

  render() {
    const { errSelectors, specSelectors, getComponent } = this.props
    const Row = getComponent("Row")
    const Col = getComponent("Col")
    const Increment = getComponent("increment", true)


    const loadingStatus = specSelectors.loadingStatus()

    let loadingMessage = null

    if (loadingStatus === "loading") {
      loadingMessage = (
        <div className="info">
          <div className="loading-container">
            <div className="loading"></div>
          </div>
        </div>
      )
    }

    if (loadingStatus === "failed") {
      loadingMessage = (
        <div className="info">
          <div className="loading-container">
            <h4 className="title">Failed to load API definition.</h4>
          </div>
        </div>
      )
    }

    if (loadingStatus === "failedConfig") {
      const lastErr = errSelectors.lastError()
      const lastErrMsg = lastErr ? lastErr.get("message") : ""
      loadingMessage = (
        <div className="info failed-config">
          <div className="loading-container">
            <h4 className="title">Failed to load remote configuration.</h4>
            <p>{lastErrMsg}</p>
          </div>
        </div>
      )
    }

    // if (!loadingMessage && isSpecEmpty) {
    //   loadingMessage = <h4>No API definition provided.</h4>
    // }

    if (loadingMessage) {
      return (
        <div className="swagger-ui">
          <div className="loading-container">{loadingMessage}</div>
        </div>
      )
    }

    const schemes = specSelectors.schemes()

    const hasSchemes = schemes && schemes.size
    const hasSecurityDefinitions = !!specSelectors.securityDefinitions()
    const handleClick = () => {
      alert('Button Clicked')
    }
    return (
      <div className="swagger-ui">

        <Row className="information-container">
            <Col mobile={12}>
              <button className="btn btn-secondary" onClick={handleClick}>Click Me</button>
            </Col>
          </Row>
          <Increment />
      </div>
    )
  }
}

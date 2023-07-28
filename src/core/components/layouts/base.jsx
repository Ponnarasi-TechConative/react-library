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

  
    const handleClick = () => {
      alert('Button Clicked')
    }
    return (
      <div className="swrest-import-ui">

        <Row className="information-container">
            <Col mobile={12}>
              <button className="btn btn-primary" onClick={handleClick}>Click Me</button>
            </Col>
          </Row>
          <Increment />
          <div>1st Commit : 16:20</div>
          <div>2nd Commit : 16:29</div>
          <div>3rd Commit : 16:45</div>
          <div>4th Commit : 16:45</div>

      </div>
    )
  }
}

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
      <div className="rest-import-ui">

        <Row className="information-container">
            <Col mobile={12}>
              <button className="btn btn-primary" onClick={handleClick}>Click Me</button>
            </Col>
          </Row>
          <Increment />
          <div>1st Commit : 28-07 - 11:53</div>
          <div>2nd Commit : 28-07 - 1:04</div>
          <div>3rd Commit : 28-07 - 2:32</div>
          <div>4rd Commit : 28-07 - 2:46</div>
          <div>5th Commit : 28-07 - 2:53</div>
          <div>6th Commit : 28-07 - 2:58</div>

      </div>
    )
  }
}

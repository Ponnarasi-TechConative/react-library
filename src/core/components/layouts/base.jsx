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
      <div className="swagger-ui">

        <Row className="information-container">
            <Col mobile={12}>
              <button className="btn btn-primary" onClick={handleClick}>Click Me</button>
            </Col>
          </Row>
          <Increment />
          <div>1st Commit : 20:35</div>
          <div>2st Commit : 20:38</div>
          <div>3st Commit : 20:45</div>
          <div>4th Commit : 20:51</div>
          <div>5th Commit : 20:59</div>
          <div>6th Commit : 21:10</div>

      </div>
    )
  }
}

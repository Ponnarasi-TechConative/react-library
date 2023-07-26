import React from "react"
import PropTypes from "prop-types"

export default class XPane extends React.Component {

  render() {
    let { getComponent, specSelectors, specActions, layoutSelectors, layoutActions } = this.props
    let info = specSelectors.info()
    let url = specSelectors.url()
    let showEditor = layoutSelectors.isShown("editor")

    let Info = getComponent("info")
    let Editor = getComponent("editor", true)
    let Footer = getComponent("footer", true)
    let Header = getComponent("header", true)

    let Container = getComponent("Container")
    let Col = getComponent("Col")
    let Button = getComponent("Button")

    let showEditorAction = ()=> layoutActions.show("editor", !showEditor)

    return (
      <Container fullscreen>

        <Header/>

        {
          info && info.size ? <Info version={info.get("version")}
                                    description={info.get("description")}
                                    title={info.get("title")}
                                    url={url}/>
                            : null
        }
        <Button onClick={showEditorAction}>{showEditor ? "Hide" : "Show"} Editor</Button>
        <Button onClick={specActions.formatIntoYaml}>Format contents</Button>

       

        <Footer></Footer>

      </Container>
    )
  }

}

XPane.propTypes = {
  getComponent: PropTypes.func.isRequired,
  specSelectors: PropTypes.object.isRequired,
  specActions: PropTypes.object.isRequired,
  layoutSelectors: PropTypes.object.isRequired,
  layoutActions: PropTypes.object.isRequired
}



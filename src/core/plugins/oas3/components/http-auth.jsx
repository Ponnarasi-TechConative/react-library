import React from "react"
import PropTypes from "prop-types"

export default class HttpAuth extends React.Component {
  static propTypes = {
    authorized: PropTypes.object,
    getComponent: PropTypes.func.isRequired,
    errSelectors: PropTypes.object.isRequired,
    schema: PropTypes.object.isRequired,
    name: PropTypes.string.isRequired,
    onChange: PropTypes.func
  }

  constructor(props, context) {
    super(props, context)
    let { name, schema } = this.props
    let value = this.getValue()

    this.state = {
      name: name,
      schema: schema,
      value: value
    }
  }

  getValue () {
    let { name, authorized } = this.props

    return authorized && authorized.getIn([name, "value"])
  }

  onChange =(e) => {
    let { onChange } = this.props
    let { value, name } = e.target

    let newValue = Object.assign({}, this.state.value)

    if(name) {
      newValue[name] = value
    } else {
      newValue = value
    }

    this.setState({ value: newValue }, () => onChange(this.state))

  }

  render() {
    let { schema, getComponent, errSelectors, name } = this.props
    const Input = getComponent("Input")
    const Col = getComponent("Col")
    const AuthError = getComponent("authError")
    const JumpToPath = getComponent("JumpToPath", true)

    const scheme = (schema.get("scheme") || "").toLowerCase()
    let value = this.getValue()
    let errors = errSelectors.allErrors().filter( err => err.get("authId") === name)

    if(scheme === "basic") {
      let username = value ? value.get("username") : null
      return <div>
        <h4>
          <code>{ name || schema.get("name") }</code>&nbsp;
            (http, Basic)
            <JumpToPath path={[ "securityDefinitions", name ]} />
          </h4>
        { username && <h6>Authorized</h6> }
       
        {
          errors.valueSeq().map( (error, key) => {
            return <AuthError error={ error }
                              key={ key }/>
          } )
        }
      </div>
    }

    if(scheme === "bearer") {
      return (
        <div>
          <h4>
            <code>{ name || schema.get("name") }</code>&nbsp;
              (http, Bearer)
              <JumpToPath path={[ "securityDefinitions", name ]} />
            </h4>
            { value && <h6>Authorized</h6>}
           
        {
          errors.valueSeq().map( (error, key) => {
            return <AuthError error={ error }
              key={ key }/>
          } )
        }
      </div>
    )
    }
  return <div>
    <em><b>{name}</b> HTTP authentication: unsupported scheme {`'${scheme}'`}</em>
  </div>
  }
}

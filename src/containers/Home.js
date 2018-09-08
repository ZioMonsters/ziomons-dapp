import React, { Component } from "react"
import { Button, Collapse, Well } from "react-bootstrap"
import { drizzleConnect } from "drizzle-react"
import fetch from "node-fetch"

class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      open: false
    }
  }

  render() {
    return (
      <div className = { "home" }>
        <h1><strong>Welcome</strong></h1>
        <div className = { "info" }>
          <Button bsClass = { "test" } onClick={ () => this.setState({ open: !this.state.open }) }>
            What about us
          </Button>
          <Collapse in = { this.state.open }>
            <div>
              <Well>
                Anim pariatur cliche reprehenderit, enim eiusmod high life
                accusamus terry richardson ad squid. Nihil anim keffiyeh
                helvetica, craft beer labore wes anderson cred nesciunt sapiente
                ea proident.
              </Well>
            </div>
          </Collapse>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    account: state.accounts[0]
  }
}

export default drizzleConnect(Home, mapStateToProps)

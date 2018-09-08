import React, { Component } from "react"
import { Button, Collapse, Well, Grid, Row, Image, Col } from "react-bootstrap"
import { drizzleConnect } from "drizzle-react"
import sprite from "../assets/sprite.svg"

class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      open: false
    }
  }
 |hj
  render() {
    return (
      <Grid className = { "home" }>
        <Row>
          <Image src = {sprite} />
          <Col>
            <h1><strong>Welcome</strong></h1>
          </Col>
        </Row>
        <Row className = {"info"} >
          <Row>
            <Button onClick={ () => this.setState({ open: !this.state.open }) }>
              What about us
            </Button>
          </Row>
          <Row>
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
          </Row>
        </Row>
      </Grid>
    )
  }
}

const mapStateToProps = state => {
  return {
    account: state.accounts[0]
  }
}

export default drizzleConnect(Home, mapStateToProps)

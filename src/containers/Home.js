import React, { Component } from "react"
import { Button, Collapse, Well, Grid, Row, Image, Col } from "react-bootstrap"
import { drizzleConnect } from "drizzle-react"
import sprite from "../assets/sprite.svg"
import ReactSVG from 'react-svg'
import { LinkContainer } from "react-router-bootstrap"

class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      aboutUsOpen: false
    }
  }

  render() {
    return (
      <Grid fluid = {false} className = { "home" }>
        <Row>
          <h1>Welcome</h1>
        </Row>
        <Row>
          <Col md = { 4 }><ReactSVG src = { sprite } /></Col>
          <Col md = { 8 }>
            <blockquote>
              <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."</p>
              <footer><cite>Cryptomon team</cite></footer>
            </blockquote>
          </Col>
        </Row>
        <Row className = {"info"} >
          <Row>
            <Col md = { 6 }>
              <LinkContainer to = {"/unbox"}>
                <Button>
                  Unbox your first monsters
                </Button>
              </LinkContainer>
            </Col>
            <Col md = { 6 }>
              <Button onClick={ () => this.setState(({ aboutUsOpen}) => ({ aboutUsOpen: !aboutUsOpen })) }>
                About us
              </Button>
            </Col>
          </Row>
          <Row className = { "about-us" }>
            <Collapse in = { this.state.aboutUsOpen }>
              <p>
                Anim pariatur cliche reprehenderit, enim eiusmod high life
                accusamus terry richardson ad squid. Nihil anim keffiyeh
                helvetica, craft beer labore wes anderson cred nesciunt sapiente
                ea proident.
              </p>
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

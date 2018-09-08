import React, { Component } from "react"
import { Button, Collapse, Well, Grid, Row, Image, Col } from "react-bootstrap"
import { drizzleConnect } from "drizzle-react"
import sprite from "../assets/sprite.svg"
import ReactSVG from 'react-svg'
import { LinkContainer } from "react-router-bootstrap"

const Home = () => {
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
      <Row className = { "features" }>
        <ul>
          <li>Lorem ipsum</li>
          <li>Lorem ipsum</li>
          <li>Lorem ipsum</li>
          <li>Lorem ipsum</li>
        </ul>
      </Row>
      <Row className = {"info"}>
        <Row>
          <LinkContainer to = {"/unbox"}>
            <Button className = { "cryptomon-button" }>
              Unbox your first monsters
            </Button>
          </LinkContainer>
        </Row>
          <Col md = { 4 }>
            <LinkContainer to = {"/the-game"}>
              <Button className = { "cryptomon-button" }>
                The Game
              </Button>
            </LinkContainer>
          </Col>
        <Col md = { 4 }>
          <LinkContainer to = {"/about-us"}>
            <Button className = { "cryptomon-button" }>
              About us
            </Button>
          </LinkContainer>
        </Col>
        <Col md = { 4 }>
          <LinkContainer to = {"/tech"}>
            <Button className = { "cryptomon-button" }>
              Tech
            </Button>
          </LinkContainer>
        </Col>
      </Row>
    </Grid>
  )
}

const mapStateToProps = state => {
  return {
    account: state.accounts[0]
  }
}

export default drizzleConnect(Home, mapStateToProps)

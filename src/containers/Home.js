import React, { Component } from "react"
import { Button, Collapse, Well, Grid, Row, Image, Col } from "react-bootstrap"
import { drizzleConnect } from "drizzle-react"
import ReactSVG from 'react-svg'
import { LinkContainer } from "react-router-bootstrap"
import { Link } from "react-router-dom"

const Home = () => {
  return (
    <Grid fluid = {false} className = { "home" }>
      <Row>
        <h1>Welcome</h1>
      </Row>
      <Row className = { "quote" }>
        <Col md = { 4 }><ReactSVG src = { require(`../assets/monsters/${new Date().getTime() % 11}.svg`) } /></Col>
        <Col md = { 8 }>
          <blockquote>
            <p>"Ziomons is a ETH blockchain based game which uses ERC721 (NFT) tokens that allows you to fight other Ziomons trainer worldwide. Bet your ETH on your fights and grow your ETH pfolio!"</p>
            <footer><cite>A game made by <Link to = { "/about-us" }>kids</Link> but NOT for kids</cite></footer>
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

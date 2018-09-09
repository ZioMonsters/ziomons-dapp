import React, { Component } from "react"
import { Button, Collapse, Well, Grid, Row, Image, Col } from "react-bootstrap"
import { drizzleConnect } from "drizzle-react"
import ReactSVG from "react-svg"
import { LinkContainer } from "react-router-bootstrap"
import { Link } from "react-router-dom"

let monsterImage
const Home = ({ isLoaded }) => {
  if (typeof monsterImage === "undefined") {
    monsterImage = require(`../assets/monsters/${new Date().getTime() % 21}.svg`)
  }
  return (
    <Grid fluid className = { "home margin" }>
      <h1><strong>Welcome to Ziomons</strong></h1>
      <Row>
        <ReactSVG src = { monsterImage } />
      </Row>
      <Row className = { "quote" }>
        <blockquote>
          <p>"Ziomons is a ETH blockchain based game which uses ERC721 (NFT) tokens. You will be able to train your Ziomons and fight other trainers worldwide. Bet your ETH on your fights and win!"</p>
          <footer><cite>A game made by <Link to = { "/about-us" }>kids</Link> but NOT for kids</cite></footer>
        </blockquote>
      </Row>
      <Row>
        {
          isLoaded ?
            <LinkContainer to = {"/unbox" }>
              <Button className = { "cryptomon-button" }>Unbox your first monsters</Button>
            </LinkContainer> : <Button className = { "cryptomon-button fixed" } style = {{ width: "100%" }}>Login with Metamask on Rinkeby testnet</Button>
        }
      </Row>
      <Row className = { "features" }>
        <h3 className = { "text-center" }><strong>How does it work</strong></h3>
        <ul>
          <li>Purchase a Ziomons card pack and unbox it to build your team</li>
          <li>Look for an opponent: place your bet and get matched with another trainer! Your ZM will fight and the winner will receive a prize proportioned to the bet made</li>
          <li>Train your ZMs to make them stronger on the battlefield</li>
          <li>Arrange your team to be able to win all battles!</li>
        </ul>
      </Row>
      <Row>
        <Col md = { 4 }>
          <LinkContainer exact to = {"/the-game"}>
            <Button className = { "cryptomon-button" }>
              The Game
            </Button>
          </LinkContainer>
        </Col>
        <Col md = { 4 }>
          <LinkContainer exact to = {"/about-us"}>
            <Button className = { "cryptomon-button" }>
              About us
            </Button>
          </LinkContainer>
        </Col>
        <Col md = { 4 }>
          <LinkContainer exact to = {"/tech"}>
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
    account: state.accounts[0],
    isLoaded: state.drizzleStatus.initialized
  }
}

export default drizzleConnect(Home, mapStateToProps)

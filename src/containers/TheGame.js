import React from "react"
import { Grid, Row, Col, Image, Button } from "react-bootstrap"
import { LinkContainer } from "react-router-bootstrap"

const TheGame = () => {
  return (
    <Grid className = {"the-game"}>
      <Row>
        <p className = { "content" }>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </Row>
      <Row>
        <Col mdOffset = { 3 }>
          <LinkContainer to = { "/" }>
            <Button className = { "cryptomon-button" }>
              Torna alla home
            </Button>
          </LinkContainer>
        </Col>
      </Row>
    </Grid>
  )
}

export default TheGame

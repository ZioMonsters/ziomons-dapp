import React from "react"
import { Row, Col } from "react-bootstrap"
import { Link } from "react-router-dom"

const Menu = () =>
  <Row className = { "menu" }>
    <Col sm = { 3 }  md = { 3 }>
      <Link to = { "/fight" } className = { "fight" }>
        Fight
      </Link>
    </Col>
    <Col sm = { 3 } md = { 3 }>
      <Link to = { "/unbox" } className = { "unbox" }>
        Unbox
      </Link>
    </Col>
    <Col sm = { 3 } md = { 3 }>
      <Link to = { "/market" } className = { "market" }>
        Market
      </Link>
    </Col>
    <Col sm = { 3 } md = { 3 }>
      <Link to = { "/withdraw" } className = { "withdraw" }>
        Withdraw
      </Link>
    </Col>
  </Row>

export default Menu

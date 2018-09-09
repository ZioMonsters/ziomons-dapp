import React from "react"

import { Row, Col } from "react-bootstrap"
import { Link } from "react-router-dom"

const Menu = () =>
  <Row className = { "menu" }>
    <Col sm = { 4 }>
      <Link to = { "/fight" } className = { "fight" }>
        Fight
      </Link>
    </Col>
    <Col sm = { 4 }>
      <Link to = { "/unbox" } className = { "unbox" }>
        Unbox
      </Link>
    </Col>
    <Col sm = { 4 }>
      <Link to = { "/market" } className = { "market" }>
        Market
      </Link>
    </Col>
  </Row>

export default Menu

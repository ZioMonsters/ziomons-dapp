import React, { Component } from "react"
import { Col, Row } from "react-bootstrap"

class LastClashes extends Component {
  render() {
    const { lastClashes } = this.props
    return (
      <Col md = { 5 } className = { "last-clashes" }>
        <h2>Last clashes</h2>
        <Row>
          {
            [ ...lastClashes.slice(0, 3), ...new Array(3).fill({ void: true }) ].map((item, index) =>
              <Col md = { 4 } key = { index }>
                {
                  item.void ?
                    <div className = { "rect" } /> : item
                }
              </Col>
            )
          }
        </Row>
        <Row>
          {
            [ ...lastClashes.slice(3, 6), ...new Array(3).fill({ void: true }) ].map((item, index) =>
              <Col md = { 4 } key = { index }>
                {
                  item.void ?
                    <div className = { "rect" } /> : item
                }
              </Col>
            )
          }
        </Row>
      </Col>
    )
  }
}

export default LastClashes

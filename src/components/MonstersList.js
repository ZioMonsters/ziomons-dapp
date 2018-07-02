import React, { Component } from "react"
import { Row, Col, Grid } from "react-bootstrap"

class MonstersList extends Component {
  render() {
    const { latestBattle } = this.props
    const team = []
    return (
      <Grid className = { "monsters-list" } fluid>
        <Row>
          {
            [ ...team.slice(0, 3), ...new Array(3).fill({ void: true }) ].map((item, index) =>
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
            [ ...team.slice(0, 2), ...new Array(2).fill({ void: true }) ].map((item, index) =>
              <Col md = { 4 } key = { index }>
                {
                  item.void ?
                    <div className = { "rect" } /> : item
                }
              </Col>
            )
          }
        </Row>
      </Grid>
    )
  }
}

export default MonstersList

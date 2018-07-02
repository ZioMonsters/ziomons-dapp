import React, { Component } from "react"
import { Grid, Row, Col } from "react-bootstrap"
import Menu from "../components/Menu"
import LastClashes from "../components/LastClashes.js"
import { apiUrl } from "../helpers"
import { getAddress } from "../selectors"
import { drizzleConnect } from "drizzle-react"
import MonstersList from "../components/MonstersList.js"

class User extends Component {
  state = {
    isFetching: true,
    list: []
  }

  componentDidMount() {
    const { address } = this.props
    fetch(`${apiUrl}/battlesOfAddress?address=${address}`)
      .then(res => res.json())
      .then(console.log)
  }
  render() {
    const { isFetching, list } = this.state
    return (
      <Grid className = { "user" } fluid>
        <Grid>
          <Menu />
        </Grid>
        <Row className = { "body" }>
          <LastClashes
            lastClashes = { list }
          />
          <Col md = { 5 } mdOffset = { 1 }>
            <Row>
              <h2>La mia ultima squadra</h2>
            </Row>
            <Row>
              <MonstersList />
            </Row>
          </Col>
        </Row>
      </Grid>
    )
  }
}

const mapStateToProps = state => ({
  address: getAddress(state)
})

export default drizzleConnect(User, mapStateToProps)

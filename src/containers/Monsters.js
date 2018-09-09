//Node modules
import React, { Component } from "react"
import { Col, Row } from "react-bootstrap"
import { drizzleConnect } from "drizzle-react"

//Helpers
import { listMonsters } from "../helpers/api.js"

//Selectors
import { getAddress } from "../selectors"

//Assets
import placeholder from "../assets/placeholder/placeholder.png"

class Monsters extends Component {
  constructor(props) {
    super(props)
    this.state = {
      monsters: []
    }
  }

  componentDidMount() {
    /*listMonsters("0xhu8ityss8xob1f9acf8tpmkbrj4un4t25zmzf5jk", 12)//TODO replace with this.props.account
      .then(res => res.json())
      .then(({ monsters }) => monsters.forEach(monster => this.setState({
        monsters: [...this.state.monsters, monster]
      })))*/
  } 

  render() {
    /*const monsters = this.state.monsters, monstersPerRow = 4, rows = []
    //TODO replace with API paginator
    for (let i = 0; i < monsters.length; i += monstersPerRow) {
      rows.push(monsters.slice(i, i + monstersPerRow))
    }
    console.log("monsters", monsters)
    console.log("rows", rows)
    return(
      <Col md = { 12 } className = { "list" }>
        {
          rows.map((monster, row) => 
            [
              <Row>
              {
                monsters.map(() => 
                  <Col md = { 3 }>{ placeholder }</Col>
                )
              }
              </Row>            ]
          )
        }
      </Col>
    )*/
    return ("")
  } 
}

const mapStateToProps = state => {
  return {
    ...state,
    account: getAddress(state)
  }
} 

export default drizzleConnect(Monsters, mapStateToProps) 
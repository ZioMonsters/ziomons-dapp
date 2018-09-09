//Node modules
import React, { Component } from "react"
import { Grid, Row, Col, Image, ProgressBar } from "react-bootstrap"
import ReactSVG from "react-svg"

//Helpers
import { getMonster } from "../helpers/api.js"

//Assets
const monsterImage = require("../assets/monsters/17.svg")

class MonsterPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      monster: {}
    }
    const id = parseInt(this.props.location.pathname.split("/")[2])
    console.log("id:", id)
    getMonster(id)
      .then(res => res.json())
      .then(monster => this.setState({ monster }))
  } 

  render() {
    console.log("monster:", this.state.monster)
    return(
      <div>
        <Col md = { 3 } className = { "text-right" } >
          <Row><ReactSVG src = { monsterImage }svgStyle = {{ width: 300, height: 300 }}/></Row>
          <Row><ProgressBar bsStyle = { "info" } now = { this.state.monster.experence*100/((3^(this.state.monster.level+1))/5) } label = { `${this.state.monster.experence}/${(3^(this.state.monster.level+1))/5}` }/></Row>
        </Col>
        <Col md = { 3 }><h1>{ this.state.monster.attack }<br/>{ this.state.monster.defense }<br/>{ this.state.monster.speed }</h1></Col>
      </div>
    )
  } 
}

/*
const mapStateToProps = state => {
  return {
    ...state,
    account: getAddress(state)
  }
} 
*/

export default MonsterPage 
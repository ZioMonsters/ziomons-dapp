//Node modules
import React, { Component } from "react"
import { Grid, Col, Image } from "react-bootstrap"

//Helpers
import { getMonster } from "../helpers/api.js"

//Assets
import placeholder from "../assets/placeholder/bigplaceholder.png"

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
    console.log(this.state.monster)
    return(
      <Grid fluid>
        <Col md = { 4 }>
          <Image src = { placeholder } />
        </Col>
        <Col md = { 2 }><h1>{ this.state.monster.attack }</h1></Col>
        <Col md = { 2 }><h1>{ this.state.monster.defense }</h1></Col>
        <Col md = { 2 }><h1>{ this.state.monster.speed }</h1></Col>
      </Grid>
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
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
      <div >
        <Col md = { 6 } className = { "text-right" } >
          <Image src = { placeholder } />
        </Col>
        <Col md = { 6 }><h1>{ this.state.monster.attack }<br/>{ this.state.monster.defense }<br/>{ this.state.monster.speed }</h1></Col>
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
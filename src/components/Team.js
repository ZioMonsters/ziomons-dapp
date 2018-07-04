import React, { Component } from "react"
import { Image } from "react-bootstrap"

//Assets importing
import placeholderImg from "../assets/placeholder.png"
const placeholder = <Image src = { placeholderImg } />

class Team extends Component {
  render() {
    return (
      <div>{ placeholder }</div>
    )
  }
}

export default Team
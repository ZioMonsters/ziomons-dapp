import React, { Component } from "react"
import { OverlayTrigger, Tooltip, Image } from "react-bootstrap"
import { DropTarget } from "react-dnd"

import placeholder from "../assets/placeholder/placeholder.png"
const rarityColors = ["#c4c4c4", "#87f7ff", "#7275ff", "#ffff66"]

const target = {
  drop: (props, monitor, component) => {
    const { id } = monitor.getItem().monster 
    component.setState({
      hasDropped: true,
      monster: monitor.getItem().monster
    })
    component.props.setMonster(id)
  }
}

const collect = (connect, monitor) => ({
  connectDropTarget: connect.dropTarget(),
  isOver: monitor.isOver(),
})

class TeamMonster extends Component {
  constructor(props) {
    super(props)
    this.state = {
      hasDropped: false,
      monster: {}
    }
  }

  render() {
    const { connectDropTarget } = this.props
    const { hasDropped, monster } = this.state
    if (hasDropped) {
      return (
        <OverlayTrigger placement = { "top" } overlay = {
            <Tooltip>
              <div>
                <strong>ID ⇨ </strong>{ monster.id }
                { 
                  [...Object.entries(monster).slice(0,4), ["exp", monster.exp]].map(stat => 
                    <div><strong>{ stat[0].toUpperCase() } ⇨ </strong>{ stat[1] }</div>
                  )
                }
              </div>
            </Tooltip>
          }>
            <Image src = { placeholder } style = {{ border: `10px solid ${ rarityColors[monster.rarity] }` }} />
        </OverlayTrigger>
      )
    } else {
      return connectDropTarget(
        <div className = {"box"} />
      )
    }
  }
}

//Exporting
export default DropTarget("monster", target, collect)(TeamMonster);

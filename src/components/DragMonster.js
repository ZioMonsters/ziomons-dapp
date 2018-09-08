import React, { Component } from "react"
import { OverlayTrigger, Tooltip, Image } from "react-bootstrap"
import { DragSource } from "react-dnd"

import placeholder from "../assets/placeholder/placeholder.svg"
const rarityColors = ["#c4c4c4", "#87f7ff", "#7275ff", "#ffff66"]

const monsterSource = {
  beginDrag: (props, monitor, component) => ({
    monster: component.props.monster
  }),
  endDrag: (props, monitor, component) => {
    if(monitor.didDrop()) {
      component.setState({
        hasDropped: true
      })
    }
  }
}

const collect = (connect, monitor) => ({
  connectDragSource: connect.dragSource(),
  isDragging: monitor.isDragging()
})

const Box = () => {
  return (
    <div className = { "box" } />
  )
}

class Monster extends Component {
  constructor(props) {
    super(props)
    this.state = {
      hasDropped: false,
    }
  }

  render() {
    const { connectDragSource, isDragging } = this.props
    const { hasDropped } = this.state 
    if (hasDropped) {
      return <Box />
    } else {
      return connectDragSource(
        <div style = {{
          opacity: isDragging ? 0.35 : 1,
          cursor: "move"
        }}>
          <OverlayTrigger placement = { "top" } overlay = {
              <Tooltip>
                <div>
                  <strong>ID ⇨ </strong>{ this.props.monster.id }
                  { 
                    [...Object.entries(this.props.monster).slice(0,4), ["exp", this.props.monster.exp]].map(stat => 
                      <div><strong>{ stat[0].toUpperCase() } ⇨ </strong>{ stat[1] }</div>
                    )
                  }
                </div>
              </Tooltip>
          }>
            <Image src = { placeholder } style = {{ border: `10px solid ${rarityColors[this.props.monster.rarity]}` }} />
          </OverlayTrigger>
      </div>
      )
    }
  }
}

export default DragSource("monster", monsterSource, collect)(Monster)

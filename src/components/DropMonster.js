import React, { Component } from "react"
import { OverlayTrigger, Tooltip, Image } from "react-bootstrap"
import PropTypes from "prop-types"
import { DropTarget } from 'react-dnd';

//Assets importing
import placeholder from "../assets/placeholder/placeholder.svg"
const rarityColors = ["#c4c4c4", "#87f7ff", "#7275ff", "#ffff66"]

//Drag and drop setup
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

//Component class
class TeamMonster extends Component {
  static propTypes = {
    monster: PropTypes.Object,
    setMonster: PropTypes.Function  
  }

  constructor(props) {
    super(props)
    this.state = {
      hasDropped: false,
      monster: {}
    }
  }

  render() {
    const { connectDropTarget, isOver } = this.props
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

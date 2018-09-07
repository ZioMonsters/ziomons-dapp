import React, { Component } from "react"
import { Grid, Row, Col, Button, Glyphicon } from "react-bootstrap"
import { drizzleConnect } from "drizzle-react"
import { DragDropContext } from "react-dnd"
import HTML5Backend from "react-dnd-html5-backend"

import DragMonster from "../components/DragMonster.js"
import DropMonster from "../components/DropMonster.js"

class TeamSelector extends Component {
  static contextTypes = {
    drizzle: PropTypes.object
  }

  state = {
    monsters: [],
    team: [null, null, null, null, null] //TODO Replace with new Array(5)
  }

  constructor(props, context) {
    super(props)
    this.contract = context.drizzle.contracts.CryptoMon;
  }

  componentDidMount() {
    this.setState({
      monsters: []
    })
    this.contract.methods.totalSupply().call()
      .then(totalSupply => {
        for (let i = 0; i < totalSupply; i++) {
          this.contract.methods.ownerOf(i).call()
            .then(owner => {
              if (owner === this.props.account) {
                return this.contract.methods.monsters(i).call()
              }
            })
            .then(monster => {
              if(monster) {
                ["0", "1", "2", "3", "4", "5", "6"].forEach(e => delete monster[e])
                monster["id"] = i
                monster["selected"] = false 
                this.setState({
                  monsters: [...this.state.monsters, monster]
                })
              }
            })
        }
      })
  }

  fight = () => {
    if (this.state.team.length === 5) {
      this.contract.methods.fight.cacheSend(this.state.team, 0)
    }
  }

  renderTeam() {
    return (
      <Grid fluid>
        <Col md = { 6 }>
          {
            this.state.team.slice(0,3).map((monster, i) => 
              <TeamMonster 
                monster = { monster } 
                setMonster = 
                  { 
                    monsterId => this.setState(({ team }) => {
                      team[i] = monsterId
                      return { team }
                    })
                  }
              />
            )
          }
        </Col>
        <Col md = { 6 } style = {{ "padding-top": "20%" }}>
          {
            this.state.team.slice(3).map((monster, i) => 
              <TeamMonster 
                monster = { monster } 
                setMonster = 
                  { 
                    monsterId => this.setState(({ team }) => {
                      team[i+3] = monsterId
                      return { team }
                    })
                  }
              />
            )
          }
        </Col>
      </Grid>
    )
  }

  render() {
    const monsters = this.state.monsters, monstersPerRow = 4, rows = []
    //todo This will be replaced by API Paginator
    for (let i = 0; i < monsters.length; i += monstersPerRow) {
      rows.push(monsters.slice(i, i + monstersPerRow))
    }
    return (
      <Grid fluid>
        <Col className = { "monsters-selector" } md = { 6 }>
          <Grid fluid>
            <Row><h1><strong>Team selector:</strong></h1></Row>
            {
              rows.map((row, rowNumber) => 
                <Row>
                  {
                    row.map((monster, index) => 
                      <Col md = { 12/monstersPerRow } >
                        <Monster monster = { monster } />
                      </Col>
                    )
                  }
                </Row>
              )
            }
          </Grid>
        </Col>
        <Col md = { 4 }>
          <Grid fluid>
            <Row>
              <Col md = { 2 } style = {{ "padding-top":"40%" }}><Glyphicon glyph = { "chevron-right" } style = {{ "font-size":"75px" }} /></Col>
              <Col md = { 10 }> 
                {
                  this.renderTeam()
                }
                <Row className = { "text-center "}>
                  <br/><Button onClick = { () => window.location.reload() }>Reset team</Button>
                </Row>
              </Col>
            </Row>  
          </Grid>
        </Col>
        <Col md = { 2 }>
          <Col md = { 2 } style = {{ "padding-top":"85%" }}><Glyphicon glyph = { "chevron-right" } style = {{ "font-size":"75px" }} /></Col>
          <Col md = { 10 } style = {{ "padding-top":"92.5%", "padding-left":"15%" }}><Button bsSize = { "large" } onClick = { () => this.fight()}>FIGHT</Button></Col>
        </Col>
      </Grid>
    )
  }
}

const mapStateToProps = state => {
  return {
    ...state,
    account: getAddress(state)
  }
} 

export default DragDropContext(HTML5Backend)(drizzleConnect(TeamSelector, mapStateToProps))



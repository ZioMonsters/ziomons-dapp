//Node modules
import React, { Component } from "react"
import { Grid, Row, Col, Button, Glyphicon } from "react-bootstrap"
import { DragDropContext } from "react-dnd"
import HTML5Backend from "react-dnd-html5-backend"
import { drizzleConnect } from "drizzle-react"
import PropTypes from "prop-types"

//Components
import Monster from "../components/DragMonster.js"
import TeamMonster from "../components/DropMonster.js"

//Helpers
import { listMonsters } from "../helpers/api.js"

//Selectors
import { getAddress } from "../selectors"

class Fight extends Component {
  static contextTypes = {
    drizzle: PropTypes.object
  }

  constructor(props, context) {
    super(props)
    this.state = {
      monsters: [],
      team: new Array(5).fill(null)
    }
    this.contract = context.drizzle.contracts.CryptoMon

  }

  componentDidMount() {
    listMonsters("0xhu8ityss8xob1f9acf8tpmkbrj4un4t25zmzf5jk", 12)//TODO replace with this.props.account
      .then(res => res.json())
      .then(({ monsters }) => monsters.forEach(monster => this.setState({
        monsters: [...this.state.monsters, monster]
      })))
    }

  fight = () => {
    //if (this.state.team.length === 5) {
//      this.contract.methods.fight([0,1,2,3,4], 0).send({from: this.props.account})
      this.contract.methods.fight([0,1,2,3,4], 0).cacheSend({ from: this.props.account, gas: 1055638*5 })

    //}
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
            <Row><h1 className = { "text-center" }><strong>Team selector:</strong></h1></Row>
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
                <Row className = { "text-center "}><br/>
                  <Button onClick = { () =>
                      this.setState({ team: [null, null, null, null, null] }, () => {console.log(this.state.team)}) 
                  }>
                    Reset team
                  </Button>
                </Row>
              </Col>
            </Row>  
          </Grid>
        </Col>
        <Col md = { 2 }>
          <Col md = { 6 } style = {{ "padding-top":"85%" }}><Glyphicon glyph = { "chevron-right" } style = {{ "font-size":"75px" }} /></Col>
          <Col md = { 6 } style = {{ "padding-top":"92.5%", "padding-left":"15%" }}><Button bsSize = { "large" } onClick = { () => this.fight()}>FIGHT</Button></Col>
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

export default DragDropContext(HTML5Backend)(drizzleConnect(Fight, mapStateToProps))

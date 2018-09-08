//Node modules
import React, { Component } from "react"
import { Grid, Row, Col, Button, Glyphicon } from "react-bootstrap"
import { DragDropContext } from "react-dnd"
import HTML5Backend from "react-dnd-html5-backend"
import Web3 from "web3"

//Components
import Monster from "../components/DragMonster.js"
import TeamMonster from "../components/DropMonster.js"

//Helpers
import { getMonsters } from "../helpers/api.js"
import { fight } from "../helpers/web3.js"

class Fight extends Component {
  constructor(props) {
    super(props)
    this.state = {
      monsters: [],
      team: [],
    }
  }

  componentWillMount() {
  // const web3 = new Web3(
  //   new Web3.providers.HttpProvider('http://localhost:9545')
  // );
  // const CryptoMon = new web3.eth.Contract(abi, "0x2c2b9c9a4a25e24b174f26114e8926a9f2128fe4")

 }


  componentDidMount() {
    this.setState({
      monsters: [],
      team: new Array(5).fill(null)
    })
    getMonsters().then(monsters => {
      monsters.forEach(monster => {
        this.setState({
          monsters: [...this.state.monsters, monster]
        })
      })
    })
  }

  fight = () => {
    if (this.state.team.length === 5) {
       return fight(this.state.team, 0, 0)
         .then(console.log)
         .catch(console.error)
        //{ team: this.state.team, minBet: 0, bet: 10 }
    }
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
                      this.setState({ team: new Array(5).fill(null) }) 
                  }>
                    Reset team
                  </Button>
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

export default DragDropContext(HTML5Backend)(Fight)

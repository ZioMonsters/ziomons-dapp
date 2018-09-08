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
import { getContractInstance } from "../helpers/web3.js"

//import { abi } from "../contracts/CryptoMon.json"
const abi = JSON.parse(`[
    {
      "constant": true,
      "inputs": [
        {
          "name": "interfaceID",
          "type": "bytes4"
        }
      ],
      "name": "supportsInterface",
      "outputs": [
        {
          "name": "",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "_tokenId",
          "type": "uint256"
        }
      ],
      "name": "getApproved",
      "outputs": [
        {
          "name": "",
          "type": "address"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_approved",
          "type": "address"
        },
        {
          "name": "_tokenId",
          "type": "uint256"
        }
      ],
      "name": "approve",
      "outputs": [],
      "payable": true,
      "stateMutability": "payable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_min",
          "type": "uint256"
        },
        {
          "name": "_max",
          "type": "uint256"
        }
      ],
      "name": "randInt",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_newOwner",
          "type": "address"
        }
      ],
      "name": "nominateNewOwner",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "totalSupply",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_from",
          "type": "address"
        },
        {
          "name": "_to",
          "type": "address"
        },
        {
          "name": "_tokenId",
          "type": "uint256"
        }
      ],
      "name": "transferFrom",
      "outputs": [],
      "payable": true,
      "stateMutability": "payable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_from",
          "type": "address"
        },
        {
          "name": "_to",
          "type": "address"
        },
        {
          "name": "_tokenId",
          "type": "uint256"
        }
      ],
      "name": "safeTransferFrom",
      "outputs": [],
      "payable": true,
      "stateMutability": "payable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_atk",
          "type": "uint8"
        },
        {
          "name": "_def",
          "type": "uint8"
        },
        {
          "name": "_spd",
          "type": "uint8"
        },
        {
          "name": "_lvl",
          "type": "uint8"
        },
        {
          "name": "_rarity",
          "type": "uint8"
        },
        {
          "name": "_exp",
          "type": "uint256"
        }
      ],
      "name": "createCustomMonster",
      "outputs": [
        {
          "name": "",
          "type": "uint32"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "_tokenId",
          "type": "uint256"
        }
      ],
      "name": "ownerOf",
      "outputs": [
        {
          "name": "",
          "type": "address"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "_owner",
          "type": "address"
        }
      ],
      "name": "balanceOf",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [],
      "name": "acceptOwnership",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "",
          "type": "uint32"
        }
      ],
      "name": "inSale",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "params",
      "outputs": [
        {
          "name": "",
          "type": "uint16"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_operator",
          "type": "address"
        },
        {
          "name": "_approved",
          "type": "bool"
        }
      ],
      "name": "setApprovalForAll",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_from",
          "type": "address"
        },
        {
          "name": "_to",
          "type": "address"
        },
        {
          "name": "_tokenId",
          "type": "uint256"
        },
        {
          "name": "_data",
          "type": "bytes"
        }
      ],
      "name": "safeTransferFrom",
      "outputs": [],
      "payable": true,
      "stateMutability": "payable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "monsters",
      "outputs": [
        {
          "name": "atk",
          "type": "uint8"
        },
        {
          "name": "def",
          "type": "uint8"
        },
        {
          "name": "spd",
          "type": "uint8"
        },
        {
          "name": "lvl",
          "type": "uint8"
        },
        {
          "name": "rarity",
          "type": "uint8"
        },
        {
          "name": "exp",
          "type": "uint256"
        },
        {
          "name": "busy",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_parameter",
          "type": "uint8"
        },
        {
          "name": "_newValue",
          "type": "uint16"
        }
      ],
      "name": "changeParameter",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "_owner",
          "type": "address"
        },
        {
          "name": "_operator",
          "type": "address"
        }
      ],
      "name": "isApprovedForAll",
      "outputs": [
        {
          "name": "",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "ERC721_RECEIVED",
      "outputs": [
        {
          "name": "",
          "type": "bytes4"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_from",
          "type": "address"
        },
        {
          "name": "_tokenId",
          "type": "uint256"
        },
        {
          "name": "_data",
          "type": "bytes"
        }
      ],
      "name": "onERC721Received",
      "outputs": [
        {
          "name": "",
          "type": "bytes4"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "name": "_player",
          "type": "address"
        },
        {
          "indexed": false,
          "name": "_ids",
          "type": "uint32[6]"
        }
      ],
      "name": "Unboxed",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "name": "_player",
          "type": "address"
        },
        {
          "indexed": false,
          "name": "_id",
          "type": "uint32"
        },
        {
          "indexed": true,
          "name": "_price",
          "type": "uint256"
        }
      ],
      "name": "ForSale",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "name": "_attacker",
          "type": "address"
        },
        {
          "indexed": true,
          "name": "_defender",
          "type": "address"
        },
        {
          "indexed": false,
          "name": "_team1",
          "type": "uint32[20]"
        },
        {
          "indexed": false,
          "name": "_team2",
          "type": "uint32[20]"
        },
        {
          "indexed": false,
          "name": "_bonusWinner",
          "type": "uint8"
        },
        {
          "indexed": true,
          "name": "_winnerId",
          "type": "uint256"
        },
        {
          "indexed": false,
          "name": "_moneyWon",
          "type": "uint256"
        }
      ],
      "name": "Results",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "name": "_parameter",
          "type": "uint8"
        },
        {
          "indexed": false,
          "name": "_oldValue",
          "type": "uint256"
        },
        {
          "indexed": false,
          "name": "_newValue",
          "type": "uint256"
        }
      ],
      "name": "Changed",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "name": "_ids",
          "type": "uint32[]"
        },
        {
          "indexed": false,
          "name": "_atkMod",
          "type": "uint8[]"
        },
        {
          "indexed": false,
          "name": "_defMod",
          "type": "uint8[]"
        },
        {
          "indexed": false,
          "name": "_spdMod",
          "type": "uint8[]"
        }
      ],
      "name": "Upgraded",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "name": "_from",
          "type": "address"
        },
        {
          "indexed": true,
          "name": "_to",
          "type": "address"
        },
        {
          "indexed": true,
          "name": "_tokenId",
          "type": "uint256"
        }
      ],
      "name": "Transfer",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "name": "_owner",
          "type": "address"
        },
        {
          "indexed": true,
          "name": "_approved",
          "type": "address"
        },
        {
          "indexed": true,
          "name": "_tokenId",
          "type": "uint256"
        }
      ],
      "name": "Approval",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "name": "_owner",
          "type": "address"
        },
        {
          "indexed": true,
          "name": "_operator",
          "type": "address"
        },
        {
          "indexed": false,
          "name": "_approved",
          "type": "bool"
        }
      ],
      "name": "ApprovalForAll",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "name": "_from",
          "type": "address"
        },
        {
          "indexed": true,
          "name": "_to",
          "type": "address"
        }
      ],
      "name": "OwnershipTransferred",
      "type": "event"
    },
    {
      "constant": false,
      "inputs": [],
      "name": "unbox",
      "outputs": [],
      "payable": true,
      "stateMutability": "payable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_ids",
          "type": "uint32[5]"
        },
        {
          "name": "_minBet",
          "type": "uint256"
        }
      ],
      "name": "fight",
      "outputs": [],
      "payable": true,
      "stateMutability": "payable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [],
      "name": "stopWaiting",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_id",
          "type": "uint32"
        },
        {
          "name": "_price",
          "type": "uint256"
        }
      ],
      "name": "sellMonster",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_id",
          "type": "uint32"
        }
      ],
      "name": "buyMonster",
      "outputs": [],
      "payable": true,
      "stateMutability": "payable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [],
      "name": "withdraw",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_ids",
          "type": "uint32[]"
        },
        {
          "name": "_atkMod",
          "type": "uint8[]"
        },
        {
          "name": "_defMod",
          "type": "uint8[]"
        },
        {
          "name": "_spdMod",
          "type": "uint8[]"
        }
      ],
      "name": "lvlUp",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ]`)

class Fight extends Component {
  constructor(props) {
    super(props)
    this.state = {
      monsters: [],
      team: [],
    }
    this.web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:9545"))
  }

async componentWillMount() {
  const web3 = new Web3(
    new Web3.providers.HttpProvider('http://localhost:9545')
  );
  const CryptoMon = new web3.eth.Contract(abi, "0x2c2b9c9a4a25e24b174f26114e8926a9f2128fe4") 

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
    //if (this.state.team.length === 5) {
      //console.log("P")
      //this.web3.setProvider(new this.web3.providers.HttpProvider('http://localhost:9545'))
      //CryptoMon.methods.fight(this.state.team, 0)//.call()
       // (this.state.team, 0)
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
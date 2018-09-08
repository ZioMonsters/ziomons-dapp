import React from "react"
import { Grid, Row, Col, Image, Button } from "react-bootstrap"
import { LinkContainer } from "react-router-bootstrap"
import ReactSVG from "react-svg"

const TheGame = () => {
  return (
    <Grid fluid className = {"the-game margin"}>
      <Row>
        <h1>The Game</h1>
        <p>
          The core of ziomons is divided in two: trade (coming soon) and fighting. All ziomons are tradable and can fight with other ziomons.

          The value of the ziomon on the market is determined by its rarity and its level. There are 4 different types of rarity: common, not common, rare and legendary. The rarity of the ziomons influences the stats, in fact, the higher the rarity of the ziomons is, the better the stats are.

          Unpacking rules: you can unpack three different type of envelopes of card. The most you pay the better is the chance to gain a legendary ziomon.
        </p>
      </Row>
      <Row>
        <ReactSVG src = { require("../assets/monsters/1.svg" ) } />
      </Row>
      <Row>
        <h3>Match Rule</h3>
        <p>
          Every user place a minumun bet on which the system won’t match other player and a maximun (higher than the minimum one) bet on which the system won’t match him above. When the user want to start a fight, the system will match him with another one that has placed the maximum value between the maximum value and minimum value of the first player. The user that has placed the greater minimum bet recieves back the difference between the two minimun bet.
          <h4>For Example</h4>
          PlayerA has placed a minimum bet of 5 and a maximum bet of 500. PlayerB has placed a minimum bet of 0 and a bet of 300. So PlayerA can play with all the player that has placed the maximum value in the range between 5 and 500. PlayerB can play with all the people that has placed the maximum value between 0 and 300. PlayerA and PlayerB matched and at the beginning of the fight PlayerA recieves back 200 (the difference between 300 and 500). At the end of the fight the winner will win his initial bet back plus the bet of the opponent. In an unlikely event of a draw, both of the user will take back their money.
        </p>
      </Row>
      <Row>
        <ReactSVG src = { require("../assets/monsters/3.svg" ) } />
      </Row>
      <Row>
        <h3>Experience gain</h3>
        <p>
          Every monster gains experience by fighting in battles. As said, by gaining experience you can upgrade the stats of your own ziomon. When a ziomon levels-up, the owner can decide on which stas assign a new point, making the zeomon increase that stat by one. If the team win a battle, every monster of it gains the same level of exprerience (even though it lost his own battle). A monster has his own level of experience and when a cap is reached the monster levels-up. The maximum level is level 100.
        </p>
      </Row>
      <Row>
          <ReactSVG src = { require("../assets/monsters/4.svg" ) } />
      </Row>
      <Row>
        <h3>Combat rule</h3>
        <p>
          Two team of 5 ziomons fight with each other. Each ziomons has its own attribute of speed, attack and defense. At the beginning of the fight the first ziomon encounters the first one owned by the second player and the battle begins. The one that has the highest value of speed is the attacker, the other one is considered the defender. If the attacker’s attack value is higher than the defender’s defense value, the attacker has won, otherwise he has lost the battle and the defender has won. Then it is the turn of the second ziomons and the whole process is repeated until all the ziomons have fight in their own battle. The team that wins the most battles is considered the winner and gains the bet.

          A single ziomon cannot be put on the market for trade and in battle at the same time. You have to make a choice.

          Build your own team, fight with others and collect the most valuable team on the market.
        </p>
      </Row>
      <Row>
        <LinkContainer exact to = { "/" } >
          <Button className = { "cryptomon-button" }>
            Torna alla home
          </Button>
        </LinkContainer>
      </Row>
    </Grid>
  )
}

export default TheGame

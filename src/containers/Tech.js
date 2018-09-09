import React from "react"
import { Grid, Row, Col, Button } from "react-bootstrap"
import { LinkContainer } from "react-router-bootstrap"

const Tech = () => {
  return (
    <Grid fluid className = { "tech margin" }>
      <Row>
      <h1>Tech</h1>
      </Row>
      <Row>
        <p>
          So, here it comes the infrastructure of the whole project:
          The project is hosted under https://ziomons.soluzionifutura.it/ using Route53 and CloudFront.
          Every event on the Rinkeby testnet is scraped by an AWS Lambda and all the different events created by our smart-contract are stored and in SQS queues, sorted by type. Every single queue triggers different AWS Lambda and stores its information in different DynamoDB tables.

          The user interacts with the smart-contract throught our dapp, which allows even the most inexperienced people to play. When a function is called in the contract, it emits an event, which will be received by our lambdas, and so the cycle goes on.

        </p>
      </Row>
      <LinkContainer exact to = { "/" } >
        <Button className = { "cryptomon-button" }>
          Torna alla home
        </Button>
      </LinkContainer>
    </Grid>
  )
}

export default Tech

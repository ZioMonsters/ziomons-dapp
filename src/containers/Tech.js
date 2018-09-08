import React from "react"
import { Grid, Row, Col } from "react-bootstrap"

const Tech = () => {
  return (
    <Grid fluid className = { "tech" }>
      <Row>
        <h1>Tech</h1>
        <blockquote>
          <p>
          So, here it comes the infrastructure of the whole project:
          The project is hosted under https://ziomons.soluzionifutura.it/  on Route53 and CloudFront.
          Every event on the rinkeby testnet is scraped by an AWS Lambda so that all different events created by our smart contract are stored and in a SQS queue. The event are sorted by type in SQS queues; every single queue triggers different AWS Lambdas and stores the information in different DynamoDB tables.

          The user interacts with the Dapp and through that different functions of the smart contract are called. Then the function will be executed on the blockchain and an event will be emitted.
          After that all the loop event begin again, the listener will scrape the blockchain for new events and new user will emit new events

          When a user call the smart contract for the Dapp and, for example, wants to fight with another user, the RPC API made with API Gateway and AWS Valkyrie (which combines API Gateway and AWS Lambda to gain serverless applications) of our Dapp compares both the team made by the users and determines who’s the winner.


          The application is hosted under https://ziomons.soluzionifutura.it/ and every one that has wallet can play with it so build your own team, fight with other and collect the most valuable team on the market!
          </p>
        </blockquote>
      </Row>
    </Grid>
  )
}

export default Tech

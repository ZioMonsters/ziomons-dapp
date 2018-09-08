import React from "react"
import { Grid, Row, Image } from "react-bootstrap"

const AboutUs = () => {
  return (
    <Grid fluid className = { "about-us"}>
      <Image src = { require("../assets/images/team.jpg") } responsive/>
      <Grid fluid className = { "margin" }>
        <Row>
        <h1>About Us</h1>
        </Row>
        <Row>
          <p>
            Ziomons has been developed by our team for a summer school project. Our computer science teacher is the CTO of Soluzioni Futura (www.soluzionifutura.it) and challenged us to design, create and develop a dApp on the ETH blockchain.
            We looked into the ETH environment and its projects to take some inspiration and we came up with Ziomons.
            We had to learn almost everything from scratch. From infrastructure, to blockchain technology and we’ve got passionate about it.
            We had to learn solidity and the blockchain paradigm and we had to integrate it with our current technical knowledge.
            Ziomons runs on an off chain serverless infrastructure based on AWS Lambda and some other AWS SaaS.
          </p>
        </Row>
      </Grid>
    </Grid>
  )
}

export default AboutUs

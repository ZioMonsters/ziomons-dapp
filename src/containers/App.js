import React, { Component } from "react"
import { drizzleConnect } from "drizzle-react"
import NavBar from "../components/NavBar"
import { Switch, withRouter } from "react-router-dom"
import Routes from "./Routes.js"
import { CSSTransition, TransitionGroup } from "react-transition-group"
import v4 from "uuid/v4"

class App extends Component {
  render() {
    return (
      //<TransitionGroup className={"transition-group"}>
      //  <CSSTransition
      //    // key={routeKey}
      //    key = { v4() }
      //    timeout={{ enter: 1000, exit: 1000 }}
      //    classNames={"page"}
      //    mountOnEnter={true}
      //    unmountOnExit={true}
      //  >
          <div className="App">
            {
              this.props.isLoaded && [
                <NavBar />,
                <div className = { "content" }>
                  <Switch>
                    <Routes />
                  </Switch>
                </div>
              ]
            }
          </div>
      //   </CSSTransition>
      // </TransitionGroup>
    )
  }
}

const mapStateToProps = state => {
  return {
    isLoaded: state.drizzleStatus.initialized
  }
}

export default withRouter(drizzleConnect(App, mapStateToProps))

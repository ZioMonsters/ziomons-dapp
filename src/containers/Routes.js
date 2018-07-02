import React from "react"
import { Route } from "react-router-dom"
import Home from "./Home.js"
import User from "./User.js"
import Unbox from "./Unbox.js"

const Routes = () => [
  <Route
    exact path = { "/" }
    component = { Home }
  />,
  <Route
    path = { "/user" }
    component = { User }
  />,
  <Route
    path = { "/unbox" }
    component = { Unbox }
  />
]

export default Routes

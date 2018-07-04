import React from "react"
import { Route } from "react-router-dom"
import Home from "./Home.js"
import User from "./User.js"
import Unbox from "./Unbox.js"
import Market from "./Market.js"
import Fight from "./Fight.js"

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
    path = { "/unbox" }market
    component = { Unbox }
  />,
  <Route
    path = { "/market" }
    component = { Market }
  />,
  <Route
    path = { "/fight" }
    component = { Fight }
  />
]

export default Routes

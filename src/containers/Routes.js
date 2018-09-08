import React from "react"
import { Route } from "react-router-dom"
import Home from "./Home.js"
import User from "./User.js"
import Unbox from "./Unbox.js"
import Market from "./Market.js"
import Fight from "./Fight.js"
import Monsters from "./Monsters.js"
import MonsterPage from "./MonsterPage.js"
import TheGame from "./TheGame.js"
import AboutUs from "./AboutUs.js"
import Tech from "./Tech.js"

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
  />,
  <Route
    path = { "/market" }
    component = { Market }
  />,
  <Route
    path = { "/fight" }
    component = { Fight }
  />,
  <Route
    path = { "/monsters" }
    component = { Monsters }
  />,
  <Route
    path = { "/monsters/:id" }
    component = { MonsterPage }
  />,
  <Route
    path = { "/the-game" }
    component = { TheGame }
  />,
  <Route
    path = { "/about-us" }
    component = { AboutUs }
  />,
  <Route
    path = { "/tech" }
    component = { Tech }
  />
]

export default Routes

import React from "react"
import ReactDOM from "react-dom"
import Root from "./containers/Root.js"
import "./styles/base.css"
import registerServiceWorker from "./registerServiceWorker"

ReactDOM.render(<Root />, document.getElementById("root"))
registerServiceWorker()

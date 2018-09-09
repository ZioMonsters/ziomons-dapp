import React from "react"
import ReactSVG from "react-svg"
import v4 from "uuid"

const MonsterSvg = ({ url }) => {
  const key = v4()
  return <ReactSVG
    src = { url }
    onInjected={ svg => {
      ["ast0", "ast1", "ast2", "bst0", "bst1", "bst2", "cst0", "cst1", "cst2", "dst0", "dst1", "dst2", "est0", "est1", "est2"].forEach(partClass => {
        const elements = svg.getElementsByClassName(partClass)
        if (elements) {
          Array.from(elements).forEach(item => item.setAttribute("class", `${partClass}-${key}`))
        }
      })
      Array.from(svg.getElementsByTagName("style")).forEach(item => {
        item.innerHTML = ["ast0", "ast1", "ast2", "bst0", "bst1", "bst2", "cst0", "cst1", "cst2", "dst0", "dst1", "dst2", "est0", "est1", "est2"].reduce((acc, className) => {
          return acc.replace(new RegExp(className, "g"), `${className}-${key}`)
        }, item.innerHTML)
      })
    }}
  />
}

export default MonsterSvg

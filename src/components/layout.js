import React from "react"
import layoutStyles from "./layout.module.css"
import Navbar from "./navbar/navbar"

export default ({ children }) => (
  <div className={layoutStyles.center}>
    <Navbar/>
    {children}
  </div>
)

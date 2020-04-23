import React from "react"
import Navbar from "./navbar/navbar"

export default ({ children }) => (
  <div style={{ maxWidth: `48rem`, margin: `2rem auto`, padding: `0 1rem` }}>
    <Navbar/>
    {children}
  </div>
)

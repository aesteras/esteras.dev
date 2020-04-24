import React from "react"
import Navbar from "./navbar/navbar"

const FooterP = ({ children }) => {
  return (
    <p style={{ textAlign: `center`, margin: `0`, fontSize: `.8rem` }}>{children}</p>
  )
}

export default ({ children }) => (
  <div style={{ maxWidth: `48rem`, margin: `2rem auto`, padding: `0 1rem` }}>
    <Navbar/>
    {children}
    <div style={{ marginTop: `4rem` }}>
      <FooterP>Andreu Esteras</FooterP>
      <FooterP>2020</FooterP>
    </div>
  </div>
)

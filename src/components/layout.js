import React from "react"
import Navbar from "./navbar/navbar"
import SEO from "./SEO"

const FooterP = ({ children }) => {
  return (
    <p style={{ textAlign: `center`, margin: `0`, fontSize: `.8rem` }}>{children}</p>
  )
}

export default ({ children }) => (
  <div style={{ maxWidth: `48rem`, margin: `1rem auto`, padding: `0 1rem` }}>
    <SEO title={"esteras.dev"} description={"Personal website of Andreu Esteras."}/>
    <Navbar/>
    {children}
    <div style={{ marginTop: `4rem` }}>
      <FooterP>built in 2020 by Andreu Esteras</FooterP>
    </div>
  </div>
)

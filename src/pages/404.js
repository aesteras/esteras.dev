import React from "react"
import Layout from "../components/layout"
import { graphql, Link } from "gatsby"
import Img from "gatsby-image"

export default ({ data }) => {
  return (
    <Layout>
      <Img style={{ maxWidth: `16rem`, margin: `auto` }} fluid={data.robots.childImageSharp.fluid}/>
      <h1 style={{ textAlign: `center`, color: `#c62828` }}>Error 404</h1>
      <h2 style={{ textAlign: `center` }}>This isn't the page you're looking for.</h2>
      <p style={{ textAlign: `center`, marginTop: `2rem` }}>
        <Link to={"/"}>This isn't the page I'm looking for</Link>
      </p>
    </Layout>
  )
}

export const query = graphql`
  query {
    robots: file(relativePath: { eq: "photo-robots.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2000, quality: 100) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
  }
`
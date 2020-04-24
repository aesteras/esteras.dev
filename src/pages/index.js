import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import Img from "gatsby-image"

export default ({ data }) => (
  <Layout>
    <Img style={{ zIndex: -1, maxHeight: `16rem` }} fluid={data.vegas.childImageSharp.fluid}/>
    <h1 style={{ textAlign: `center` }}>Hello There!</h1>
    <p>Welcome to my personal website!</p>
    <p>This is the place where I try and play with all the crazy stuff that I come up with.</p>
    <h3>Previous state</h3>
    <p>The previous version of this website consisted of a "framework-less" custom implementation of a responsive
      single-page application that used the Fetch API to get content and the History API for navigation.</p>
    <p>I followed that approach to understand better how it all worked, but it was a hell to maintain and I don't
      recommend it at all.</p>
    <h3>Current state</h3>
    <p>Right now, this website is a mostly direct port of the old one, but generated with Gatsby, which uses React.</p>
    <p>After trying it out, I highly recommend it to anyone interested in building a simple personal website, although
      any static site generator should work just fine depending on your preferences.</p>
    <h3>Next state</h3>
    <p>For now, I just wanted to replace the old site with this new one.</p>
    <p>However, as it is now easier to develop new features, I have a couple of ideas that I might try in the
      future.</p>
  </Layout>
)

export const query = graphql`
  query {
    vegas: file(relativePath: { eq: "photo-vegas.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2000, quality: 100) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
  }
`

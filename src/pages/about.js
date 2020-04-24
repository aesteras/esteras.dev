import React from "react"
import Layout from "../components/layout"
import Img from "gatsby-image"
import { graphql } from "gatsby"
import styled from "styled-components"

const ContactList = styled.div`
  margin-bottom: 2rem;
  width: 100%;
  display: flex;
  flex-flow: column nowrap;
  
  @media (min-width: 50em) {
    flex-flow: row nowrap;
  }
`

const ContactItem = styled.div`
  width: 100%;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
  
  @media (min-width: 50em) {
    width: 50%;
  }
`

export default ({ data }) => (
  <Layout>
    <Img style={{ zIndex: -2, maxHeight: `16rem` }} fluid={data.barcelona.childImageSharp.fluid}/>
    <Img style={{
      zIndex: 1,
      height: `10rem`,
      width: `10rem`,
      top: `-5rem`,
      margin: `auto`,
      borderRadius: `5rem`
    }} fluid={data.profile.childImageSharp.fluid}/>
    <h1 style={{ textAlign: `center`, marginTop: `-2rem` }}>Andreu Esteras</h1>
    <p style={{ textAlign: `center` }}>That's me!</p>
    <h3>Occupation</h3>
    <p>I'm a Software Engineer based in Barcelona, Catalonia.</p>
    <h3>Education</h3>
    <p>I'm studying Computer Science and specializing in Software Research and Development at the Barcelona School of
      Informatics, Polytechnic University of Catalonia.</p>
    <h3>Interests</h3>
    <p>I love everything related to software and I enjoy every chance I have to work with artificial intelligence,
      cybersecurity, mobile and web app development.</p>
    <h3>Contact</h3>
    <p>Here you will find a small list of my online profiles:</p>
    <div style={{ maxWidth: `32rem`, margin: `auto` }}>
      <ContactList>
        <ContactItem>
          <Img style={{ width: `2rem`, margin: `1rem` }} fluid={data.linkedin.childImageSharp.fluid}/>
          <div style={{ margin: `1rem` }}>
            <a href="https://linkedin.com/in/aesteras">aesteras</a>
          </div>
        </ContactItem>
        <ContactItem>
          <Img style={{ width: `2rem`, margin: `1rem` }} fluid={data.github.childImageSharp.fluid}/>
          <div style={{ margin: `1rem` }}>
            <a href="https://github.com/aesteras">aesteras</a>
          </div>
        </ContactItem>
      </ContactList>
    </div>
    <p style={{ textAlign: `center` }}>You can also email me at: <a
      href="mailto:andreu@esteras.dev">andreu@esteras.dev</a></p>
  </Layout>
)


export const query = graphql`
  query {
    barcelona: file(relativePath: { eq: "photo-barcelona.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2000, quality: 100) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    },
    profile: file(relativePath: { eq: "profile.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000, quality: 100) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    },
    linkedin: file(relativePath: { eq: "logo-linkedin.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 300, quality: 100) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    },
    github: file(relativePath: { eq: "logo-github.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 300, quality: 100) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
  }
`
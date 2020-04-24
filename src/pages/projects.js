import React from "react"
import Layout from "../components/layout"
import Img from "gatsby-image"
import { graphql, Link } from "gatsby"
import styled from "styled-components"

const FeatureList = styled.div`
  width: 100%;
  display: flex;
  flex-flow: column nowrap;
`

const Feature = styled.div`
  margin-top: 2rem;
  display: flex;
  justify-content: space-between;
  align-content: center;
  align-items: center;
  flex-flow: column wrap;
  
  @media (min-width: 50em) {
    flex-flow: row nowrap;
  }
`

const FeatureImg = styled.div`
  display: inline-block;
  width: 60%;
  order: 1;
  
  @media (min-width: 50em) {
    width: 30%;
    order: ${props => (props.reverse ? 2 : 1)};
  }
`

const FeatureTxt = styled.div`
  display: inline-block;
  width: 100%;
  order: 2;
  text-align: center;
  
  @media (min-width: 50em) {
    width: 60%;
    order: ${props => (props.reverse ? 1 : 2)};
    text-align: ${props => (props.reverse ? "right" : "left")};;
  }
`

const FeatureItem = props => {
  return props.reverse ? (
    <Feature reverse>
      <FeatureImg reverse>
        <Img style={{ width: `100%` }} fluid={props.img}/>
      </FeatureImg>
      <FeatureTxt reverse>
        <h5>{props.hdr}</h5>
        <p>{props.txt}</p>
      </FeatureTxt>
    </Feature>
  ) : (
    <Feature>
      <FeatureImg>
        <Img style={{ width: `100%` }} fluid={props.img}/>
      </FeatureImg>
      <FeatureTxt>
        <h5>{props.hdr}</h5>
        <p>{props.txt}</p>
      </FeatureTxt>
    </Feature>
  )
}

export default ({ data }) => (
  <Layout>
    <h1 style={{ textAlign: `center` }}>Projects</h1>
    <p>These are some of the projects I have worked on, and the technologies I have used:</p>
    <div style={{ maxWidth: `32rem`, margin: `auto` }}>
      <FeatureList>
        <Feature>
          <FeatureImg>
            <Img style={{ width: `100%` }} fluid={data.lock.childImageSharp.fluid}/>
          </FeatureImg>
          <FeatureTxt>
            <h5>Web Cryptography API</h5>
            <p>Client-side in-browser cryptography project. <Link to="/crypto/">You can try it here</Link>.</p>
          </FeatureTxt>
        </Feature>
        <FeatureItem
          reverse={true}
          img={data.world.childImageSharp.fluid}
          hdr={"Web Apps"}
          txt={"Dynamic web app development with JAM-Stack and MEAN-Stack."}
        />
        <FeatureItem
          reverse={false}
          img={data.laptop.childImageSharp.fluid}
          hdr={"Languages"}
          txt={"Major projects with JavaScript, Python and Java. Experience with C/C++, R and MatLab, among others."}
        />
        <FeatureItem
          reverse={true}
          img={data.brush.childImageSharp.fluid}
          hdr={"Graphic Design"}
          txt={"Skilled with Adobe Photoshop and Adobe Illustrator Creative Cloud."}
        />
      </FeatureList>
    </div>
  </Layout>
)


export const query = graphql`
  query {
    brush: file(relativePath: { eq: "brush.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 300, quality: 100) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    },
    laptop: file(relativePath: { eq: "laptop.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 300, quality: 100) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    },
    lock: file(relativePath: { eq: "lock.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 300, quality: 100) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    },
    world: file(relativePath: { eq: "world.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 300, quality: 100) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
  }
`
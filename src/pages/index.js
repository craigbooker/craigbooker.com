import React from "react"

import Layout from "../components/Layout"
import Banner from "../components/Banner"
import About from "../components/Home/About"
import StyledHero from "../components/StyledHero"
import SEO from "../components/SEO"

export default ({ data }) => (
  <Layout>
    <SEO title="Home" description="this is description" />
    <StyledHero home="true">
      <Banner
        title="continue exploring"
        info="Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, rem."
      />
    </StyledHero>
    <About />
  </Layout>
)

export const query = graphql`
  query {
    defaultBcg: file(relativePath: { eq: "defaultBcg.jpeg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 4160) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`

import React from "react"
import Title from "../Title"
import styles from "../../css/about.module.css"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const getAboutImage = graphql`
  query aboutDetailsImage {
    aboutDetailsImage: file(relativePath: { eq: "defaultBcg.jpeg" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`

const AboutDetails = () => {
  const { aboutDetailsImage } = useStaticQuery(getAboutImage)
  return (
    <section className={styles.about}>
      <Title title="about" subtitle="me" />
      <div className={styles.aboutCenter}>
        <article className={styles.aboutImg}>
          <div className={styles.imgContainer}>
            {/* <img src={img} alt="about company" /> */}
            <Img
              fluid={aboutDetailsImage.childImageSharp.fluid}
              alt="awesome landscape"
            />
          </div>
        </article>
        <article className={styles.aboutInfo}>
          <h4>My name is Craig Booker</h4>
          <p>
            I'm a Writer and Software Developer from Oklahoma City, Oklahoma. I started tinkering with electronics when I was young. I first learned about repairing Apple(iOS) devices when I worked for Apple retail. It was at Apple retail I received my certification to work on what Apple calls small device repair. At that time this included iPhones, iPads, and iPods.
          </p>
          <p>I also learned Apple’s methods in training individuals to get the most out of their products. I aim to take what I learned at Apple and combine the best customer service, my love for great apps and my dedication to my customers to provide the best products. It is at the intersection of these three areas where I shine the best.</p>

        </article>
      </div>
    </section>
  )
}

export default AboutDetails

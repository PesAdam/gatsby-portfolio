import * as React from "react"
import Layout from "../components/Layout"
import * as HomepageStyles from "../styles/home.module.scss"
import { graphql } from "gatsby"
import Img from "gatsby-image"

const IndexPage = ({data}) => {

  console.log(data);
  return (
    <Layout>
      <article className="content container">
		    <Img fluid={data.file.childImageSharp.fluid} className={HomepageStyles.banner}/>
	    </article>
    </Layout>
  )
}

export const query = graphql`
  query Banner {
    file(relativePath: {eq: "portal.jpg"}) {
      childImageSharp {
        fluid(sizes: "100") {
          ...GatsbyImageSharpFluid
        }

      }
    }
  }
`

export default IndexPage
export const Head = () => <title>belo</title>

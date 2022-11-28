import * as React from "react"
import Layout from "../components/Layout"
import * as HomepageStyles from "../styles/home.module.scss"
import { graphql } from "gatsby"

const IndexPage = ({data}) => {

  const {title } = data.site.siteMetadata;

  return (
    <Layout>
      <article className="content container">
		    <img src="portal.jpg" className={HomepageStyles.banner}/>
	    </article>
    </Layout>
  )
}

export const query = graphql`
  query SiteInfo {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`

export default IndexPage
export const Head = () => <title>belo</title>

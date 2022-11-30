import { graphql } from "gatsby";
import React from "react";
import Layout from "../components/Layout";
import Img from "gatsby-image"
import * as styles from "../styles/project-details.module.scss";


export default function ProjectDetails({data}){
    const {html} = data.markdownRemark
    const {title, stack, featured} = data.markdownRemark.frontmatter

    return (
        <Layout>
            <div className={styles.article}>
                <h1>{title}</h1>
                <h3>{stack}</h3>
                <Img fluid={featured.childImageSharp.fluid} className={styles.image_wrapper}/>
                <div dangerouslySetInnerHTML={{__html: html}}/>
            </div>
        </Layout>
    )
}

export const query = graphql `
query ProjectDetails($slug: String) {
    markdownRemark(frontmatter: {slug: {eq: $slug}}) {
      html
      frontmatter {
        stack
        title
        featured {
          childImageSharp {
            fluid {
                ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
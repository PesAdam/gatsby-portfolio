import { graphql, Link } from 'gatsby'
import React from 'react'
import Layout from '../../components/Layout'
import * as style from "../../styles/projects.module.scss"
import Img from "gatsby-image"

export default function index({data}) {
  
  console.log(data);
  const projects = data.projects.nodes;
  const contact = data.contact.siteMetadata.contact;

  return (

    <Layout>
      <div className='site-header'>
        <h1>Projects</h1>
        <div className={style.projects}>
          {projects.map(project =>(
            <Link to={'/projects/' + project.frontmatter.slug} key={project.id}>
              <div className={style.project}>
                <Img fluid={project.frontmatter.thumb.childImageSharp.fluid} className={style.img}/>
                <h3>{project.frontmatter.title}</h3>
                <p>{ project.frontmatter.stack }</p>
              </div>
            </Link>
          ))}
        </div>
        <p>like what you see? email me <strong>{contact}</strong></p>
      </div>
    </Layout>
  )
}

//export page query
export const query = graphql`
query ProjectsPage {
  projects: allMarkdownRemark {
    nodes {
      id
      frontmatter {
        slug
        title
        stack
        thumb {
          childImageSharp {
            fluid(sizes: "100"){
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
  contact: site {
    siteMetadata {
      contact
    }
  }
}
`
import { graphql } from 'gatsby'
import React from 'react'
import "../styles/footer.scss"
import { StaticImage } from "gatsby-plugin-image"

export default function Footer( {data} ) {
  console.log(data);
  return (
    <div>
      <aside className="pre-footer">
    <div className="container">
        <h3> Sleduj ma </h3>
        <ul className="footer">
            {/* <li><a href=""><StaticImage fluid={data.file.childImageSharp.fluid} /></a> </li> */}
            <li><a href=""><img src={'../gitlab.png'} /> </a> </li>
            <li><a href=""><img src={'../linkedin.png'} /> </a>  </li>
        </ul>
    </div>
</aside>

<footer className="site-footer">
    <div className="container">
        <p className="small">
            &copy; belo
          </p>
        </div>
      </footer>
    </div>
  )
}

export const query = graphql `query Icons {
  file(relativePath: {eq: "gitlab.png"}) {
    id
    childImageSharp {
      fluid {
        src
        srcSet
        sizes
      }
    }
  }
}`
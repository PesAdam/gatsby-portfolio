import React from 'react'
import {Link,} from "gatsby"
import  '../styles/navbar.scss'

export default function Navbar() {
  // const data = useStaticQuery(graphql`
  //   query SiteInfo {
  //     site {
  //       siteMetadata {
  //         title
  //       }
  //     }
  //   }
  // `)

  // const {title} = data.site.siteMetadata 

  return (
    <div>
    
      <header className="site-header">
          <h1>belo</h1>
		    <nav className="container">
			    <ul className="menu">
            <li><Link to='/'>Home</Link> <br/></li>            
            <li><Link to='/about'>About</Link> <br/></li>            
            <li><Link to='/projects'>Projects</Link></li>           
          </ul>
        </nav>
      </header>

    </div>
  )
}


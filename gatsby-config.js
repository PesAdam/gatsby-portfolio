/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  
  siteMetadata: {
    title: `belo`,
    siteUrl: `https://www.yourdomain.tld`,
    description: 'web dev portfolio',
    copyright: 'copyright 2022',
    contact: 'abelko@obs.sk',
  },

  plugins: ["gatsby-plugin-sass", 
            "gatsby-plugin-image",
            "gatsby-plugin-sharp", 
            "gatsby-transformer-sharp", 
            "gatsby-transformer-remark",
      {
        resolve: `gatsby-source-filesystem`,
        options: {
          name: `projects`,
          path: `${__dirname}/src/projects/`,
        },
      },
      {
        resolve: `gatsby-source-filesystem`,
        options: {
          name: `images`,
          path: `${__dirname}/src/images/`,
        },
      }
  ]
};
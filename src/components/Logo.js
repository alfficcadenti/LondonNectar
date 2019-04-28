import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Logo = () => (
  <StaticQuery
    query={graphql`
        query {
            fileName: file(relativePath: {eq: "honey.png"}) {
              childImageSharp {
                fixed (width:50, height:50) {
                  base64
                  tracedSVG
                  aspectRatio
                  width
                  height
                  src
                  srcSet
                  srcWebp
                  srcSetWebp
                  originalName
                }
              }
            }
          }
    `}
    render={data => (
      <React.Fragment>
        <Img fixed={data.fileName.childImageSharp.fixed} />
      </React.Fragment>
    )}
  />
)

export default Logo

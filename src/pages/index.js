import React from "react"
import Helmet from "react-helmet"
import { StaticQuery, graphql } from "gatsby"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import "./index2.css"

// import "./index.css"

import Pedro from "@images/pedro-images/pedro-hero.png"
import Logo from "../images/pedro-images/Pedro-Logo.png"

const IndexPage = ({ data }) => {
  const title = "Home"

  return (
  <StaticQuery
    query={graphql`
          query IndexSiteQuery {
            site {
              siteMetadata {
                title
                sidebar {
                  pages {
                    slug
                    title
                    pages {
                      slug
                      title
                    }
                  }
                }
              }
            }
          }
        `}
    render={data => (
  <div class="mainbody" >
    {/* <Helmet
      title={
        title
          ? `${title} - ${data.site.siteMetadata.title}`
          : data.site.siteMetadata.title
      }
      meta={[
        {
          name: "description",
          content: "Pedro LaTorre",
        },
        {
          name: "keywords",
          content: "BRV WRK, REST | LA, Speaker, Author",
        },
      ]}
    >
      <html lang="en" />
    </Helmet> */}
    

      {/* Computer size */}
        <div id="leftbox" >
          <div id="logo" style={{marginLeft: 20}}>
            <a href="/" >
              <img class="ui small image"  src={Logo}/>
            </a>
          </div>
          < div id="imageContainer">
            <img id="pedro" class="ui centered fluid image"  src={Pedro} />
          </div>
        </div>
        <div id="rightbox">
          
          <div id="menu"  >
            <AniLink cover to="/about" bg="#FBBD08">
              <h2 class="ui header">ABOUT</h2>
            </AniLink>
            <br/>
            <a class="ui header" href="https://www.bravewrk.com/"><h2>BRAVE WRK</h2></a>
            <br/>
            <a class="ui header" href="https://www.amazon.com/Middle-Seat-Craving-Platforms-Loving/dp/1483572986"><h2>THE MIDDLE SEAT BOOK</h2></a>
            <br/>
            <a class="ui header" href="https://restla.org/"><h2>REST | LA CHURCH</h2></a>
            <br/>
            <AniLink cover to="/contact" bg="#FBBD08">
              <h2 class="ui header">CONTACT</h2>
            </AniLink>                
          </div>
          
        </div>

  </div>
    )} 
  />
)
}

export default IndexPage

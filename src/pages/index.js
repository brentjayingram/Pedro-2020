import React from "react"
import Helmet from "react-helmet"
import { StaticQuery, graphql } from "gatsby"

import "./index.css"

import Pedro from "@images/pedro-images/pedro-hero.png"

const IndexPage = ({ data }) => {
  const title = "Pedro LaTorre"

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
  <div id="example" class="index">
    <Helmet
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
    </Helmet>
    <div class="ui two column stackable grid " style={{height: '100vh', width: '100vw'}}>
            <div class="ui raised yellow row">
                {/* <div class="nine wide right floated column">
                <img class="ui centered medium image" src={Pedro} />
                
                </div>
             */}
             <div class="nine wide column">
             <img class="ui centered image"  src={Pedro} style={{height: '100vh'}}/>
             </div>
             
             
              <div class="seven wide column" style={{backgroundColor: "white", height: '100vh'}}>
                <div >
                
                    <div class="container" style={{display: "flex", justifyContent: "center", flexDirection: "column"}} >
                      <a class="ui header" href="/about"><h2>ABOUT</h2></a>
                      <br/>
                      <a class="ui header" href="https://open.spotify.com/show/58aiwkfmjJD6VvRDzCy2fN?si=AzFkVju9Svi35-Gy5Ysj1w"><h2>BRAVE WRK PODCAST</h2></a>
                      <br/>
                      <a class="ui header" href="https://www.amazon.com/Middle-Seat-Craving-Platforms-Loving/dp/1483572986"><h2>THE MIDDLE SEAT BOOK</h2></a>
                      <br/>
                      <a class="ui header" href="https://restla.org/"><h2>REST | LA CHURCH</h2></a>
                      <br/>
                      <a class="ui header" href="/contact"><h2>CONTACT</h2></a>
                    </div>
                  </div>
              </div>
            </div>
      </div>


  </div>
    )} 
  />
)
}

export default IndexPage

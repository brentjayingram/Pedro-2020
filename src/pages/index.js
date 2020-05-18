import React from "react"
import Helmet from "react-helmet"
import { StaticQuery, graphql } from "gatsby"
import AniLink from "gatsby-plugin-transition-link/AniLink"

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
    {/* Mobile only */}
    <div class="mobile only ui two column stackable grid " >
            <div class="ui row" style={{height: '100vh', width: '100vw'}}>
                {/* <div class="nine wide right floated column">
                <img class="ui centered medium image" src={Pedro} />
                
                </div>
             */}
             <div class="nine wide yellow column" style={{height: '100vvh', marginTop: "-2rem"}}>
             <div style={{marginLeft: 20}}>
              <a href="/" >
                <img class="ui small image"  src={Logo}/>
              </a>
             </div>
             
             <img class="ui centered bordered raised image"  src={Pedro} style={{ width: '100vw'}}/>
             </div>
             
             

              <div class="mobile only column" style={{display: "flex", justifyContent: "start", flexDirection: "column", height: '50vh', backgroundColor: "white"}}>
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
      {/* Computer size */}
      <div class="computer only ui two column grid" style={{height: '100vh'}} >
            <div class="ui row" style={{height: '100vh', width: '100vw'}}>
               
             <div class="nine wide yellow column" style={{height: '100vvh', marginTop: "-2rem"}}>
             <div style={{marginLeft: 20}}>
              <a href="/" >
                <img class="ui small image"  src={Logo}/>
              </a>
             </div>
             
             <img class="ui centered bordered raised image"  src={Pedro} style={{ height: '100vh'}}/>
             </div>
             
             
              <div class="computer only seven wide column" style={{backgroundColor: "white"}}>
                <div >
                
                    <div class=" container" style={{display: "flex", justifyContent: "center", flexDirection: "column", height: '100vh' }} >
                      <AniLink cover to="/about" bg="#FBBD08">
                        <h2 class="ui header">ABOUT</h2>
                      </AniLink>
                      <br/>
                      <a class="ui header" href="https://open.spotify.com/show/58aiwkfmjJD6VvRDzCy2fN?si=AzFkVju9Svi35-Gy5Ysj1w"><h2>BRAVE WRK PODCAST</h2></a>
                      <br/>
                      <a class="ui header" href="https://www.amazon.com/Middle-Seat-Craving-Platforms-Loving/dp/1483572986"><h2>THE MIDDLE SEAT BOOK</h2></a>
                      <br/>
                      <a class="ui header" href="https://restla.org/"><h2>REST | LA CHURCH</h2></a>
                      <br/>
                      <br/>
                      <AniLink cover to="/contact" bg="#FBBD08">
                        <h2 class="ui header">CONTACT</h2>
                      </AniLink>                
                      </div>
                  </div>
              </div>
            </div>
      </div>
      {/* tablet size */}
      <div class="tablet only ui two column stackable grid " >
            <div class="ui row" style={{height: '100vh', width: '100vw'}}>
               
             <div class=" yellow column" style={{height: '100vvh', marginTop: "-2rem"}}>
             <div style={{marginLeft: 20}}>
              <a href="/" >
                <img class="ui small image"  src={Logo}/>
              </a>
             </div>
             
             <img class="ui centered bordered raised image"  src={Pedro} style={{ width: '100vw'}}/>
             </div>
             
             
              <div class=" tablet only seven wide column" style={{backgroundColor: "white"}}>
                <div >
                
                    <div class=" container" style={{display: "flex", justifyContent: "center", flexDirection: "column", height: '100vh' }} >
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

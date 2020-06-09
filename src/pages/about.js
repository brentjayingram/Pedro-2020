import React from "react"
import Logo from "../images/pedro-images/Pedro-Logo.png"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import "./about.css"
import PedroFamily from "../images/pedro-images/pedro-family.jpg"



import SEO from "@components/seo"

const About= () => (
    <div id="mainbody">
        <div style={{marginLeft: 20}}>
            <AniLink cover to="/" direction="right" bg="#FBBD08">
                <img class="ui small image"  src={Logo}/>
            </AniLink>
        </div>

        <SEO title="About Pedro" />
            <div class="ui one column stackable center aligned page grid" >
                <div class="column twelve wide">
                    <div class="ui raised segment">
                        <h1>ABOUT PEDRO</h1>
                        <img id="pedroFamily" class="ui centered fluid image"  src={PedroFamily} />
                        <br/>
                        <br/>
                        <p style={{textAlign: "left"}}>Pedro and his bride, Jessica, have one son, named Justice. They live together in Los Angeles, California and wholeheartedly believe in the missional purpose and unification of the church — and with this desire, they’re excited to continue consulting for various creatives and organizations.
                            
                            <br/>
                            <br/>
                            </p>
                    </div>
                </div>
            </div>
    </div>

)

export default About
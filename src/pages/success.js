import React from "react"
import Logo from "../images/pedro-images/Pedro-Logo.png"
import SEO from "@components/seo"
import AniLink from "gatsby-plugin-transition-link/AniLink"

const Success= () => (
    <div  style={{  backgroundColor: "#FBBD08", height: "100vh",  verticalAlign: "middle" }}>
        <div style={{marginLeft: 20}}>
            <AniLink cover to="/" direction="right" bg="#FBBD08">
                <img class="ui small image"  src={Logo}/>
            </AniLink>
        </div>
        
        <SEO title="Success" />
            <div class="ui one column stackable center aligned page grid" >
                <div class="column twelve wide">
                    <div class="ui raised segment">
                        <h1>SUCCESS!</h1>
                        <AniLink cover to="/" direction="right" bg="#FBBD08">
                            <h3 style={{color: "black"}}>CLICK HERE TO GO HOME</h3>
                        </AniLink>
                    </div>
                </div>
            </div>
    </div>

)

export default Success
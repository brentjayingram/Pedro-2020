import React from "react"
import Logo from "../images/pedro-images/Pedro-Logo.png"
import SEO from "@components/seo"
import TransitionLink from "gatsby-plugin-transition-link"

const Success= () => (
    <div  style={{  backgroundColor: "#FBBD08", height: "100vh",  verticalAlign: "middle" }}>
        <div style={{marginLeft: 20}}>
            <a href="/" >
                <img class="ui small image"  src={Logo}/>
            </a>
        </div>
        
        <SEO title="Success" />
            <div class="ui one column stackable center aligned page grid" >
                <div class="column twelve wide">
                    <div class="ui raised segment">
                        <h1>ABOUT PEDRO</h1>
                        <p style={{textAlign: "left"}}>Success!
                            </p>
                    </div>
                </div>
            </div>
    </div>

)

export default Success
import React from "react"
import Logo from "../images/pedro-images/Pedro-Logo.png"
import AniLink from "gatsby-plugin-transition-link/AniLink"


import SEO from "@components/seo"

const Contact= () => (
    <div  style={{  backgroundColor: "#FBBD08", height: "100vh",  verticalAlign: "middle" }}>
        <div style={{marginLeft: 20}}>
            <AniLink cover to="/" direction="right" bg="#FBBD08">
                <img class="ui small image"  src={Logo}/>
            </AniLink>
        </div>
        
        <SEO title="Contact" />
            <div class="ui one column stackable center aligned page grid" >
                <div class="column ten wide">
                    <div class="ui raised segment">
                        <h1>CONTACT</h1>
                        <form name= "contact" method="POST" action="/success"  data-netlify="true" class="ui form" style={{textAlign: "left"}}>
                            <div class="field">
                                <label>First Name</label>
                                <input type="text" name="first-name" placeholder="First Name"/>
                            </div>
                            <div class="field">
                                <label>Last Name</label>
                                <input type="text" name="last-name" placeholder="Last Name"/>
                            </div>
                            <div class="field">
                                <label>Message</label>
                                <textarea name="message" placeholder="Type Message Here"></textarea>
                            </div>
                            <button class="ui button primary" type="submit">Send Message</button>
                    </form>
                    </div>
                </div>
            </div>    
    </div>

)

export default Contact

    // <div class="ui two column stackable grid">
    //     <div class="ui row">
    //         <div id="left" class="six wide column " style={{backgroundColor: "#FBBD08",  height: "100vh"}}>
    //             <div style={{marginLeft: 20}}>
    //                 <a href="/" >
    //                     <img class="ui small image"  src={Logo}/>
    //                 </a>
    //             </div>
    //             <div class="ui raised segment">
    //                     <h1>Contact</h1>
    //                     <form class="ui form" style={{textAlign: "left"}}>
    //                         <div class="field">
    //                             <label>First Name</label>
    //                             <input type="text" name="first-name" placeholder="First Name"/>
    //                         </div>
    //                         <div class="field">
    //                             <label>Last Name</label>
    //                             <input type="text" name="last-name" placeholder="Last Name"/>
    //                         </div>
    //                         <div class="field">
    //                             <div class="ui checkbox">
    //                                 <input type="checkbox" tabindex="0" class="hidden"/>
    //                                 <label>I agree to the Terms and Conditions</label>
    //                              </div>
    //                         </div>
    //                         <button class="ui button" type="submit">Submit</button>
    //                 </form>
    //                 </div>
    //         </div>
    //         <div class="ten wide column" id="right" >
    //             <img class ="ui fluid image" src={Laptop} style={{height: "100vh"}}/>
    //         </div>
    //     </div>
    // </div>
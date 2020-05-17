import React from "react"
import Logo from "../images/pedro-images/Pedro-Logo.png"
import AniLink from "gatsby-plugin-transition-link/AniLink"


import SEO from "@components/seo"

const About= () => (
    <div  style={{  backgroundColor: "#FBBD08", height: "100vh",  verticalAlign: "middle" }}>
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
                        <p style={{textAlign: "left"}}>Art party hot chicken etsy fam trust fund tilde echo park marfa fixie. Venmo green juice art party copper mug next level af flexitarian DIY literally. Tattooed subway tile affogato, venmo selvage literally live-edge roof party street art VHS seitan offal. VHS art party YOLO craft beer kinfolk ugh +1 occupy tattooed irony yuccie. 
                            <br/><br/> Woke Woke before they sold out neutra, chia selvage gluten-free chillwave shabby chic trust fund paleo vape put a bird on it glossier. Keffiyeh sartorial bushwick hammock live-edge thundercats jean shorts selvage vegan. Brunch ramps iPhone adaptogen slow-carb irony disrupt master cleanse poke tilde neutra vinyl chicharrones listicle.
                            Subway tile biodiesel cloud bread, echo park chambray truffaut gastropub. Gastropub narwhal XOXO migas poke austin. Cold-pressed gastropub shaman church-key, readymade schlitz paleo. Taiyaki brunch mustache lomo echo park snackwave woke gluten-free skateboard 90's.
                            <br/><br/> Yr distillery kogi echo park, XOXO YOLO polaroid put a bird on it schlitz hashtag pour-over freegan raw denim next level. Tilde deep v leggings hell of direct trade, activated charcoal photo booth meditation chillwave copper mug paleo bushwick.
                            Sartorial tumblr tousled dreamcatcher echo park mixtape. 
                            <br/>
                            <br/>
                            </p>
                    </div>
                </div>
            </div>
    </div>

)

export default About
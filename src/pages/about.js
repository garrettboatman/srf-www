import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Undone from "../images/Undone.jpg"
import IMDB from "../images/imdb.jpg"
import Elma from "../images/elma.jpg"

const AboutPage = ({path}) => (
  <Layout path={path}>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link href="https://fonts.googleapis.com/css2?family=Nunito+Sans:ital,wght@0,300;0,400;0,800;0,900;1,400&display=swap" rel="stylesheet"></link>
    <Seo title="Home" />
    <div style={{maxWidth: 480, margin: `0 auto`}}>
    <div style={{padding: `0 20px`}}>
      <img src={Elma} />
      <p style={{}}>At Seek Refuge Productions, we have a penchant for bringing authentic and relative stories to cinematic life. <br /><br /> Through independent and organic collaborations, we work with artists who think and create outside of the Hollywood box.</p>
      <br />
      <a style={{margin: 0}} href="mailto:elma@seekrefugeproductions.com" className="button light">Get in Touch</a>
    </div>
    </div>
  </Layout>
)

export default AboutPage

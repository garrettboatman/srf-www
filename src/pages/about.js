import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Elma from "../images/elma.jpg"

const AboutPage = ({path}) => (
  <Layout path={path}>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link href="https://fonts.googleapis.com/css2?family=Nunito+Sans:ital,wght@0,300;0,400;0,800;0,900;1,400&display=swap" rel="stylesheet"></link>
    <Seo title="Home" />
    <div style={{maxWidth: 480, margin: `0 auto`}}>
    <div style={{padding: `0 20px`}}>
      <div className="about-elma"><img src={Elma} /></div>
      <p style={{marginTop: 5, fontSize: 14}}>Artist: <a href="https://www.meganschreiberdesigns.com">Megan Schreiber Designs</a></p>
      <p>The amalgamation of my personal world and movies came around age 8, when I watched <i>Bridges of Madison County</i> for the first time. I was a refugee in east Berlin, calling a repurposed dorm room my temporary home, and Meryl and Clint were dubbed in German. At such a turbulent time, one encompassed in grief and a whole lot of trauma bonding with my family, movies offered the ultimate escape - and in later years, inspiration to pursue a career in the industry. </p>
      <p>I started acting as soon as my family found fair footing in a new country and I finessed the English language. My first credits are in horror, a genre I uncovered as a teenager, while working at a movie theatre in northeast Edmonton. I saw <i>The Omen</i> on my 16th birthday, which fell on 6/6/6, and a natural progression toward genre films ensued.</p>
      <p>In 2017, I moved from Toronto to LA, where I've been living that 'alien of extraordinary ability' life [iykyk]. I pivoted toward writing and producing my own work as a way to weave themes of migration and identity, religious exploration, and the womxn immigrant experience into the industry's tapestry. I started SRP to become a better storyteller and grow my creative community. Building a story from inception to screening is an unmatched experience, like syzygy in space. I am reminded of that well misquoted line from <i>Field of Dreams</i> (another movie I first saw dubbed in Deutsch), 'if you build it, they will come'. This site hosts work I have written and produced - independently, with collaborators, and via grants.</p>
      <p><strong>[tl;dr]</strong> I love movies, love making them too. Reach out if you're into that as well.</p>
      <br />
      <a style={{margin: 0}} href="mailto:hello@seekrefugeproductions.com" className="button light">Get in Touch</a>
    </div>
    </div>
  </Layout>
)

export default AboutPage

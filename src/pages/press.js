import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

const PressPage = ({path}) => (
  <Layout path={path}>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link href="https://fonts.googleapis.com/css2?family=Nunito+Sans:ital,wght@0,300;0,400;0,800;0,900;1,400&display=swap" rel="stylesheet"></link>
    <Seo title="Press | Seek Refuge Productions" />
    <div style={{paddingTop: 20, maxWidth: 600, margin: '0 auto'}}>
      <h1>Press</h1>
      <p>Articles and interviews featuring Elma Begovic.</p>
      <ul className="resources-list">
        <li><a target={'_blank'} href="https://hnmag.ca/interview/talent-on-tap-elma-begovic-presents-the-day-we-left-at-vsff/">Elma Begovic Presents The Day We Left at VSFF | Talent on Tap</a></li>
        <li><a target={'_blank'} href="https://www.createastir.ca/articles/the-day-we-left-vsff">Refugee experience drives Bosnian drama "The Day We Left" at the Vancouver Short Film Festival</a></li>
        <li><a target={'_blank'} href="https://vimeo.com/666921597">The Day We Left - Global BC Interview with star Elma Begovic</a></li>
        <li><a target={'_blank'} href="https://filmcraziest.wordpress.com/2022/02/01/interview-actress-elma-begovic-on-her-short-film-the-day-we-left-horror-film-bite/">Actress Elma Begovic on Her Short Film “The Day We Left,” Horror Film “Bite”</a></li>
        <li><a target={'_blank'} href="https://radiopublic.com/amigospc-GEvvdv/s1!a72e7">AmigosPodcast | Elma Begovic | The Day We Left</a></li>
        <li><a target={'_blank'} href="https://vimeo.com/540913135">Morning For All | Jutro Za Sve Sarajevo - Elma Begovic Interview</a></li>
        <li><a target={'_blank'} href="https://melrosetradingpost.org/cutie-pie-of-the-day-dogsofmtp-8/">Melrose Trading Post | JAN 13 CUTIE PIE OF THE DAY!</a></li>
      </ul>
    </div>
  </Layout>
)

export default PressPage

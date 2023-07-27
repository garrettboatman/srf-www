import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

const ResourcesPage = ({path}) => (
  <Layout path={path}>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link href="https://fonts.googleapis.com/css2?family=Nunito+Sans:ital,wght@0,300;0,400;0,800;0,900;1,400&display=swap" rel="stylesheet"></link>
    <Seo title="Resources | Seek Refuge Productions" />
    <div style={{paddingTop: 20, maxWidth: 600, margin: '0 auto'}}>
      <h1>Press</h1>
      <p>Articles and interviews featuring Elma Begovic.</p>
      <ul className="resources-list">
        <li><a target={'_blank'} href="https://www.youtube.com/watch?v=pGWe7lvUD9o">Interview with Elma Begovic, Short Film "The Day We Left" | The Filmcraziest Show</a></li>
        <li><a target={'_blank'} href="https://horrornews.net/141716/psychological-thriller-tear-us-apart-starring-elma-begovic-bite-makes-world-premiere/">Psychological Thriller Tear Us Apart Starring Elma Begovic (Bite) Makes World Premiere</a></li>
        <li><a target={'_blank'} href="https://gornoblonde.wordpress.com/2015/10/28/exclusive-interview-with-rising-starlet-elma-begovic/">https://gornoblonde.wordpress.com/2015/10/28/exclusive-interview-with-rising-starlet-elma-begovic/</a></li>
        <li><a target={'_blank'} href="https://www.instagram.com/tv/CKMuZH1hpYA/?hl=en">Minute Shorts with Elma Begovic</a></li>
        <li><a target={'_blank'} href="https://hnmag.ca/interview/talent-on-tap-elma-begovic-presents-the-day-we-left-at-vsff/">Talent on Tap – Elma Begovic Presents The Day We Left at VSFF</a></li>
        <li><a target={'_blank'} href="https://filmcraziest.wordpress.com/2022/02/01/interview-actress-elma-begovic-on-her-short-film-the-day-we-left-horror-film-bite/">Actress Elma Begovic on Her Short Film “The Day We Left,” Horror Film “Bite”</a></li>
        <li><a target={'_blank'} href="https://vimeo.com/666921597">The Day We Left - Global BC Interview with star Elma Begovic</a></li>
        <li><a target={'_blank'} href="https://www.createastir.ca/articles/the-day-we-left-vsff">Refugee experience drives Bosnian drama "The Day We Left" at the Vancouver Short Film Festival</a></li>
        <li><a target={'_blank'} href="https://melrosetradingpost.org/cutie-pie-of-the-day-dogsofmtp-8/">13 JAN CUTIE PIE OF THE DAY! #DOGSOFMTP</a></li>
      </ul>
    </div>
  </Layout>
)

export default ResourcesPage

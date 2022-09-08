import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Undone from "../images/Undone.jpg"
import IMDB from "../images/imdb.jpg"
import play from "../images/play.png"

import PAPoster from "../images/PA_poster.jpg"
import PALaurels from "../images/PA_laurels.jpg"

import TDWLPoster from "../images/TDWL_poster.jpg"
import TDWLLaurels from "../images/TDWL_laurels.jpg"

import UndonePoster from "../images/Undone_poster.jpg"
import UndoneLaurels from "../images/Undone_laurels.jpg"

import DoubtPoster from "../images/Doubt_poster.jpg"

const ProjectsPage = ({path}) => (
  <Layout path={path}>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link href="https://fonts.googleapis.com/css2?family=Nunito+Sans:ital,wght@0,300;0,400;0,800;0,900;1,400&display=swap" rel="stylesheet"></link>
    <Seo title="Home" />
    <div style={{paddingTop: 50}}>
    <div className="project">
        <img src={PAPoster} style={{}} />
        <div className="project-laurels">
          <img src={PALaurels} style={{}} />
        </div>
        <p>An aspiring rapper travels through the desert with her DJ and manager after receiving a suspiciously divine request to perform at a secret Coachella afterparty.</p>
        <div className="project-buttons">
          <a className="imdb" href="https://www.imdb.com/title/tt15089230/"><img src={IMDB} /></a>
          <a className="play button light" href="#"><img src={play} /> Play</a>
        </div>
      </div>
      
      <div className="project">
        <img src={TDWLPoster} style={{}} />
        <div className="project-laurels">
          <img src={TDWLLaurels} style={{}} />
        </div>
        <p>The religious conflict of the Bosnian War drives a pregnant mother and her family to flee their village and seek refuge in the land of their enemy.</p>
        <div className="project-buttons">
          <a className="imdb" href="https://www.imdb.com/title/tt15746196/"><img src={IMDB} /></a>
          <a className="play button light" href="#"><img src={play} /> Play</a>
        </div>
      </div>

      <div className="project">
        <img src={UndonePoster} style={{}} />
        <div className="project-laurels">
          <img src={UndoneLaurels} style={{}} />
        </div>
        <p>A raw look at the unconventional experiences of an immigrant woman trying to make it as a TV personality in Los Angeles.</p>
        <div className="project-buttons">
          <a className="imdb" href="https://www.imdb.com/title/tt9189370/"><img src={IMDB} /></a>
          <a className="play button light" href="#"><img src={play} /> Play</a>
        </div>
      </div>
    
      <div className="project">
        <img src={DoubtPoster} style={{paddingBottom: 20}} />
        <p><strong>"Doubt"</strong> is a music video directed by Elma Begovic <br /><br />Artist: Meetch</p>
        <div className="project-buttons">
          <a className="imdb" href="#" style={{width: 0, overflow: 'hidden'}}><img src={IMDB} /></a>
          <a className="play button light" href="#" style={{margin: 0}}><img src={play} /> Play</a>
        </div>
      </div>

      <div className="project">
       
      </div>
    </div>
  </Layout>
)

export default ProjectsPage
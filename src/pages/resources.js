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
      <h1>Resources</h1>
      <p>An aspiring rapper travels through the desert with her DJ and manager after receiving a suspiciously divine request to perform at a secret Coachella afterparty.</p>
      <ul className="resources-list">
        <li><a href="#">Raindance</a></li>
        <li><a href="#">Art of the Guillotine</a></li>
        <li><a href="#">Hope for Film</a></li>
        <li><a href="#">No Film School</a></li>
        <li><a href="#">Phillip Bloom</a></li>        
      </ul>
    </div>
  </Layout>
)

export default ResourcesPage

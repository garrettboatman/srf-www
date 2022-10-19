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
      <p>Below is a growing directory of organizations and establishments that champion indie filmmaking and storytelling.</p>
      <ul className="resources-list">
        <li><a href="https://womenandhollywood.com">Women and Hollywood</a></li>
        <li><a href="https://nofilmschool.com">No Film School</a></li>
        <li><a href="https://shotdeck.com">Shot Deck</a></li>
        <li><a href="https://www.sharegrid.com/losangeles">Sharegrid</a></li>
        <li><a href="https://womeninfilm.org">Women In Film</a></li>
        <li><a href="https://freethework.com">Free The Work</a></li>
        <li><a href="https://arraynow.com">Array</a></li>
        <li><a href="https://pillarsfund.org">Pillars Fund</a></li>
        <li><a href="https://collab.sundance.org">Sundance Collab</a></li>
        <li><a href="https://telefilm.ca/en">Telefilm</a></li>
      </ul>
    </div>
  </Layout>
)

export default ResourcesPage

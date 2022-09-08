import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import BigLogo from "../images/logo@2x.png"

const IndexPage = ({path}) => (
  <Layout path={path}>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link href="https://fonts.googleapis.com/css2?family=Nunito+Sans:ital,wght@0,300;0,400;0,800;0,900;1,400&display=swap" rel="stylesheet"></link>
    <Seo title="Home" />
    <div style={{textAlign: `center`, paddingTop: 100}}>
      <img style={{maxWidth: 300, height: 74}} src={BigLogo} alt="Seek Refuge Productions" />
      <div style={{
        marginTop: 40,
        marginBottom: 100,
      }}>
        <div className="nav-item-wrapper">
        <Link
            to="/about"
            className="button light outline"
          >
            About
        </Link>
        </div>
        <div className="nav-item-wrapper">
        <Link
            to="/projects"
            className="button light outline"
          >
            Projects
        </Link>
        </div>
        <div className="nav-item-wrapper">
        <Link
            to="/resources"
            className="button light outline"
          >
            Resources
        </Link>
        </div>
      </div>
    </div>
  </Layout>
)

export default IndexPage

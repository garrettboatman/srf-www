import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import Logo from "../images/logo@2x.png"

const Header = ({ path, siteTitle }) => (
  <header
    style={{
      marginBottom: `1.45rem`,
      padding: `0 20px`
    }}
  >
    <div
      style={{
        position: `absolute`,
        left: -9999,
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
    </div>
    {path !== '/' &&
    <div style={{maxWidth: 920, margin: `20px auto 0`, display: `flex`}}>
      <Link
        style={{marginTop: 15}}
        to="/"
      >
        <span style={{display: `block`, width: 35, height: 3, background: `#FBDD78`, marginBottom: 7}}></span>
        <span style={{display: `block`, width: 35, height: 3, background: `#FBDD78`, marginBottom: 7}}></span>
        <span style={{display: `block`, width: 35, height: 3, background: `#FBDD78`}}></span>
      </Link>
      <div style={{width: `100%`, textAlign: `center`}}>
            <Link to="/"><img style={{maxWidth: 170, height: 42, marginLeft: -35}} src={Logo} /></Link>
      </div>
    </div>
    }
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header

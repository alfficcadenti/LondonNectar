import {Link} from 'gatsby'
import PropTypes from "prop-types"
import React from "react"
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Logo from "./Logo"
import 'popper.js'
import './bootstrap.css';



const Header = ({ siteTitle, siteDescription, menuLinks }) => (
  <header id='header'
    style={{
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <Logo style={{ display: 'inline-block', verticalAlign: 'sub' }}/>
      <h1 style={{ margin: 0, display: 'inline-block' }}>
        <Link
          to="/"
          style={{
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
      <h3>{siteDescription}</h3>
      <Navbar collapseOnSelect expand="lg">        
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">          
          <Nav className="mr-auto">
            {menuLinks.map(link =>
              <li key={link.link} className={'nav-item'}>
                <Link className={'nav-link'} to={link.link}>{link.name}</Link>
              </li>
            )}
          </Nav>
        </Navbar.Collapse>

      </Navbar>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
  siteDescription: PropTypes.string,
}

export default Header
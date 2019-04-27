import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import 'popper.js'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';

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
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>

      <nav className={'navbar navbar-expand-lg navbar-dark bg-primary'}>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="navbar-collapse collapse show" id="navbarNav" aria-expanded='false'>
          <ul style={{ display: 'flex', flex: 1, listStyle: 'none' }} className={'navbar-nav mr-auto'}>
            {menuLinks.map(link =>
              <li key={link.link} className={'nav-item'}>
                <Link className={'nav-link'} to={link.link}>{link.name}</Link>
              </li>
            )}
          </ul>
        </div>

      </nav>

      <h3>
        {siteDescription}
      </h3>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
  siteDescription: PropTypes.string,
}

export default Header

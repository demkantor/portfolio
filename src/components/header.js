import React, { Component } from "react";
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby";
import Img from "gatsby-image"


// navbar icon, hamburger menu and links
class Header extends Component {

  closeNav = () => {
    document.body.classList.remove('nav-open');
  };

  openNav = () => {
    document.body.classList.toggle('nav-open');
  };

  render() {
    return (
      <header>
        <div className="logo">
        <StaticQuery 
                    query={graphql`
                    query {
                        file(relativePath: { eq: "david-icon.jpg" }) {
                        childImageSharp {
                          fixed(width: 125, height: 125) {
                                ...GatsbyImageSharpFixed
                            }
                        }
                        }
                    }
                  `}
                   render={data => (
                    <Img
                      className="logo-img"
                      fixed={data.file.childImageSharp.fixed}
                      alt="Me smiling"
                    />
                  )}
                />
        </div>
        <button className="nav-toggle" aria-label="toggle navigation" onClick={this.openNav}>
            <span className="hamburger"></span>
        </button>
        <nav className="nav">
            <ul className="nav__list">
                <li className="nav__item">
                  <a href="#home" className="nav__link" onClick={this.closeNav}>
                    Home
                  </a>
                </li>
                <li className="nav__item">
                  <a href="#services" className="nav__link" onClick={this.closeNav}>
                    My Services
                  </a>
                </li>
                <li className="nav__item">
                  <a href="#about" className="nav__link" onClick={this.closeNav}>
                    About me
                  </a>
                </li>
                <li className="nav__item">
                  <a href="#work" className="nav__link" onClick={this.closeNav}>
                    My Work
                  </a>
                </li>
            </ul>
        </nav>
      </header>
    )
  }
};

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header;

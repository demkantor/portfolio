import React, { Component } from "react";
import PropTypes from "prop-types"

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
            <img src="images/david-kantor-icon.png" alt="" />
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

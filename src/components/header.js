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
                <li className="nav__item" onClick={this.closeNav}>
                  <a href="#home" className="nav__link">
                    Home
                  </a>
                </li>
                <li className="nav__item" onClick={this.closeNav}>
                  <a href="#services" className="nav__link">
                    My Services
                  </a>
                </li>
                <li className="nav__item" onClick={this.closeNav}>
                  <a href="#about" className="nav__link">
                    About me
                  </a>
                </li>
                <li className="nav__item" onClick={this.closeNav}>
                  <a href="#work" className="nav__link">
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

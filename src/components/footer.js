import React from 'react';

// only thing to always display at the bottom of each page
const Footer = () => (

    <footer className="footer">
        <a href="mailto:davidedwardkantor@gmail.com" className="footer__link">davidedwardkantor@gmail.com</a>
        <br/>
        <a className="footer__link" href="assets/David-Kantor.pdf" target="_blank" download>
            download resume
        </a>
        <ul className="social-list">
            <li className="social-list__item">
                <a className="social-list__link" href="https://github.com/demkantor">
                    <i className="fab fa-github"></i>
                </a>
            </li>
            <li className="social-list__item">
                <a className="social-list__link" href="https://codepen.io/demkantor">
                    <i className="fab fa-codepen"></i>
                </a>
            </li>
            <li className="social-list__item">
                <a className="social-list__link" href="https://forum.xda-developers.com/member.php?u=4334383">
                    <i className="fab fa-android"></i>
                </a>
            </li>
            <li className="social-list__item">
                <a className="social-list__link" href="https://www.demkantor.com/">
                    <i className="fas fa-rss"></i>
                </a>
            </li>
            <li className="social-list__item">
                <a className="social-list__link" href="https://linkedin.com/in/david-edward-kantor">
                    <i className="fab fa-linkedin"></i>
                </a>
            </li>
        </ul>
    </footer>
    
);


export default Footer;

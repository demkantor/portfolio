import React from "react";
import PropTypes from "prop-types";

import Footer from "./footer";
import "./layout.css";


// main layout for all pages
const Layout = ({ children }) => {

  return (
    <>
      <div>
        <main>{children}</main>
      </div>
      <Footer/>
    </>
  )
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;

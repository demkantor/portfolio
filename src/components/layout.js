import React from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";

import Header from "./header";
import Intro from "./intro";
import Services from "./services";
import About from "./about";
import Projects from "./projects";
import Footer from "./footer";
import "./layout.css";



const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <Intro />
      <Services />
      <About />
      <Projects />
      <div>
        <main>{children}</main>
        <Footer/>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

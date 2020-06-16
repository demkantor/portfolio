import React from "react";
import { useStaticQuery, graphql } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Intro from "../components/intro";
import Services from "../components/services";
import About from "../components/about";
import Projects from "../components/projects";
import Header from "../components/header";


const IndexPage = () => {

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
      <Layout pageTitle="David Kantor">
        <SEO title="Home" />
        <Header siteTitle={data.site.siteMetadata.title} />
        <Intro />
        <Services />
        <About />
        <Projects />
      </Layout>
  );
};

export default IndexPage;

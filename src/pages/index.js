import React from "react";
import { graphql, Link, useStaticQuery } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";
import ProjectPreview from "../components/project-preview";
import Intro from "../components/intro";
import Services from "../components/services";
import About from "../components/about";
import Projects from "../components/projects";


const IndexPage = () => {



  return (
      <Layout pageTitle="David Kantor">
        <SEO title="Home" />
        <Intro />
        <Services />
        <About />
        <Projects />

        <Link to="/project-page-2/">Go to page 2</Link> <br />
      </Layout>
  );
};

export default IndexPage;

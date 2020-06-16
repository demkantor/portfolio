import React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Project from "../components/singleProject";

const SecondPage = () => (
  <Layout pageTitle="David Kantor">
    <SEO title="Project Pieces" />
    <h1>Hi from the project page</h1>
    <p>Will dynamically display projects here upon click</p>
    <Project />
    <Link to="/">Go back to the homepage</Link>
  </Layout>
);

export default SecondPage;

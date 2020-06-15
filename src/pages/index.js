import React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";

const IndexPage = () => (
  <Layout pageTitle="David Kantor">
    <SEO title="Home" />
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      
    </div>
    <Link to="/project/">Go to page 2</Link> <br />
  </Layout>
)

export default IndexPage;

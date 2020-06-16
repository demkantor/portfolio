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

  const data = useStaticQuery(graphql`
  {
    allProjectsJson {
      edges {
        node {
          title
          slug
          description
          image {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
  `);

  const projects = data.allProjectsJson.edges;

  return (
      <Layout pageTitle="David Kantor">
        <SEO title="Home" />
        <Intro />
        <Services />
        <About />
        <Projects />
        <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
          {projects.map(({ node: project }) => {
            const title = project.title;
            const description = project.description;
            const slug = project.slug;
            const imageData = project.image.childImageSharp.fluid;

            return (
            <ProjectPreview
              title={title}
              description={description}
              slug={slug}
              imageData={imageData}
              />
            )
          })}
        </div>
        <Link to="/project-page-2/">Go to page 2</Link> <br />
      </Layout>
  );
};

export default IndexPage;

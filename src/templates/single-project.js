import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import ProjectSlug from '../components/project-slug';

export const query = graphql
`
query ($slug: String!) {
    projectsJson(slug: {eq: $slug}) {
      title
      description
      url
      tech
      image {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  }
`
;

const ProjectTemplate = ({ data }) => {
    const project = data.projectsJson;
    const title = project.title;
    const url = project.url;
    const tech = project.tech;
    const description = project.description;
    const imageData = project.image.childImageSharp.fluid;

    return (
        <Layout>
            <ProjectSlug
                title={title}
                url={url}
                tech={tech}
                description={description}
                imageData={imageData} />
        </Layout>
    )
};

export default ProjectTemplate;
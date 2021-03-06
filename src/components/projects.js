import React from 'react';
import ProjectPreview from './project-preview';
import { useStaticQuery, graphql } from "gatsby";


// layout for project section on main page
const Projects = () => {

    const data = useStaticQuery(graphql`
    {
      allProjectsJson {
        edges {
          node {
            title
            slug
            tech
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
        <section className="my-work" id="work">
            <h2 className="section__title section__title--work">
                My work
            </h2>
            <p className="section__subtitle section__subtitle--work">
                A selection of my range of work
            </p>
            <div className="portfolio">
                {projects.map(({ node: project }) => {
                    const title = project.title;
                    const description = project.description;
                    const slug = project.slug;
                    const tech = project.tech;
                    const imageData = project.image.childImageSharp.fluid;

                    return (
                        <ProjectPreview
                            title={title}
                            description={description}
                            slug={slug}
                            tech={tech}
                            imageData={imageData}
                        />
                    )
                })}
            </div>
        </section>
    );
};


export default Projects;

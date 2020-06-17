import React from 'react';
import { Link } from 'gatsby';
import Img from 'gatsby-image';

// what displays on single project page
const ProjectSlug = ({ imageData, title, description, url, tech }) => (

    <>
        <div className="btn-container btn-top">
            <Link to="/" className="btn">&larr; back to all projects</Link>
        </div>
        <section className="intro">
            <h1 className="section__title section__title--intro">
                {title} <strong>@ demkantor</strong>
            </h1>
            <p className="section__subtitle section__subtitle--intro">{tech}</p>
            <Img fluid={imageData} alt={title} className="intro__img project-img"/>
            {/* <img src="./images" alt="" className="intro__img"/> */}
        </section>

        <div className="portfolio-item-individual">
            <div className="project-image">
                <Img fluid={imageData} alt={title} />
            </div>
            <h2 className="social-list">{title}</h2>
            <p>{description}</p>
        </div>
        <div className="portfolio-item-individual">
            <h3 className="tech"><strong>Made with:</strong> {" "}
                <span>
                    {tech}
                </span>
            </h3>
            <div className="btn-container">
                <a href={url} className="btn">View this project online &rarr;</a>
                <Link to="/" className="btn">&larr; back to all projects</Link>
            </div>
        </div>
    </>
    
);

export default ProjectSlug;

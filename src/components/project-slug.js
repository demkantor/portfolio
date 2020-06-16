import React from 'react';
import { Link } from 'gatsby';
import Img from 'gatsby-image';

const ProjectSlug = ({ imageData, title, description, url }) => (
    <>
        <h1>
            {title}
        </h1>
            <Img fluid={imageData} alt={title} />
        
        
        
        <p>{description}</p>
        <Link to={url}>View this project online &rarr;</Link>
        <Link to="/">&larr; back to all projects</Link>
    </>

)

export default ProjectSlug;

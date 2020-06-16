import React from 'react';
import { Link } from 'gatsby';
import Img from 'gatsby-image';

// each individual project dispayed on home page in projects section
const ProjectPreview = ({ slug, imageData, title }) => (
    
    <Link to={`/${slug}`} className="portfolio__item">
        <Img fluid={imageData} alt={title} className="portfolio__img" />
    </Link>
);

export default ProjectPreview;

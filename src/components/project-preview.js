import React from 'react';
import { Link } from 'gatsby';
import Img from 'gatsby-image';

const ProjectPreview = ({ slug, imageData, title }) => (
    
    <Link to={`/${slug}`} className="portfolio__item">
        <Img fluid={imageData} alt={title} className="portfolio__img" />
    </Link>
);

export default ProjectPreview;

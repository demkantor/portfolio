import React from 'react';
import { Link } from 'gatsby';
import Img from 'gatsby-image';

const ProjectPreview = ({ slug, imageData, title, description }) => (
    <>
        <Link to={`/${slug}`}>
            <Img fluid={imageData} alt={title} />
        </Link>
        <h2>
            <Link to={`/${slug}`}>{title}</Link>
        </h2>
        <p>{description}</p>
        <Link to={`/${slug}`}>View this project &rarr;</Link>
    </>

)

export default ProjectPreview;

import React from 'react';
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

const Intro = () => {

    const data = useStaticQuery(graphql`
        query {
                file(relativePath: { eq: "david-29.jpg" }) {
                childImageSharp {
                    fluid {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
        }
        `);

    return (
        <section className="intro" id="home">
            <h1 className="section__title section__title--intro">
                Hi, I am <strong>David Kantor</strong>
            </h1>
            <p className="section__subtitle section__subtitle--intro">full-stack developer</p>
            <Img
                className="intro__img"
                fixed={data.file.childImageSharp.fluid}
                alt="Me smiling"
            />
        </section>
    );
};


export default Intro;

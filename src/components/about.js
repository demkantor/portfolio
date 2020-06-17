import React from 'react';
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";


// the about me section on main page
const About = () => {

    const data = useStaticQuery(graphql`
    query {
            file(relativePath: { eq: "david-7.jpg" }) {
            childImageSharp {
                fluid {
                    ...GatsbyImageSharpFluid
                }
            }
        }
    }
    `);

    return (

        <section className="about-me" id="about">
            <h2 className="section__title section__title--about">Who I am</h2>
            <p className="section__subtitle section__subtitle--about">Full-Stack software developer based out of Minneapolis, MN</p>
            <div className="about-me__body">
                <p>A family man with a love of life, learning and laughter! Never a dull moment with my wife and two beautiful daughters, together we explore the world and seek out new challenges daily.</p>
                <p>A Life long teacher and student who has yet to find his limits. When not working on tech you will find me teaching my daughters how to skateboard or snowboard, traveling locally or overseas.</p>
                <p>Known for tracking down and finding the most elusive bugs either in the back-yard with my daughters or burried deep in the codebase. Being a quick study with an eye for detail I am sure to aquire the skills needed to accomplish any task at hand.</p>
            </div>
            <Img
                className="about-me__img"
                fixed={data.file.childImageSharp.fluid}
                alt="about me"
            />
        </section>

    );
};


export default About;

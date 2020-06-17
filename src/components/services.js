import React from 'react';

const Services = () => (

    <section className="my-services" id="services">
        <h2 className="section__title section__title--services">What I do</h2>
        <div className="services">
            <div className="service">
                <h3>Design + Development</h3>
                <p>Skilled in both front-end and back-end development I utilize the latest technologies to insure every application is scaleable, secure and with a clean user interface. From small projects to large applications nothing is too big or too small. </p>
            </div>
            <div className="service">
                <h3>Technology Agnostic</h3>
                <p>My view is that all coding languages have a purpose and will pick up and learn what is best for the task at hand. Skilled in many frameworks and tech stacks I come with prior knowledge but more importantly the ability to learn fast as well as a desire to continuously be learning.</p>
            </div>
            <div className="service">
                <h3>Tech I Use</h3>
                <p>JavaScript, TypeScript, Dart, Python, HTML, CSS, React, Angular, Vue, Electron, Flutter, Gatsby, JQuerry, Node, Express, Axios, Redux, Sagas, GraphQL, AWS, Firebase, Mongo-Atlas, PostgreSQL, SQLite, NoSQL, MongoDB, Git, Linux, Android, and much more!</p>
            </div>
        </div>
        
        <a href="#work" className="btn">My Work</a>
    </section>
);


export default Services;

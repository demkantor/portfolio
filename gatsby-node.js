const path = require('path');

exports.createPages = async ({ actions, graphql, reporter }) => {
    const res = await graphql(`
        {
            allProjectsJson {
                edges {
                    node {
                        slug
                    }
                }
            }
        }
    `);

    if (res.error) {
        reporter.panic('There was a problem loading the project!');
        return;
    };

    const projects = res.data.allProjectsJson.edges;
    console.log(projects)
    projects.forEach(({ node: project }) => {
        const slug = project.slug;

        actions.createPage({
            path: `/${slug}/`,
            component: path.resolve(`src/templates/single-project.js`),
            context: { slug }
        });
    });
};
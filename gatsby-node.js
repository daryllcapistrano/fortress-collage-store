/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require("path");

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const productTemplate = path.resolve(`src/templates/productTemplate.js`);

  const allProducts = await graphql(`
    query ProductQuery {
      allDatoCmsProduct {
        edges {
          node {
            id
            name
            price
            productmetadata
            quantity
            description
          }
        }
      }
    }
  `);

  allProducts.data.allDatoCmsProduct.edges.forEach((edge) => {
    createPage({
      // Path for this page — required
      path: `${edge.node.id}`,
      component: productTemplate,
      context: {
        id: edge.node.id,
        name: edge.node.name,
        price: edge.node.price,
        quantity: edge.node.quantity,
        description: edge.node.description,
        productmetadata: edge.node.productmetadata,
        // Add optional context data to be inserted
        // as props into the page component..
        //
        // The context data can also be used as
        // arguments to the page GraphQL query.
        //
        // The page "path" is always available as a GraphQL
        // argument.
      },
    });
  });
};

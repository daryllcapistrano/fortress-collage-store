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
        // Add optional context data to be inserted
        // as props into the page component..
        //
        // The context data can also be used as
        // arguments to the page GraphQL query.
        //
        // The page "path" is always available as a GraphQL
        // argument.
        id: edge.node.uid,
        name: edge.node.name,
        price: edge.node.price,
        quantity: edge.node.quantity,
        image: edge.node.image,
        productmetadata: edge.node.productmetadata,
      },
    });
  });
};

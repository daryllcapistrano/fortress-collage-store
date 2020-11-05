/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

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
            quantity
            productmetadata
          }
        }
      }
    }
  `);

  let product = allProducts.data.allDatoCmsProduct.edges;

  product.forEach((edge) => {
    createPage({
      path: `/${edge.node.id}`,
      component: productTemplate,
      context: { id: edge.node.uid, name: edge.node.name }, // This is to pass data as props to your component.
    });
  });
};

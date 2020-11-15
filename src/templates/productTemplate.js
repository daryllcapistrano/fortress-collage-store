import React from "react";
import { StaticQuery, graphql } from "gatsby";
import Layout from "../layouts/index";
import Img from "gatsby-image";
// import Image from "../components/Images/productImage";

// try querying for all the product data and then single it down to the correct image by checking against the pageContext id before rendering on page

// * now that ive got the correct data to each page, reading the docs just reminded me that i should not use static query for page layer data.id
// * maybe swith this component to use a regualr query if the above is not applicable

export default (props) => (
  <StaticQuery
    query={graphql`
      query LayoutInfo {
        site {
          siteMetadata {
            siteName
          }
        }
        allDatoCmsProduct {
          edges {
            node {
              id
              name
              price
              quantity
              productmetadata
              image {
                url
                fluid(imgixParams: { maxW: 300 }) {
                  ...GatsbyDatoCmsFluid
                }
              }
            }
          }
        }
      }
    `}
    render={(data) => {
      let products = data.allDatoCmsProduct.edges;

      let singleProduct = products.filter((id) => {
        return id.node.id === props.pageContext.id;
      });
      console.log(singleProduct);
      if (!products) {
        console.log("no product found");
      }
      return (
        <Layout site={data.site}>
          <div className="Catalogue__item" key={singleProduct[0].id}>
            <h1>{props.pageContext.name}</h1>
            <h1>{props.pageContext.price}</h1>
            <h1>{props.pageContext.quantity}</h1>
            <h1>{props.pageContext.id}</h1>
            <h1>{props.pageContext.productmetadata.type}</h1>

            <Img fluid={singleProduct[0].node.image.fluid} />

            <p>{singleProduct[0].node.id}</p>

            {/* add working cart button */}

            <span
              className="Product__buy snipcart-add-item"
              data-item-id={props.pageContext.id}
              data-item-price={props.pageContext.price}
              // clean up below for production, pass down data from pageContext
              data-item-image={singleProduct[0].node.image.url}
              data-item-name={props.pageContext.name}
              data-item-url={`/`}
            >
              add to cart
            </span>
          </div>
        </Layout>
      );
    }}
  />
);

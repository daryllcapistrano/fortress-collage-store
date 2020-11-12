import React from "react";
import { StaticQuery, graphql } from "gatsby";
import Layout from "../layouts/index";
// import Img from "gatsby-image";
// import Image from "../components/Images/productImage";

// try querying for all the product data and then single it down to the correct image by checking against the pageContext id before rendering on page

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
                sizes(maxWidth: 300, imgixParams: { fm: "jpg" }) {
                  ...GatsbyDatoCmsSizes
                }
              }
            }
          }
        }
      }
    `}
    render={(data) => {
      const name = data.allDatoCmsProduct.edges.find((n) => {
        return (
          n.node.id.includes(JSON.stringify(props.pageContext.id)),
          console.log(n, props.pageContext.id)
        );
      });
      if (!name) {
        // return null;
        console.log("no image returned");
      }
      console.log(name);

      return (
        <Layout site={data.site}>
          <h1>{props.pageContext.name}</h1>
          <h1>{props.pageContext.price}</h1>
          <h1>{props.pageContext.quantity}</h1>
          <h1>{props.pageContext.id}</h1>
          <h1>{props.pageContext.productmetadata.type}</h1>

          <p>render here</p>

          {/* <div style={{ maxWidth: `300px` }}>
          <Image alt="Gatsby in Space" name={props.pageContext.name} />
        </div> */}

          {/* below does NOT work with board sizes and throws type error,  */}

          {/* <h1>{props.pageContext.productmetadata.sizes.small}</h1>
        <h1>{props.pageContext.productmetadata.sizes.medium}</h1>
        <h1>{props.pageContext.productmetadata.sizes.large}</h1>
        <h1>{props.pageContext.productmetadata.sizes.xl}</h1> */}

          {/* fix below to correctly use image */}

          {/* <Img
          fluid={props.pageContext.image.fluid}
          alt="Product"
          style={{ height: `300px`, width: `300px` }}
        /> */}

          {/* add working cart button */}

          {/* <span
          className="Product__buy snipcart-add-item"
          data-item-id={props.pageContext.uid}
          data-item-price={props.pageContext.price}
          data-item-name={props.pageContext.name}
        >
          add to cart
        </span> */}
        </Layout>
      );
    }}
  />
);

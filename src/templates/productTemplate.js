import React from "react";
import { StaticQuery, graphql } from "gatsby";
import Layout from "../layouts/index";
// import Img from "gatsby-image";

export default (props) => (
  <StaticQuery
    query={graphql`
      query LayoutInfo {
        site {
          siteMetadata {
            siteName
          }
        }
      }
    `}
    render={(data) => (
      <Layout site={data.site}>
        <h1>{props.pageContext.name}</h1>
        <h1>{props.pageContext.price}</h1>
        <h1>{props.pageContext.quantity}</h1>
        <h1>{props.pageContext.id}</h1>
        <h1>{props.pageContext.productmetadata.type}</h1>

        {/* below does NOT work with board sizes and throws type error */}

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
    )}
  />
);

import React from "react";
import { StaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

// Note: You can change "images" to whatever you'd like.

const Image = (props) => (
  <StaticQuery
    query={graphql`
      query {
        images: allDatoCmsProduct {
          edges {
            node {
              id
              name
              price
              quantity
              productmetadata
              image {
                url
                fluid {
                  ...GatsbyDatoCmsFluid
                }
              }
            }
          }
        }
      }
    `}
    render={(data) => {
      const image = data.images.edges.find((n) => {
        return n.node.name.includes(props.name);
      });
      if (!image) {
        return null;
      }

      //const imageSizes = image.node.childImageSharp.sizes; sizes={imageSizes}
      return <Img alt={props.alt} fluid={image.edges.node.fluid} />;
    }}
  />
);

export default Image;

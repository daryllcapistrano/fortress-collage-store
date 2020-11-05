import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

export default function Logo() {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "logo.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
          }
        }
      }
    }
  `);

  return (
    <Img
      fluid={data.file.childImageSharp.fluid}
      alt="Fortress Collage Sk8 Logo"
    />
  );
}

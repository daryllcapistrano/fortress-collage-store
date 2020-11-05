import React from "react";
import { StaticQuery, graphql } from "gatsby";
import Layout from "../layouts/index";
import Img from "gatsby-image";

export default (props) => (
  <StaticQuery
    query={graphql`
      query Product {
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
        <h1>{props.pageContext.name}</h1>

        {/* fix below to correctly use image */}

        <div>
          <Img fluid={props.pageContext.image} alt="something"></Img>
        </div>
      </Layout>
    )}
  />
);

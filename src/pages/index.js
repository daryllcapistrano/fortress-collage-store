import React from "react";
import { StaticQuery, graphql } from "gatsby";
import Layout from "../components/Layout";
import Img from "gatsby-image";

export default () => (
  <StaticQuery
    query={graphql`
      query CatalogueQuery {
        products: allDatoCmsProduct {
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
                  ...GatsbyDatoCmsSizes_noBase64
                }
              }
            }
          }
        }
        site {
          siteMetadata {
            siteName
          }
        }
      }
    `}
    render={(data) => (
      <Layout site={data.site}>
        <div className="Catalogue">
          {data.products.edges.map(({ node: product }) => (
            <div className="Catalogue__item" key={product.id}>
              <div className="Product">
                <div className="Product__image">
                  <a href={`${product.id}`}>
                    <Img sizes={product.image.sizes} />
                  </a>
                </div>
                <div className="Product__name">
                  {product.name}
                  {/* <div className="Product__type"></div> */}
                </div>
              </div>
            </div>
          ))}
        </div>
      </Layout>
    )}
  />
);

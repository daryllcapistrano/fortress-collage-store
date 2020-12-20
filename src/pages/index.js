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
          <div className="Catalogue__date">
            <h1>winter 20 catalogue</h1>
          </div>
          {data.products.edges.map(({ node: product }) => (
            <div className="Catalogue__item" key={product.id}>
              <div className="Product">
                <div className="Product__image">
                  <a href={`${product.name}`}>
                    <Img sizes={product.image.sizes} />
                  </a>
                </div>
                <div className="Product__name">
                  <h2>{product.name}</h2>
                  {/* <div className="Product__type"></div> */}
                </div>
                <span className="Product__price">
                  ${product.price}
                  {/* <div className="Product__type"></div> */}
                </span>
              </div>
            </div>
          ))}
        </div>
      </Layout>
    )}
  />
);

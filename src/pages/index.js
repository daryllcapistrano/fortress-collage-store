import React from "react";
import { StaticQuery, graphql, Link } from "gatsby";
import Layout from "../layouts/index";
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
                  ...GatsbyDatoCmsSizes
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
                  <Link to={`${product.id}`}>
                    <Img sizes={product.image.sizes} />
                  </Link>
                </div>{" "}
                <div className="Product__details">
                  <div className="Product__name">
                    {product.name}
                    <div className="Product__type">
                      {product.productmetadata.type}
                    </div>
                    <div className="Product__price">${product.price}</div>
                  </div>
                  {product.quantity === 0 ? (
                    <span
                      className="Product__out"
                      data-item-id={product.id}
                      data-item-price={product.price}
                      data-item-image={product.image.url}
                      data-item-name={product.name}
                      data-item-url={`/`}
                    >
                      out of stock
                    </span>
                  ) : (
                    <span
                      className="Product__buy snipcart-add-item"
                      data-item-id={product.id}
                      data-item-price={product.price}
                      data-item-image={product.image.url}
                      data-item-name={product.name}
                      data-item-url={`/`}
                    >
                      add to cart
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </Layout>
    )}
  />
);

import React from "react";
import { StaticQuery, graphql } from "gatsby";
import Layout from "../layouts/index";
// import Img from "gatsby-image";

export default () => (
  <StaticQuery
    query={graphql`
      query Product {
        products: allDatoCmsProduct(
          filter: { id: { eq: "DatoCmsProduct-9757404-en" } }
        ) {
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
        <h1>adsfaaf</h1>
        {/* <div className="Catalogue">
          <div className="Catalogue__item" key={props.id}>
            <div className="Product">
              <div className="Product__image">
                <Img sizes={props.image.sizes} />
              </div>{" "}
              <div className="Product__details">
                <div className="Product__name">
                  {props.name}
                  <div className="Product__type">
                    {props.productmetadata.type}
                  </div>
                  <div className="Product__price">${props.price}</div>
                </div>
                {props.quantity === 0 ? (
                  <span
                    className="Product__out"
                    // data-item-id={product.id}
                    // data-item-price={product.price}
                    // data-item-image={product.image.url}
                    // data-item-name={product.name}
                    // data-item-url={`/`}
                  >
                    out of stock
                  </span>
                ) : (
                  <span
                    className="Product__buy snipcart-add-item"
                    data-item-id={props.id}
                    data-item-price={props.price}
                    data-item-image={props.image.url}
                    data-item-name={props.name}
                    data-item-url={`/`}
                  >
                    add to cart
                  </span>
                )}
              </div>
            </div>
          </div>
        </div> */}
      </Layout>
    )}
  />
);

import React from "react";
import { StaticQuery, graphql, Link } from "gatsby";
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
                fluid(imgixParams: { maxW: 500 }) {
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
          <div className="Product__detail" key={singleProduct[0].id}>
            <Link
              to={`/`}
              style={{
                display: `inline-block`,
                textDecoration: `none`,
                paddingBottom: `4em`,
                fontSize: `50%`,
              }}
            >
              {" "}
              &#60; back to home
            </Link>
            <Img
              className="Product__detail__image"
              fluid={singleProduct[0].node.image.fluid}
            />
            <p className="Product__detail__price">${props.pageContext.price}</p>
            <h2 className="Product__detail__name">{props.pageContext.name}</h2>
            <p className="Product__detail__description">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi
              ratione corporis, minus ex officiis molestias, suscipit deserunt
              dolore maiores, culpa consequatur architecto error quo.
              Distinctio.
            </p>
            {/* <p className="Product__detail__type">
              {props.pageContext.quantity}
            </p> */}
            {/* <p>{props.pageContext.id}</p> */}
            {/* <h1>{props.pageContext.productmetadata.type}</h1> */}
            {/* <p>{singleProduct[0].node.id}</p> */}
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

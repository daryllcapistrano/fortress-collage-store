import React from "react";
import { StaticQuery, graphql, Link } from "gatsby";
import Layout from "../components/Layout/index";
import Img from "gatsby-image";
// import Image from "../components/Images/productImage";

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
              description
              productmetadata
              image {
                url
                fluid(imgixParams: { maxW: 500 }) {
                  ...GatsbyDatoCmsFluid_noBase64
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
      // console.log(singleProduct);
      if (!products) {
        console.log("no product found");
      }

      // get select values for use in dropdown
      const productMetaData = singleProduct[0].node.productmetadata;
      const productSizes = Object.getOwnPropertyNames(productMetaData.size);
      console.log(productSizes);

      // get values for cart summary sizes
      const sizeOptions = productSizes.join("|");
      console.log(sizeOptions);

      // update item before adding to cart
      // const select = document.querySelector("#product_size");
      // select.addEventListener("change", () => {
      //   // Sets the default size when adding the item
      //   span.setAttribute("data-item-custom1-value", select.value);
      // });

      return (
        <Layout site={data.site} key={singleProduct[0].id}>
          <div className="Breadcrumbs">
            <Link to="/">home</Link> / collections / shoes / boards
          </div>
          <div className="Product__header">
            <h1 className="Product__detail__name">{props.pageContext.name}</h1>
          </div>
          <div className="Product__gallery__wrapper">
            <Img
              className="Product__gallery__image"
              fluid={singleProduct[0].node.image.fluid}
            />
          </div>
          <div className="Product__detail__wrapper">
            <div className="Product__detail__inner__wrapper">
              {/* <h2 className="Product__detail__name">
                {props.pageContext.name}
              </h2> */}
              <h3 className="Product__detail__price">
                ${props.pageContext.price}
              </h3>
              <p className="Product__detail__description">
                {props.pageContext.description}
              </p>
            </div>
            <div className="Product__detail__inner__wrapper">
              <div style={{ marginBottom: `1.25em` }}>
                <select
                  id="product_size"
                  // value={this.state.selectValue}
                  // onChange={this.handleChange}
                >
                  {/* <option value={productSizes[0]}>{productSizes[0]}</option>
                <option value={productSizes[1]}>{productSizes[1]}</option> */}

                  {productSizes.map((size, index) => (
                    <option key={index} value={size}>
                      {size}
                    </option>
                  ))}
                </select>
              </div>
              <span
                className="Product__buy snipcart-add-item"
                data-item-id={props.pageContext.id}
                data-item-price={props.pageContext.price}
                // clean up below for production, pass down data from pageContext
                data-item-image={singleProduct[0].node.image.url}
                data-item-name={props.pageContext.name}
                data-item-url={`/`}
                data-item-custom1-name="size"
                data-item-custom1-options={sizeOptions}
              >
                add to cart
              </span>
            </div>
          </div>
        </Layout>
      );
    }}
  />
);

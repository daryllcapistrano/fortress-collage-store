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
        <Layout site={data.site}>
          <div className="Product__details" key={singleProduct[0].id}>
            <Link
              to={`/`}
              style={{
                display: `inline-block`,
                textDecoration: `none`,
                fontSize: `50%`,
                color: `black`,
                paddingLeft: `.5em`,
              }}
            >
              {" "}
              &#60; home
            </Link>
            <h2 className="Product__detail__name">{props.pageContext.name}</h2>
            <Img
              className="Product__detail__image"
              fluid={singleProduct[0].node.image.fluid}
            />
            <p className="Product__detail__price">${props.pageContext.price}</p>
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
        </Layout>
      );
    }}
  />
);

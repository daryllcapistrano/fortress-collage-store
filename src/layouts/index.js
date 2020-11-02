import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import Link from "gatsby-link";

import "../style/index.scss";

const Layout = ({ children, site }) => (
  <div>
    <Helmet title="Fortress Skate Company" />
    <div className="Container">
      <div className="Header">
        <div className="Wrap">
          <div className="Header__body">
            <h1 className="Header__title">
              <Link data-text={site.siteMetadata.siteName} to="/">
                {site.siteMetadata.siteName}
              </Link>
            </h1>
            {/* <div className="Header__summary__line snipcart-summary">
              Number of items: <span className="snipcart-total-items"></span>
            </div> */}
            {/* <div className="Header__summary__line snipcart-summary">
              Total price: <span className="snipcart-total-price"></span>
            </div> */}
            <div className="Header__summary snipcart-checkout snipcart-summary">
              <a href="#/" className="Header__summary__cart">
                CART &#40;<span className="snipcart-total-items"></span>&#41;
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="Wrap">{children}</div>
      <div className="Wrap">
        <div className="Footer">
          This website is just an example project to demonstrate how you can
          integrate <a href="https://www.gatsbyjs.org/">Gatsby</a>,{" "}
          <a href="https://snipcart.com/">Snipcart</a> and{" "}
          <a href="https://www.datocms.com">DatoCMS</a>.
        </div>
      </div>
    </div>
  </div>
);

Layout.propTypes = {
  children: PropTypes.func,
};

export default Layout;

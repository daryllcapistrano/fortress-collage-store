import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
// import Link from "gatsby-link";

import "../../style/index.scss";

import Header from "../Header";
import Footer from "../Footer";

// import Instagram from "../../assets/instagram.svg";
// import Mail from "../../assets/mail.svg";
// import Cart from "../../assets/cart.svg";

// import Logo from "../Logo/logo";

const Layout = ({ children, site }) => (
  <div id="outer-container">
    <Helmet title="Fortress Skate Company" />
    <Header site={site} />
    <div className="Container" id="page-wrap">
      {children}
    </div>
    <Footer />
  </div>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;

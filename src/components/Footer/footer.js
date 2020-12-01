import React from "react";

import Instagram from "../../assets/instagram.svg";
import Mail from "../../assets/mail.svg";

const Footer = () => (
  <div className="Footer__Wrap">
    <div className="Footer">
      <div className="Social__buttons">
        <a
          href="https://instagram.com/fortress_collage/"
          target="_blank"
          rel="noreferrer"
        >
          <Instagram />
        </a>
        <a href="mailto:fortresscollage@gmail.com">
          <Mail />
        </a>
      </div>

      {/* This website is just an example project to demonstrate how you can
          integrate <a href="https://www.gatsbyjs.org/">Gatsby</a>,{" "}
          <a href="https://snipcart.com/">Snipcart</a> and{" "}
          <a href="https://www.datocms.com">DatoCMS</a>. */}
    </div>
  </div>
);

export default Footer;

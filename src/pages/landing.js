import React from "react";
import { Link } from "gatsby";
import Logo from "../components/Logo/logo";

const Landing = () => (
  <div style={{ display: `flex`, height: `100vh` }}>
    <div style={{ margin: `auto`, textAlign: `center` }}>
      <div style={{ width: `250px`, paddingBottom: `1em` }}>
        <Link to="/">
          <Logo />
        </Link>
      </div>
      <Link to="/" className="Landing__action">
        enter
      </Link>
    </div>
  </div>
);

export default Landing;

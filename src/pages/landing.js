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
      <Link
        to="/"
        style={{
          fontFamily: `Anonymous Pro`,
          textDecoration: `none`,
          textTransform: `uppercase`,
          border: `1px solid black`,
          borderRadius: `3px`,
          color: `black`,
          width: `100%`,
          height: `auto`,
          padding: `.5em 1em`,
        }}
      >
        enter
      </Link>
    </div>
  </div>
);

export default Landing;

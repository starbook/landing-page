import React from "react";
import {
  Navbar,
  Container,
} from "react-bootstrap";
import { navBar } from "../../config";

const Navigation = () => {
  return (
    <Navbar className="py-3 blurry" bg="" expand="lg">
      <Container>
        <Navbar.Brand>
          <img
            src={navBar.logo}
            width="35"
            height="35"
            className="mr-2"
            alt=""
          />
          {navBar.title}
        </Navbar.Brand>
        <a className="btn btn-primary rounded-pill" href={navBar.appLink}>Get App</a>
      </Container>
    </Navbar>
  );
};

export default Navigation;

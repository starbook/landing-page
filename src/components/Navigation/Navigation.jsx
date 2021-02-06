import React from "react";
import { Navbar, Container } from "react-bootstrap";
import { navBar } from "../../config";

const Navigation = () => {
  return (
    <Navbar className="py-2 blurry" bg="light">
      <Container>
        <Navbar.Brand>
          <img
            src={navBar.logo}
            width="32"
            height="32"
            className="mr-2"
            alt="starbook logo"
          />
          {navBar.title}
        </Navbar.Brand>
        <a className="btn btn-primary rounded-pill" href={navBar.appLink}>
          Get App
        </a>
      </Container>
    </Navbar>
  );
};

export default Navigation;

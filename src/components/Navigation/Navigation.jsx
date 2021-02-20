import React from "react";
import { Navbar, Container, Image } from "react-bootstrap";
import { navBar } from "../../config";

const Navigation = () => {
  return (
    <Navbar className="py-2 blurry" bg="light">
      <Container>
        <Navbar.Brand>
          <Image
            src={navBar.logo}
            width="32"
            height="32"
            className="mr-2"
            alt="starbook logo"
          />
          {navBar.title}
        </Navbar.Brand>
        <a className="btn btn-warning text-white rounded-pill" href={navBar.link}>
          Get App
        </a>
      </Container>
    </Navbar>
  );
};

export default Navigation;

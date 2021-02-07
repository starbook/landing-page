import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { navBar, footer, mainBody } from "../../config";
const Footer = () => {
  return (
    <footer className="mt-auto pt-3 bg-light">
      <Container>
        <div className="py-2">
          <Row>
            <Col lg="4">
              <div className="d-flex flex-column">
                <img
                  src={navBar.logo}
                  width="120"
                  height="120"
                  className="mb-3 shadow"
                  alt="starbook logo"
                />
                <h1>{navBar.title}</h1>
              </div>
            </Col>
            <Col lg="4">
              <div>
                <h5 class="text-uppercase">Support</h5>
                <ul className="list-unstyled">
                  <li className="my-3">
                    <a href={footer.sourceCode}>Source Code</a>
                  </li>
                  <li className="my-3">
                    <a href={footer.bugReport}>Report Bug</a>
                  </li>
                  <li className="my-3">
                    <a href={footer.contribute}>Contribute</a>
                  </li>
                </ul>
              </div>
            </Col>
            <Col lg="4">
              <div className="">
                <h3>About Developer</h3>
                <a href="https://hashirshoaeb.com/">hashirshoaeb.com</a>
                <h3 className="mt-3">Connect</h3>
                {footer.icons.map((icon, index) => (
                  <a
                    key={`social-icon-${index}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    href={icon.url}
                    aria-label={`My ${icon.image.split("-")[1]}`}
                  >
                    <i
                      className={`fab ${icon.image}  fa-2x  mx-2 socialicons footer-icons`}
                    />
                  </a>
                ))}
              </div>
            </Col>
          </Row>
        </div>
        <div>
          <Row>
            <Col lg="8">
              <p className="text-center">
                <i className="fas fa-code" /> with{" "}
                <i className="fas fa-heart" /> by{" "}
                <a
                  className="badge badge-dark"
                  rel="noopener"
                  href={footer.hashir}
                  aria-label="Hashir"
                >
                  Hashir Shoaib
                </a>{" "}
                using <i className="fab fa-react" />
              </p>
            </Col>
            <Col lg="4" className="text-center">
                <a  href={footer.privaryPolicy}>Terms & Policy</a>
            </Col>
          </Row>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;

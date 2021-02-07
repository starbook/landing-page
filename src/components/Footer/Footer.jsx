import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import { navBar, footer, mainBody } from "../../config";
import { FontAwesomeIcon, } from "@fortawesome/react-fontawesome";
import { } from "@fortawesome/fontawesome-svg-core";
import { } from "@fortawesome/free-solid-svg-icons";
import { } from "@fortawesome/free-regular-svg-icons";

const Footer = () => {
  return (
    <footer className="mt-5 pt-5 bg-light">
      <Container>
        <Row className="py-2">
          <Col md="4" className="d-flex flex-column">
            <Image
              src={navBar.logo}
              width="80"
              height="80"
              className="mb-3 shadow"
              alt="starbook logo"
              fluid={true}
            />
            <h2 className="display-5">{navBar.title}</h2>
          </Col>
          <Col md="4">
            <h5>Support</h5>
            <ul className="list-unstyled">
              {footer.supportList.map(({ text, link }, index) => (
                <li key={index} className="my-1">
                  <small>
                    <a
                      className="footer-link"
                      target="_blank"
                      rel="noopener noreferrer"
                      href={link}>{text}
                    </a>
                  </small>
                </li>
              ))}
            </ul>
          </Col>
          <Col md="4">
            <h5>About Developer</h5>
            <small className="footer-link">{footer.aboutDeveloper}</small>
            <h6 className="mt-3">Connect with me</h6>
            {footer.socialIcons.map(({ icon, link }, index) => (
              <a
                key={`social-icon-${index}`}
                target="_blank"
                rel="noopener noreferrer"
                href={link}
              >
                <FontAwesomeIcon
                  className="mx-1 footer-icons"
                  icon={icon}
                  size="2x"
                />
              </a>
            ))}
          </Col>
        </Row>
        <hr />
        <Row className="pt-1 pb-3">
          <Col md="4" className="text-center">
            <small >
              Made with love by{" "}
              <a
                className="badge badge-dark"
                rel="noopener"
                href={footer.hashir}
              >
                hashirshoaeb
              </a>
            </small>
          </Col>
          <Col md="4" className="d-none d-md-block"></Col>
          <Col md="4" className="text-center">
            <small>
              <a
                className="footer-link"
                target="_blank"
                rel="noopener noreferrer"
                href={footer.termsPolicyLink}>Terms & Policy
                </a>
            </small>
          </Col>
        </Row>
      </Container>
    </footer >
  );
};

export default Footer;

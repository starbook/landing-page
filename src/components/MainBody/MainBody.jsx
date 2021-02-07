import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import { mainBody } from "../../config";

const MainBody = () => {
  return (
    <Container>
      <Row className="section-lg pt-4">
        <Col
          md="6"
          className="text-center my-4 d-flex flex-column justify-content-center"
        >
          <h1 className="display-4">{mainBody.title}</h1>
          <p className="lead">{mainBody.description}</p>
          {
            mainBody.icons.map(({ image, link }, index) => {
              return (
                <a href={link} key={index}>
                  <Image
                    src={image}
                    alt="Download StarBook on the App Store"
                    style={{ height: "60px", margin: "40px" }}
                  />
                </a>
              );
            })
          }
        </Col>
        <Col md="6" className="">
          <Image width="350" src={mainBody.bgImage} alt="starbook home screen" fluid={true} />
        </Col>
      </Row>
    </Container>
  );
};

export default MainBody;

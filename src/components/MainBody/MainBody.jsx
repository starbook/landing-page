import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import starbookPic from "../../assets/images/main-body.png";
import { mainBody } from "../../config";

const MainBody = () => {
  return (
    <Container>
      <Row className="section-lg pt-4">
        <Col
          lg="6"
          className="text-center my-4 d-flex flex-column justify-content-center"
        >
          <h1 className="display-4">{mainBody.title}</h1>
          <p className="lead">{mainBody.description}</p>
          <div>
            <a
              href={mainBody.link}
              style={{
                display: "inline-block",
                overflow: "hidden",
                borderRadius: "13px",
                width: "250px",
                height: "83px",
              }}
            >
              <img
                src="https://tools.applemediaservices.com/api/badges/download-on-the-app-store/white/en-US?size=250x83&releaseDate=1612569600&h=9e9ca7fb9eb136d741621d25e5fadce8"
                alt="Download on the App Store"
                style={{ borderRadius: "13px", width: "250px", height: "83px" }}
              />
            </a>
          </div>
        </Col>
        <Col lg="6" className="d-flex  justify-content-center">
          <img width="350px" src={starbookPic} alt="starbook home screen" />
        </Col>
      </Row>
    </Container>
  );
};

export default MainBody;

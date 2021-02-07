import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import starbookPic from "../../assets/images/main-body.png";
import "./MainBody.scss";
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
            <button class="btn btn-outline-dark btn-icon-text">
              <i class="fab fa-apple btn-icon-prepend"></i>{" "}
              <span class="d-inline-block text-left">
                <small class="font-weight-light d-block">
                  Available on the
                </small>
                App Store
              </span>
            </button>
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

import React from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';

/* A simple static component to render some text for the landing page. */
const Landing = () => (
  <Container id="landing-page" fluid className="py-3">
    <Row className="align-middle text-center">
      <Col xs={4}>
        <Image src="/images/alohaconnects.jpeg" alt="Aloha Connects" height="30" />
      </Col>

      <Col xs={8} className="d-flex flex-column justify-content-center">
        <h1>Welcome</h1>
        <p>Add description regarding site</p>
      </Col>

    </Row>
  </Container>
);

export default Landing;

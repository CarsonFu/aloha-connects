import React from 'react';
import { Col, Container } from 'react-bootstrap';

/** The Footer appears at the bottom of every page. Rendered by the App Layout component. */
const Footer = () => (
  <footer className="footer mt-auto py-3">
    <Container className ="">
      <Col className="footer-content">
        Add Info
        {' '}
        <br />
        Add Info
        <br />
        Add Address
        {' '}
        <br />
        <a href="/">
          Add Link detail
        </a>
      </Col>
    </Container>
  </footer>
);

export default Footer;

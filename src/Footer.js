import React, { Component } from "react";
import { Col, Container, Row, Footer } from "mdbreact";

class FooterPage extends Component {
  render() {
    return (
      <Footer color="blue" className="font-small pt-4 mt-4">
        <Container fluid className="text-center text-md-left">
          <Row>
            <Col md="6">
            <h5 className="title">Disclaimer</h5>
            <p>
              Here you can use rows and columns here to organize your footer
              content.
            </p>
            </Col>
          </Row>
        </Container>
        <div className="footer-copyright text-center py-3">
          <Container fluid>
            &copy; {new Date().getFullYear()} Copyright:{" "}
            <a href="Andrea J."> AndreaJ.com </a>
          </Container>
        </div>
      </Footer>
    );}
}

export default FooterPage;
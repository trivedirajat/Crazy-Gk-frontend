import React from "react";
import Header from "../../directives/header/header";
import { Col, Container, Form, InputGroup, Row, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Banner1 from "../../assets/images/img/banner1.png";
import Carousel from "react-multi-carousel";
import successful from '../../assets/images/img/successful 1.png'
import Footer from "../../directives/footer/footer";

function StandardPackage(props) {
  return (
    <>
      <Header />
      <div className="all-bannerBG">
        <Container fluid className="container-space">
          <Row className="justify-content-center">
            <Col lg={10} sm={8}>
              <div className="all-banner-content">
                <h3>Supercharge Your Success with Premium Features</h3>
                <Link to="/home">Home </Link>
                <span>
                  <i className="fa fa-angle-double-right" /> Plans
                </span>
                <InputGroup className="mb-3">
                  <Form.Control placeholder="Search Features" />
                  <InputGroup.Text id="basic-addon2">
                    <i className="fa fa-search" />
                  </InputGroup.Text>
                </InputGroup>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <section className="section-padding">
        <Container fluid className="container-space">
          <div className="main-heading">
            <h4>Standard Package</h4>
          </div>
          <Row className="justify-content-center">
            <Col lg={6} sm={9}>
              <div className="sub-pay-Successful">
                <img src={successful} />
                <h6>Payment Successful !</h6>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

       {/* Adds code */}
       <div></div>

      <Footer />
    </>
  );
}

export default StandardPackage;

import React from "react";
import Header from "../../directives/header/header";
import { Col, Container, Form, InputGroup, Row, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Banner1 from "../../assets/images/img/banner1.png";
import Carousel from "react-multi-carousel";
import Footer from "../../directives/footer/footer";

function SubscriptionPayment(props) {
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
            <h4>Unlock Premium Benefits</h4>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the <br />
              industry's standard dummy text ever since the 1500s, when unknown
              printer took a galley of type and <br /> scrambled it to make a
              type specimen book.
            </p>
          </div>
          <Row>
            <Col lg={6} sm={6}>
              <div className="sub-pay-card">
                <h6>All Included Features:</h6>
                <ul>
                  <li>
                    <i className="fa fa-check-circle-o" /> Lorem Ipsum Lorem
                  </li>
                  <li>
                    <i className="fa fa-check-circle-o" /> Lorem Ipsum Lorem
                  </li>
                  <li>
                    <i className="fa fa-check-circle-o" /> Lorem Ipsum Lorem
                  </li>
                  <li>
                    <i className="fa fa-check-circle-o" /> Lorem Ipsum Lorem
                  </li>
                  <li>
                    <i className="fa fa-check-circle-o" /> Lorem Ipsum Lorem
                  </li>
                  <li>
                    <i className="fa fa-check-circle-o" /> Lorem Ipsum Lorem
                  </li>
                  <li>
                    <i className="fa fa-check-circle-o" /> Lorem Ipsum Lorem
                  </li>
                </ul>
              </div>
            </Col>
            <Col lg={6} sm={6}>
              <Link to={'/standard-package'}>
                <div className="sub-card-plan dark">
                  <div><h6>Basic</h6>
                    <h5>Save 20%</h5>
                  </div>

                  <div>
                    <h2>$29</h2>
                    <p>Three month, billed anually</p>
                  </div>
                </div>
              </Link>
              <div className="sub-card-plan">
                <div>Intermediate</div>
                <div >
                  <h2>$49</h2>
                  <p>Three month, billed anually</p>
                </div>
              </div>
              <div className="sub-card-plan">
                <div>Pro</div>
                <div >
                  <h2>$99</h2>
                  <p>12 Months, billed anually</p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <Footer />
    </>
  );
}

export default SubscriptionPayment;

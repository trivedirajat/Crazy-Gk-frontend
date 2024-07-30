import React, { useState } from "react";
import Header from "../../directives/header/header";
import { Button, Col, Container, Form, InputGroup, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import CalendarPage from "../../components/Calendar/CalendarPage";
import Banner1 from "../../assets/images/img/banner1.png";
import Carousel from "react-multi-carousel";
import Footer from "../../directives/footer/footer";

function DailyCurrentAffairs(props) {
  return (
    <>
      <Header />
      <div className="all-bannerBG">
        <Container fluid className="container-space">
          <Row className="justify-content-center">
            <Col lg={6} sm={8}>
              <div className="all-banner-content">
                <h3>Daily Current Affairs</h3>
                <Link to="/study-material">Current Affairs </Link>
                <span>
                  <i className="fa fa-angle-double-right" /> Daily Current
                  Affairs{" "}
                </span>
                <InputGroup className="mb-3">
                  <Form.Control placeholder="Search topic" />
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
          <Row>
            <Col lg={3} sm={12}>
              <CalendarPage />
            </Col>
            <Col lg={9} sm={12}>
              <div className="About-Subject">
                <h4 className="inner-head">Day Wise Daily News</h4>
                <Row>
                  <Col lg={3} sm={3} xs={6} className="mb-4">
                    <div className="sub-topic">
                      <Link to="/science-technology-topic">
                        <i className="fa fa-calendar m-0" /> 1.1 I Am A Topic{" "}
                      </Link>
                    </div>
                  </Col>
                  <Col lg={3} sm={3} xs={6} className="mb-4">
                    <div className="sub-topic">
                      <Link to="/science-technology-topic">
                        <i className="fa fa-calendar m-0" /> 1.1 I Am A Topic{" "}
                      </Link>
                    </div>
                  </Col>
                  <Col lg={3} sm={3} xs={6} className="mb-4">
                    <div className="sub-topic">
                      <Link to="/science-technology-topic">
                        <i className="fa fa-calendar m-0" /> 1.1 I Am A Topic{" "}
                      </Link>
                    </div>
                  </Col>
                  <Col lg={3} sm={3} xs={6} className="mb-4">
                    <div className="sub-topic">
                      <Link to="/science-technology-topic">
                        <i className="fa fa-calendar m-0" /> 1.1 I Am A Topic{" "}
                      </Link>
                    </div>
                  </Col>
                  <Col lg={3} sm={3} xs={6} className="mb-4">
                    <div className="sub-topic">
                      <Link to="/science-technology-topic">
                        <i className="fa fa-calendar m-0" /> 1.1 I Am A Topic{" "}
                      </Link>
                    </div>
                  </Col>
                  <Col lg={3} sm={3} xs={6} className="mb-4">
                    <div className="sub-topic">
                      <Link to="/science-technology-topic">
                        <i className="fa fa-calendar m-0" /> 1.1 I Am A Topic{" "}
                      </Link>
                    </div>
                  </Col>
                  <Col lg={3} sm={3} xs={6} className="mb-4">
                    <div className="sub-topic">
                      <Link to="/science-technology-topic">
                        <i className="fa fa-calendar m-0" /> 1.1 I Am A Topic{" "}
                      </Link>
                    </div>
                  </Col>
                  <Col lg={3} sm={3} xs={6} className="mb-4">
                    <div className="sub-topic">
                      <Link to="/science-technology-topic">
                        <i className="fa fa-calendar m-0" /> 1.1 I Am A Topic{" "}
                      </Link>
                    </div>
                  </Col>
                  <Col lg={3} sm={3} xs={6} className="mb-4">
                    <div className="sub-topic">
                      <Link to="/science-technology-topic">
                        <i className="fa fa-calendar m-0" /> 1.1 I Am A Topic{" "}
                      </Link>
                    </div>
                  </Col>
                  <Col lg={3} sm={3} xs={6} className="mb-4">
                    <div className="sub-topic">
                      <Link to="/science-technology-topic">
                        <i className="fa fa-calendar m-0" /> 1.1 I Am A Topic{" "}
                      </Link>
                    </div>
                  </Col>
                  <Col lg={3} sm={3} xs={6} className="mb-4">
                    <div className="sub-topic">
                      <Link to="/science-technology-topic">
                        <i className="fa fa-calendar m-0" /> 1.1 I Am A Topic{" "}
                      </Link>
                    </div>
                  </Col>
                  <Col lg={3} sm={3} xs={6} className="mb-4">
                    <div className="sub-topic">
                      <Link to="/science-technology-topic">
                        <i className="fa fa-calendar m-0" /> 1.1 I Am A Topic{" "}
                      </Link>
                    </div>
                  </Col>
                  <Col lg={3} sm={3} xs={6} className="mb-4">
                    <div className="sub-topic">
                      <Link to="/science-technology-topic">
                        <i className="fa fa-calendar m-0" /> 1.1 I Am A Topic{" "}
                      </Link>
                    </div>
                  </Col>
                  <Col lg={3} sm={3} xs={6} className="mb-4">
                    <div className="sub-topic">
                      <Link to="/science-technology-topic">
                        <i className="fa fa-calendar m-0" /> 1.1 I Am A Topic{" "}
                      </Link>
                    </div>
                  </Col>
                  <Col lg={3} sm={3} xs={6} className="mb-4">
                    <div className="sub-topic">
                      <Link to="/science-technology-topic">
                        <i className="fa fa-calendar m-0" /> 1.1 I Am A Topic{" "}
                      </Link>
                    </div>
                  </Col>
                  <Col lg={3} sm={3} xs={6} className="mb-4">
                    <div className="sub-topic">
                      <Link to="/science-technology-topic">
                        <i className="fa fa-calendar m-0" /> 1.1 I Am A Topic{" "}
                      </Link>
                    </div>
                  </Col>
                </Row>
              </div>
            {/* Adds code */}
            <div></div>

              <div className="About-Subject mt-3">
                <h4 className="inner-head">Important Dates</h4>
                <Row>
                  <Col lg={3} sm={3} xs={6} className="mb-4">
                    <div className="sub-topic">
                      <Link to="/science-technology-topic">
                        <i className="fa fa-calendar m-0" /> 1.1 I Am A Topic{" "}
                      </Link>
                    </div>
                  </Col>
                  <Col lg={3} sm={3} xs={6} className="mb-4">
                    <div className="sub-topic">
                      <Link to="/science-technology-topic">
                        <i className="fa fa-calendar m-0" /> 1.1 I Am A Topic{" "}
                      </Link>
                    </div>
                  </Col>
                  <Col lg={3} sm={3} xs={6} className="mb-4">
                    <div className="sub-topic">
                      <Link to="/science-technology-topic">
                        <i className="fa fa-calendar m-0" /> 1.1 I Am A Topic{" "}
                      </Link>
                    </div>
                  </Col>
                  <Col lg={3} sm={3} xs={6} className="mb-4">
                    <div className="sub-topic">
                      <Link to="/science-technology-topic">
                        <i className="fa fa-calendar m-0" /> 1.1 I Am A Topic{" "}
                      </Link>
                    </div>
                  </Col>
                  <Col lg={3} sm={3} xs={6} className="mb-4">
                    <div className="sub-topic">
                      <Link to="/science-technology-topic">
                        <i className="fa fa-calendar m-0" /> 1.1 I Am A Topic{" "}
                      </Link>
                    </div>
                  </Col>
                  <Col lg={3} sm={3} xs={6} className="mb-4">
                    <div className="sub-topic">
                      <Link to="/science-technology-topic">
                        <i className="fa fa-calendar m-0" /> 1.1 I Am A Topic{" "}
                      </Link>
                    </div>
                  </Col>
                  <Col lg={3} sm={3} xs={6} className="mb-4">
                    <div className="sub-topic">
                      <Link to="/science-technology-topic">
                        <i className="fa fa-calendar m-0" /> 1.1 I Am A Topic{" "}
                      </Link>
                    </div>
                  </Col>
                  <Col lg={3} sm={3} xs={6} className="mb-4">
                    <div className="sub-topic">
                      <Link to="/science-technology-topic">
                        <i className="fa fa-calendar m-0" /> 1.1 I Am A Topic{" "}
                      </Link>
                    </div>
                  </Col>
                  <Col lg={3} sm={3} xs={6} className="mb-4">
                    <div className="sub-topic">
                      <Link to="/science-technology-topic">
                        <i className="fa fa-calendar m-0" /> 1.1 I Am A Topic{" "}
                      </Link>
                    </div>
                  </Col>
                  <Col lg={3} sm={3} xs={6} className="mb-4">
                    <div className="sub-topic">
                      <Link to="/science-technology-topic">
                        <i className="fa fa-calendar m-0" /> 1.1 I Am A Topic{" "}
                      </Link>
                    </div>
                  </Col>
                  <Col lg={3} sm={3} xs={6} className="mb-4">
                    <div className="sub-topic">
                      <Link to="/science-technology-topic">
                        <i className="fa fa-calendar m-0" /> 1.1 I Am A Topic{" "}
                      </Link>
                    </div>
                  </Col>
                  <Col lg={3} sm={3} xs={6} className="mb-4">
                    <div className="sub-topic">
                      <Link to="/science-technology-topic">
                        <i className="fa fa-calendar m-0" /> 1.1 I Am A Topic{" "}
                      </Link>
                    </div>
                  </Col>
                  <Col lg={3} sm={3} xs={6} className="mb-4">
                    <div className="sub-topic">
                      <Link to="/science-technology-topic">
                        <i className="fa fa-calendar m-0" /> 1.1 I Am A Topic{" "}
                      </Link>
                    </div>
                  </Col>
                  <Col lg={3} sm={3} xs={6} className="mb-4">
                    <div className="sub-topic">
                      <Link to="/science-technology-topic">
                        <i className="fa fa-calendar m-0" /> 1.1 I Am A Topic{" "}
                      </Link>
                    </div>
                  </Col>
                  <Col lg={3} sm={3} xs={6} className="mb-4">
                    <div className="sub-topic">
                      <Link to="/science-technology-topic">
                        <i className="fa fa-calendar m-0" /> 1.1 I Am A Topic{" "}
                      </Link>
                    </div>
                  </Col>
                  <Col lg={3} sm={3} xs={6} className="mb-4">
                    <div className="sub-topic">
                      <Link to="/science-technology-topic">
                        <i className="fa fa-calendar m-0" /> 1.1 I Am A Topic{" "}
                      </Link>
                    </div>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <Footer />
    </>
  );
}

export default DailyCurrentAffairs;

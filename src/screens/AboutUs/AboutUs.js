import React from "react";
import "../AboutUs/AboutUs.css";
import Header from "../../directives/header/header";
import { Col, Container, InputGroup, Row, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import about1 from "../../assets/images/img/about1.png";
import about2 from "../../assets/images/img/about2.png";
import about3 from "../../assets/images/img/about3.png";
import Banner1 from "../../assets/images/img/banner1.png";
import Carousel from "react-multi-carousel";
import Members from "../../assets/images/img/Members.png";
import Team1 from "../../assets/images/img/team1.png";
import Team2 from "../../assets/images/img/team2.png";
import Team3 from "../../assets/images/img/team3.png";
import Team4 from "../../assets/images/img/team4.png";
import Team5 from "../../assets/images/img/team5.png";
import Footer from "../../directives/footer/footer";

function AboutUs(props) {
  return (
    <>
      <Header />
      <div className="all-bannerBG">
        <Container className="container-space">
          <Row className="justify-content-center">
            <Col lg={9} sm={8}>
              <div className="all-banner-content">
                <h3>About Us: Our Story and Mission</h3>
                <Link to="/home">Home </Link>
                <span>
                  <i className="fa fa-angle-double-right" /> About Us
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
      <section className="section-padding-top">
        <Container className="container-space">
          <div className="about-shodow">
            <div className="main-heading">
              <h4>WHO WE ARE</h4>
              <p style={{ lineHeight: "36px" }}>
                Content Number 1 Lorem Ipsum is simply dummy text of the
                printing and typesetting industry. Lorem Ipsum has been the
                industry's standard dummy <br />
                text ever since the 1500s, when unknown printer took a galley of
                type and scrambled it to make a type specimen book. It has
                survived not only five <br />
                centuries, typesetting, remaining essentially unchanged. <br />
                Content Number 1 Lorem Ipsum is simply dummy text of the
                printing and typesetting industry. Lorem Ipsum has been the
                industry's standard dummy
                <br /> text ever since the 1500s, when unknown printer took a
                galley of type and scrambled it to make a type specimen book. It
                has survived not only five
                <br /> centuries, but also the leap into electronic typesetting,
                remaining essentially unchanged.{" "}
              </p>
            </div>
            <div className="text-center">
              <Row>
                <Col lg={4} sm={6}>
                  <div className="about-card">
                    <img src={about1} />
                    <h5>Lorem Ipsum is simply</h5>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s,
                    </p>
                  </div>
                </Col>
                <Col lg={4} sm={6}>
                  <div className="about-card">
                    <img src={about2} />
                    <h5>Lorem Ipsum is simply</h5>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s,
                    </p>
                  </div>
                </Col>
                <Col lg={4} sm={6}>
                  <div className="about-card">
                    <img src={about3} />
                    <h5>Lorem Ipsum is simply</h5>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s,
                    </p>
                  </div>
                </Col>
              </Row>
            </div>
          </div>
        </Container>
      </section>
      {/* Adds code */}
      <div></div>

      <section className="section-padding">
        <Container className="container-space">
          <div className="about-shodow">
            <div className="main-heading">
              <h4>Our Story</h4>
            </div>
            <Row>
              <Col lg={7} sm={12} className="align-self-center">
                <p style={{ lineHeight: "36px" }}>
                  Content Number 1 Lorem Ipsum is simply dummy text of the
                  printing and typesetting industry. Lorem Ipsum has been the
                  industry's standard dummy text ever since the 1500s, when
                  unknown printer took a galley of type and scrambled it to make
                  a type specimen book. It has survived not only five centuries,
                  typesetting, remaining essentially unchanged. Content Number 1
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when unknown printer
                  took a galley of type and scrambled it to make a type specimen
                  book. It has survived not only five centuries, but also the
                  leap into electronic typesetting, remaining essentially
                  unchanged.{" "}
                </p>
              </Col>
              <Col lg={5} sm={12}>
                <div className="members-imgs">
                <img src={Members} />
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </section>

      <section className="section-padding">
        <Container className="container-space">
          <div className="About-Subject">
            <Row>
              <Col lg={6}>
                <div className="main-heading-bottom">
                  <h4 className="main-heading-h4" style={{ textAlign: "left" }}>
                    Meet The Brain
                  </h4>
                </div>
                <h6 className="main-heading-bottom-h6">Our Team</h6>
                <p>
                  Lorem Ipsum is simply dummy text of the printing <br />
                  and typesetting industry. Lorem Ipsum has been the <br />
                  industry's standard dummy
                </p>
              </Col>
              <Col lg={3} sm={6} className="p-0">
                <div className="team-card">
                  <div className="image-overlay">
                    <img src={Team1} />
                  </div>
                  <div className="team-content">
                    <h6>I Am a Name</h6>
                    <p>CEO</p>
                  </div>
                </div>
              </Col>
              <Col lg={3} sm={6} className="p-0">
                <div className="team-card">
                  <div className="image-overlay">
                    <img src={Team2} />
                  </div>
                  <div className="team-content">
                    <h6>I Am a Name</h6>
                    <p>Managing Director</p>
                  </div>
                </div>
              </Col>
              <Col lg={3} sm={6} className="p-0 see-members-link">
                <div className="team-card">
                  <Link to="">
                    See All Members <i className="fa fa-arrow-up" />
                  </Link>
                </div>
              </Col>
              <Col lg={3} sm={6} className="p-0">
                <div className="team-card">
                  <div className="image-overlay">
                    <img src={Team3} />
                  </div>
                  <div className="team-content">
                    <h6>I Am a Name</h6>
                    <p>Managing Director</p>
                  </div>
                </div>
              </Col>
              <Col lg={3} sm={6} className="p-0">
                <div className="team-card">
                  <div className="image-overlay">
                    <img src={Team4} />
                  </div>
                  <div className="team-content">
                    <h6>I Am a Name</h6>
                    <p>Managing Director</p>
                  </div>
                </div>
              </Col>
              <Col lg={3} sm={6} className="p-0">
                <div className="team-card">
                  <div className="image-overlay">
                    <img src={Team5} />
                  </div>
                  <div className="team-content">
                    <h6>I Am a Name</h6>
                    <p>Managing Director</p>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </section>

      <Footer />
    </>
  );
}

export default AboutUs;

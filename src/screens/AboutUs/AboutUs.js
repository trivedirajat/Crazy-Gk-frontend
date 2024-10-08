import React from "react";
import "../AboutUs/AboutUs.css";
import Header from "../../directives/header/header";
import { Col, Container, InputGroup, Row, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import about1 from "../../assets/images/img/about1.png";
import about2 from "../../assets/images/img/about2.png";
import about3 from "../../assets/images/img/about3.png";
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
      <section className="section-padding">
        <Container className="container-space">
          <div className="about-shodow">
            <div className="main-heading">
              <h4>Our Story</h4>
            </div>
            <Row>
              <Col lg={7} sm={12} className="align-self-center">
                <p style={{ lineHeight: "36px" }}>
                  In 2015, Akshaya Shrivastava and Atul Shrivastava launched the
                  Crazy GkTrick YouTube Channel with the mission to make
                  education accessible and affordable, particularly for students
                  who couldn't afford expensive coaching. The channel's unique
                  trick videos, which simplified difficult topics, quickly
                  resonated with millions of students, transforming Crazy
                  GkTrick into one of the leading educational platforms. This
                  initiative evolved into Firstroot Solution Private Limited. In
                  2021, Dushyant Rajoria, who shares the same vision, joined the
                  company, furthering the commitment to providing affordable
                  education to students. Coming from humble beginnings, we
                  deeply understand the financial challenges many face in
                  accessing quality education.
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
      <section className="section-padding-top">
        <Container className="container-space">
          <div className="about-shodow">
            <div className="main-heading">
              <h4>Vision</h4>
              <p
                style={{
                  lineHeight: "36px",
                  textAlign: "center",
                  textWrap: "word",
                }}
              >
                "At Firstroot Solution, we envision a world where every
                individual, no matter their background or circumstances, enjoys
                equal access to transformative educational resources. We are
                dedicated to fostering inclusivity, eliminating discrimination,
                and providing equitable opportunities for learning. We believe
                that education is a fundamental right that should be accessible
                to all, transcending socio-economic barriers."
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

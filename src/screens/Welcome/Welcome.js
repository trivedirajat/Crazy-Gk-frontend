import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import welcome1 from "../../assets/images/icon/welcome1.png";
import welcome2 from "../../assets/images/icon/welcome2.png";
import welcome3 from "../../assets/images/icon/welcome3.png";
import reporter from "../../assets/images/img/news-reporter 1.png";
import Study from "../../assets/images/img/studying 1.png";
import test from "../../assets/images/img/test 2.png";
import { EXAM_NOTES, PLAY_STORE_LINK, ROOT_APP_LINK } from "../../Config";
import WelcomeHeader from "../../directives/WelcomeHeader/WelcomeHeader";

const Welcome = () => {
  return (
    <>
      <WelcomeHeader />
      <div className="all-bannerBG">
        <Container fluid>
          <Row className="justify-content-center">
            <Col lg={12}>
              <div className="all-banner-content">
                <h3>Sowing Seeds for better Tomorrow</h3>
                <button
                  className="wel-btn"
                  // onClick={() => window.open(COURSES, "_blank")}
                >
                  Online Store <img src={welcome1} alt="welcome" />
                </button>
                <button
                  className="wel-btn"
                  onClick={() => window.open(PLAY_STORE_LINK, "_blank")}
                >
                  Crazy GK Trick App <img src={welcome2} alt="welcome" />
                </button>
                <button
                  className="wel-btn"
                  onClick={() => window.open(ROOT_APP_LINK, "_blank")}
                >
                  Root App <img src={welcome3} alt="welcome" />
                </button>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <section className="section-padding">
        <Container fluid className="container-space">
          <Row>
            <Col lg={6} sm={12}>
              <div className="website-list">
                <Row>
                  <Col sm={4} xs={12}>
                    <div className="Topic-card welcard">
                      <div className="taxonomy-image">
                        <img src={Study} alt="img" />
                      </div>
                      <div>
                        <a
                          href={EXAM_NOTES}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <h5>Exam Notes</h5>
                        </a>
                      </div>
                    </div>
                  </Col>
                  <Col sm={4} xs={12}>
                    <div className="Topic-card welcard">
                      <div className="taxonomy-image">
                        <img src={reporter} alt="img" />
                      </div>
                      <div>
                        <Link to={"/daily-current-affairs"}>
                          <h5>Current Affairs</h5>
                        </Link>
                      </div>
                    </div>
                  </Col>
                  <Col sm={4} xs={12}>
                    <div className="Topic-card welcard">
                      <div className="taxonomy-image">
                        <img src={test} alt="img" />
                      </div>
                      <div>
                        <Link to={"/quiz"}>
                          <h5>MCQ</h5>
                        </Link>
                      </div>
                    </div>
                  </Col>
                </Row>
                <Link to="/home">
                  <Button variant="success">Visit English Website</Button>
                </Link>
              </div>
            </Col>
            <Col lg={6}>
              <div className="website-list">
                <Row>
                  <Col sm={4} xs={12}>
                    <div className="Topic-card welcard">
                      <div className="taxonomy-image">
                        <img src={Study} alt="img" />
                      </div>
                      <div>
                        <a
                          href={EXAM_NOTES}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <h5>Exam Notes</h5>
                        </a>
                      </div>
                    </div>
                  </Col>
                  <Col sm={4} xs={12}>
                    <div className="Topic-card welcard">
                      <div className="taxonomy-image">
                        <img src={reporter} alt="img" />
                      </div>
                      <div>
                        <Link to={"/daily-current-affairs"}>
                          <h5>Current Affairs</h5>
                        </Link>
                      </div>
                    </div>
                  </Col>
                  <Col sm={4} xs={12}>
                    <div className="Topic-card welcard">
                      <div className="taxonomy-image">
                        <img src={test} alt="img" />
                      </div>
                      <div>
                        <Link to={"/quiz"}>
                          <h5>MCQ</h5>
                        </Link>
                      </div>
                    </div>
                  </Col>
                </Row>
                <Button variant="success">हिंदी वेबसाइट पर जाए </Button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Welcome;

import React from "react";
import "../footer/footer.css";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import DarkLogo from "../../assets/images/darklogo.png";
import { TEST_SERIES } from "../../Config";

function Footer() {
  return (
    <>
      <div className="footer-area">
        <Container className="container-space">
          <Row>
            <Col lg={3} className="align-self-center">
              <div className="footer-head">
                <img src={DarkLogo} alt="error" />
                <p>
                  Mere tranquil existence, that I neglect my talents. I should
                  be incapable of drawing a single stroke at the present
                </p>
              </div>
            </Col>
            <Col lg={9}>
              <Row>
                <Col lg={3} sm={6} xs={6} className="p-0">
                  <div className="footer-head">
                    <h4>Company</h4>
                    <ul>
                      <li>
                        <Link to="/about-us">About Us</Link>
                      </li>
                      <li>
                        <Link to="/study-material">Study Material</Link>
                        {/* <Link to="">Careers</Link> */}
                      </li>
                      <li>
                        <Link to="/monthly-current-affairs">
                          Current Affairs
                        </Link>
                        {/* <Link to="">Features</Link> */}
                      </li>
                      <li>
                        <Link to="/quiz">Quiz Exam</Link>
                        {/* <Link to="">Maps</Link> */}
                      </li>
                      <li>
                        <a href={TEST_SERIES} target="_blank" rel="noreferrer">
                          Test series
                        </a>
                        {/* <Link to="">Works</Link> */}
                      </li>
                      {/* <li>
                        <Link to="/subscription">Plans</Link>
                      </li> */}
                    </ul>
                  </div>
                </Col>
                <Col lg={3} sm={6} xs={6} className="p-0">
                  <div className="footer-head">
                    <h4>Resources</h4>
                    <ul>
                      <li>
                        <Link to="/trending-on-youtube">Videos</Link>
                      </li>
                      <li>
                        <Link to="/whats-new">What’s New </Link>
                      </li>
                      <li>
                        <Link to="/latest-blogs">Blogs</Link>
                      </li>
                      <li>
                        <Link to="#">Plans</Link>
                      </li>
                      {/* <li>
                        <Link to="">Mandhya Pradesh</Link>
                      </li>
                      <li>
                        <Link to="">Uttarakhand</Link>
                      </li>
                      <li>
                        <Link to="">Jharkhand</Link>
                      </li>
                      <li>
                        <Link to="">Haryana</Link>
                      </li>
                      <li>
                        <Link to="">Uttar pradesh</Link>
                      </li> */}
                    </ul>
                  </div>
                </Col>
                {/* <Col lg={3} sm={6} xs={6} className="p-0">
                  <div className="footer-head">
                    <h4>Resources</h4>
                    <ul>
                      <li>
                        <Link to="/latest-blogs">Blog</Link>
                      </li>
                      <li>
                        <Link to="">Newsletter</Link>
                      </li>
                      <li>
                        <Link to="">Events</Link>
                      </li>
                      <li>
                        <Link to="">Help centre</Link>
                      </li>
                      <li>
                        <Link to="">Tutorials</Link>
                      </li>
                      <li>
                        <Link to="">Support</Link>
                      </li>
                    </ul>
                  </div>
                </Col> */}
                <Col lg={3} sm={6} xs={12} className="p-0">
                  <div className="footer-head contact-footer" id="footer">
                    <h4>Contact Us</h4>
                    <ul>
                      <li>
                        <a
                          href="mailto:support@crazygktrick"
                          style={{ textDecoration: "none" }}
                        >
                          support@crazygktrick
                        </a>
                      </li>
                      <li style={{ display: "inline", listStyle: "none" }}>
                        <a
                          href="tel:+919109624872"
                          style={{
                            textDecoration: "none",
                            margin: "0 5px 0 0",
                          }}
                        >
                          +91 9109624872
                        </a>{" "}
                        |
                        <a
                          href="tel:+916232363639"
                          style={{ textDecoration: "none", margin: "0 5px" }}
                        >
                          +91 6232363639
                        </a>{" "}
                        <a
                          href="tel:+917898973739"
                          style={{ textDecoration: "none" }}
                        >
                          +91 7898973739
                        </a>
                      </li>

                      <li>
                        <a
                          href="https://study.crazygktrick.com/"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          crazygktrick
                        </a>
                      </li>
                    </ul>
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://www.facebook.com/crazygktricks"
                    >
                      <i className="fa fa-facebook" />
                    </a>
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://twitter.com/CrazyGkTrick?s=08"
                    >
                      <i className="fa fa-twitter" />
                    </a>
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href="http://Telegramt.me/crazygktrick_official_channel"
                    >
                      <i className="fa fa-telegram" />
                    </a>

                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://www.instagram.com/crazygktrick_official/?utm_medium=copy_link"
                    >
                      <i className="fa fa-instagram" />
                    </a>
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://whatsapp.com/channel/0029VaAfN4G6xCSPo6xpcm42"
                    >
                      <i className="fa fa-whatsapp" />
                    </a>
                  </div>
                </Col>
                <Col lg={3} sm={6} xs={12} className="p-0">
                  <div className="footer-head contact-footer" id="footer">
                    <h4>YouTube Channel</h4>
                    <ul>
                      <li>
                        <a
                          href="https://www.youtube.com/@CrazyGkTrick"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Crazy GkTrick youtube
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.youtube.com/@RootByCrazyGkTrick"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Root youtube
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.youtube.com/@thefinbaba"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Finbaba youtube
                        </a>
                      </li>
                    </ul>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
          <hr style={{ color: "#fff" }} />
          <div className="text-center">
            <p
              className="text-white mt-4"
              style={{ fontFamily: "'FontAwesome'" }}
            >
              {" "}
              &#xf1f9; 2024 CrazyGK. All rights reserved.
            </p>
          </div>
        </Container>
      </div>
    </>
  );
}

export default Footer;

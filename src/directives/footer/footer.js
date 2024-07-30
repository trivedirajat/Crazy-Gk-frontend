import React from "react";
import "../footer/footer.css";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import DarkLogo from "../../assets/images/darklogo.png";

function Footer() {
  return (
    <>
      <div className="footer-area">
        <Container className="container-space">
          <Row>
            <Col lg={4} className="align-self-center">
              <div className="footer-head">
                <img src={DarkLogo} />
                <p>
                  Mere tranquil existence, that I neglect my talents. I should
                  be incapable of drawing a single stroke at the present
                </p>
               
              </div>
            </Col>
           <Col lg={8}>
            <Row>
            <Col lg={3} sm={6} xs={6} className="p-0">
              <div className="footer-head">
                <h4>Company</h4>
                <ul>
                  <li>
                    <Link to="/about-us">About Us</Link>
                  </li>
                  <li>
                    <Link to="">Careers</Link>
                  </li>
                  <li>
                    <Link to="">Features</Link>
                  </li>
                  <li>
                    <Link to="">Maps</Link>
                  </li>
                  <li>
                    <Link to="">Works</Link>
                  </li>
                  <li>
                    <Link to="/subscription">Plans</Link>
                  </li>
                </ul>
              </div>
            </Col>
            <Col lg={3} sm={6} xs={6} className="p-0">
              <div className="footer-head">
                <h4>States</h4>
                <ul>
                  <li>
                    <Link to="">Chattisgarh</Link>
                  </li>
                  <li>
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
                  </li>
                </ul>
              </div>
            </Col>
            <Col lg={3} sm={6} xs={6} className="p-0">
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
            </Col>
            <Col lg={3} sm={6} xs={12} className="p-0">
              <div className="footer-head contact-footer">
                <h4>Contact Us</h4>
                <ul>
                  <li>
                    <Link>
                    dummymailid@gmail.com
                    </Link>
                  </li>
                  <li>
                    <Link>
                    +91 87654 12323
                    </Link>
                  </li>
                  <li>
                    <Link>
                    dummywebsite.com
                    </Link>
                  </li>
                </ul>
                <a>
                  <i className="fa fa-linkedin" />
                </a>
                <a>
                  <i className="fa fa-facebook" />
                </a>
                <a>
                  <i className="fa fa-xing" />
                </a>
                
                <a>
                  <i className="fa fa-instagram" />
                </a>
              </div>
            </Col>
            </Row>
           </Col>
          </Row>
          <hr style={{color: "#fff"}}/>
          <div className="text-center">
            <p className="text-white mt-4" style={{fontFamily:"'FontAwesome'"}}> &#xf1f9; 2024 CrazyGK. All rights reserved.</p>
          </div>
        </Container>
      </div>
    </>
  );
}

export default Footer;

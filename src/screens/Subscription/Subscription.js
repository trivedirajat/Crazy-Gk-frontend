import React from "react";
import Header from "../../directives/header/header";
import { Button, Col, Container, Form, InputGroup, Row, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../Subscription/Subscription.css";
import Banner1 from "../../assets/images/img/banner1.png";
import Carousel from "react-multi-carousel";
import Footer from "../../directives/footer/footer";

function Subscription(props) {
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
          </div>
          <Row className="justify-content-center">
            <Col lg={4} sm={6}>
              <div className="subscription-card">
                <h2>Freebie</h2>
                <p>
                  Ideal for individuals who need quick access to basic features.
                </p>
                <a>
                  $0 <span>/ Month</span>
                </a>
                <br />
                <Button><Link to="/subscription-payment">Get Started Now</Link></Button>
                <ul>
                  <li>
                    <i className="fa fa-check-circle" /> Study Material, Current
                    Affairs
                  </li>
                  <li>
                    <i className="fa fa-check-circle" /> What’s New and latest
                    blogs
                  </li>
                  <li>
                    <i className="fa fa-times-circle" /> Ad free every screen.
                  </li>
                  <li>
                    <i className="fa fa-times-circle" /> Lorem Ipsum is simply dummy
                  </li>
                  <li>
                    <i className="fa fa-times-circle" /> Lorem Ipsum is simply dummy
                  </li>
                  <li>
                    <i className="fa fa-times-circle" /> Lorem Ipsum is simply dummy
                  </li>
                  <li>
                    <i className="fa fa-times-circle" /> Lorem Ipsum is simply dummy
                  </li>
                </ul>
              </div>
            </Col>
            <Col lg={4} sm={6}>
              <div className="subscription-card subscription-darkcard">
                <h2>Standard Package    </h2>
                <a>
                $25 <span>/ Month</span>
                </a>
                <br />
                <Button><Link to="/subscription-payment">Get Started Now</Link></Button>
                <ul>
                  <li>
                  <i className="fa fa-times-circle" /> Ad free every screen.
                    Affairs
                  </li>
                  <li>
                  <i className="fa fa-times-circle" /> Lorem Ipsum is simply dummy
                    blogs
                  </li>
                  <li>
                    <i className="fa fa-times-circle" /> Lorem Ipsum is simply dummy
                  </li>
                  <li>
                    <i className="fa fa-times-circle" /> Lorem Ipsum is simply dummy
                  </li>
                  <li>
                    <i className="fa fa-times-circle" /> Lorem Ipsum is simply dummy
                  </li>
                  <li>
                    <i className="fa fa-times-circle" /> Lorem Ipsum is simply dummy
                  </li>
                  <li>
                    <i className="fa fa-times-circle" /> Lorem Ipsum is simply dummy
                  </li>
                </ul>
              </div>
            </Col>
            <Col lg={4} sm={6}>
              <div className="subscription-card">
                <h2>Pro Plus</h2>
                <p>
                Lorem Ipsums who need quick access to basic features.
                </p>
                <a>
                $100 <span>/ Month</span>
                </a>
                <br />
                <Button><Link to="/subscription-payment">Get Started Now</Link></Button>
                <ul>
                  <li>
                    <i className="fa fa-times-circle" /> Lorem Ipsum is simply dummy
                  </li>
                  <li>
                  <i className="fa fa-times-circle" /> Lorem Ipsum is simply dummy
                  </li>
                  <li>
                  <i className="fa fa-times-circle" /> Lorem Ipsum is simply dummy
                  </li>
                  <li>
                    <i className="fa fa-times-circle" /> Lorem Ipsum is simply dummy
                  </li>
                  <li>
                    <i className="fa fa-times-circle" /> Lorem Ipsum is simply dummy
                  </li>
                  <li>
                    <i className="fa fa-times-circle" /> Lorem Ipsum is simply dummy
                  </li>
                  <li>
                    <i className="fa fa-times-circle" /> Lorem Ipsum is simply dummy
                  </li>
                </ul>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
     {/* Adds code */}
     <div></div>

      <section className="section-padding">
        <Container fluid className="container-space">
          <div className="main-heading">
            <h4>Compare & get your plan</h4>
          </div>
          <div className="mt-4 mb-4">
          <Row className="justify-content-end text-center">
            <Col lg={3} sm={4} xs={4}>
              <h6>Free</h6>
              <Button variant="success" className="sub-btn">Get started</Button>
            </Col>
            <Col lg={3} sm={4} xs={4}>
              <h6>Standard</h6>
              <Button variant="success" className="sub-btn">Get for $25</Button>
            </Col>
            <Col lg={3} sm={4} xs={4}>
              <h6>Pro Plus</h6>
              <Button variant="success" className="sub-btn">Get for $100</Button>
            </Col>
          </Row>
          </div>
          <Table responsive bordered >
      <thead>
        <tr>
          <th>Basis Of comparison</th>
          <th></th>
          <th></th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Lorem</td>
          <td>Lorem</td>
          <td>Lorem</td>
          <td>Lorem</td>
        </tr>
        <tr>
          <td>Lorem</td>
          <td>Lorem</td>
          <td>Lorem</td>
          <td>Lorem</td>
        </tr>
        <tr>
          <th>Basis Of comparison</th>
          <th></th>
          <th></th>
          <th></th>
        </tr>
        <tr>
          <td>Lorem</td>
          <td className="text-center"><i className="fa fa-check"/></td>
          <td></td>
          <td className="text-center"><i className="fa fa-check"/></td>
        </tr>
        <tr>
          <td>Lorem</td>
          <td className="text-center"><i className="fa fa-check"/></td>
          <td className="text-center"><i className="fa fa-check"/></td>
          <td></td>
        </tr>
        <tr>
          <td>Lorem</td>
          <td className="text-center"><i className="fa fa-check"/></td>
          <td className="text-center"><i className="fa fa-check"/></td>
          <td></td>
        </tr>
        <tr>
          <td>Lorem</td>
          <td className="text-center"><i className="fa fa-check"/></td>
          <td></td>
          <td className="text-center"><i className="fa fa-check"/></td>
        </tr>
        <tr>
          <th>Basis Of comparison</th>
          <th></th>
          <th></th>
          <th></th>
        </tr>
        <tr>
          <td>Lorem</td>
          <td className="text-center"><i className="fa fa-check"/></td>
          <td className="text-center"><i className="fa fa-check"/></td>
          <td></td>
        </tr>
        <tr>
          <td>Lorem</td>
          <td></td>
          <td className="text-center"><i className="fa fa-check"/></td>
          <td></td>
        </tr>
        <tr>
          <td>Lorem</td>
          <td className="text-center"><i className="fa fa-check"/></td>
          <td className="text-center"><i className="fa fa-check"/></td>
          <td className="text-center"><i className="fa fa-check"/></td>
        </tr>
        <tr>
          <td>Lorem</td>
          <td className="text-center"><i className="fa fa-check"/></td>
          <td></td>
          <td className="text-center"><i className="fa fa-check"/></td>
        </tr>
      </tbody>
    </Table>
        </Container>
      </section>

      <Footer />
    </>
  );
}

export default Subscription;

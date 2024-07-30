import React, { useEffect, useState } from "react";
import "../WhatsNew/WhatsNew.css"
import Header from "../../directives/header/header";
import { Col, Container, Form, InputGroup, Row } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import Banner1 from "../../assets/images/img/banner1.png";
import Carousel from "react-multi-carousel";
import Footer from "../../directives/footer/footer";
import Editorials from "../../assets/images/img/Editorials.png";
import { useDispatch, useSelector } from "react-redux";
import { fetchBlog } from "../../reduxx/action/BlogAction";
import moment from "moment";

function LatestBlogs(props) {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { getBlog } = useSelector(state => state.blog)

  console.log('getBlog', getBlog);
  useEffect(() => {
    dispatch(fetchBlog({
      limit: 100,
      offset: 0
    }))
  }, [dispatch])

  return (
    <>
      <Header />
      <div className="all-bannerBG">
        <Container fluid className="container-space">
          <Row className="justify-content-center">
            <Col lg={6} sm={8}>
              <div className="all-banner-content">
                <h3>Latest Blogs</h3>
                <Link to="/home">Home </Link>
                <span>
                  <i className="fa fa-angle-double-right" /> Latest Blogs
                </span>
                <span>
                  <i className="fa fa-angle-double-right" /> View All
                </span>
                <InputGroup className="mb-3">
                  <Form.Control placeholder="Search blog" />
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
            <Col lg={9} sm={12}>
              {getBlog?.data?.length > 0 ? getBlog?.data.map(item => (
                <div className="About-Subject mb-4">
                  <div className="About-Subject">
                    <Row>
                      <Col lg={5} sm={5} className="mb-4">
                        <div className="Editorials-card">
                          {/* <img src={Editorials} /> */}
                          <img src={getBlog?.base_url + item?.image} />
                        </div>
                      </Col>
                      <Col lg={7} sm={7} className="mb-4">
                        <div className="Editorials-content">
                          <h6> {item?.title} </h6>
                          <p>
                            {item?.description}
                          </p>
                        </div>
                        <div className="what-read-btn">
                          <span style={{ color: '#04aa50' }} onClick={() => navigate(`/blog-details`, { state: { blogData: item, base_url: getBlog?.base_url } })}>Read More</span>
                        </div>
                      </Col>
                    </Row>
                  </div>
                  <div className="what-date">
                    <Link to="">{moment(item?.createdDate).format('DD MMM YYYY')} :</Link>
                    <span> {item?.title} </span>
                  </div>
                </div>)) : null}
            </Col>
            <Col lg={3} sm={12}>
              <div className="About-Subject"></div>
            </Col>
          </Row>
        </Container>
      </section>
      <Footer />
    </>
  );
}

export default LatestBlogs;

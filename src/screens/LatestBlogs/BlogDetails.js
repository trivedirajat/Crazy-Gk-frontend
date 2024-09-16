import React from "react";
import "../WhatsNew/WhatsNew.css";
import Header from "../../directives/header/header";
import { Col, Container, Row } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import Footer from "../../directives/footer/footer";
import moment from "moment";
import placeholder from "../../assets/images/placeholder.png";
import HtmlRenderer from "../../utils/stripHtmlTags";

function BlogDetails(props) {
  const location = useLocation();
  const { blogData, base_url } = location.state || {};
  return (
    <>
      <Header />
      <div className="all-bannerBG">
        <Container fluid className="container-space">
          <Row className="justify-content-center">
            <Col lg={6} sm={8}>
              <div className="all-banner-content">
                <h3>Blog Details</h3>
                <Link to="/home">Home </Link>
                <span>
                  <i className="fa fa-angle-double-right" /> Blog Details
                </span>
                {/* Search Bar */}
                {/* <InputGroup className="mb-3">
                  <Form.Control placeholder="Search blog" />
                  <InputGroup.Text id="basic-addon2">
                    <i className="fa fa-search" />
                  </InputGroup.Text>
                </InputGroup> */}
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <section className="section-padding">
        <Container fluid className="container-space">
          <Row className="justify-content-center">
            <Col lg={10} sm={10}>
              <div className="About-Subject">
                <div className="Editorials-card">
                  {/* <img src={Editorials} /> */}
                  <img
                    style={{
                      maxWidth: "300px",
                    }}
                    src={blogData?.image || placeholder}
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = placeholder;
                    }}
                    alt="Editorials"
                  />
                </div>
                <div
                  className="Editorials-content"
                  style={{ marginTop: "10px" }}
                >
                  <h6> {blogData?.title} </h6>
                  <HtmlRenderer htmlContent={blogData?.description} />
                </div>
                <div className="what-date">
                  <span className="blog-date">
                    {moment(blogData?.createdDate).format("DD MMM YYYY")} :
                  </span>
                  <span> {blogData?.title} </span>
                </div>
              </div>
              {/* <div className="About-Subject">
                <div className="Editorials-card">
                  <img src={Editorials} />
                </div>
                <div className="Editorials-content">
                  <h6> History of Khalistan Movement in canada </h6>
                  <p>
                    Content Number 1 Lorem Ipsum is simply dummy text of the
                    printing and typesetting industry. Lorem Ipsum has been the
                    industry's standard dummy text ever since the 1500s, when
                    unknown printer took a galley of type and scrambled it to
                    make a type specimen book. It has survived not only five
                    centuries, but also the leap into electronic
                    typesetting,Content Number 1 Lorem Ipsum is simply dummy
                    text of the printing and typesetting industry. Lorem Ipsum
                    has been the industry's standard dummy text ever since the
                    1500s, when unknown printer took a galley of type and
                    scrambled it to make a type specimen book. It has survived
                    not only five centuries, but also the leap into electronic
                    typesetting,Content Number 1 Lorem Ipsum is simply dummy
                    text of the printing and typesetting industry. Lorem Ipsum
                    has been the industry's standard dummy text ever since the
                    1500s, when unknown printer took a galley of type and
                    scrambled it to make a type specimen book. It has survived
                    not only five centuries, but also the leap into electronic
                    typesetting,Content Number 1 Lorem Ipsum is simply dummy
                    text of the printing and typesetting industry. Lorem Ipsum
                    has been the industry's standard dummy text ever since the
                    1500s, when unknown printer took a galley of type and
                    scrambled it to make a type specimen book.
                  </p>
                </div>
                <div className="what-date">
                  <Link to="">06 October 2023 :</Link>
                  <span> I am A topic Heading </span>
                </div>
              </div> */}
            </Col>
          </Row>
        </Container>
      </section>
      <Footer />
    </>
  );
}

export default BlogDetails;

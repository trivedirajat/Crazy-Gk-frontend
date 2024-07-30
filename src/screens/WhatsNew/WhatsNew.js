import React, { useEffect } from "react";
import "../WhatsNew/WhatsNew.css"
import Header from "../../directives/header/header";
import { Col, Container, Form, InputGroup, Row } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import Footer from "../../directives/footer/footer";
import Editorials from "../../assets/images/img/Editorials.png";
import { useDispatch, useSelector } from "react-redux";
import { fetchWhatsNew } from "../../reduxx/action/BlogAction";
import moment from "moment/moment";


function WhatsNew(props) {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { getWhatsNew } = useSelector(state => state.blog)

  console.log('getWhatsNew', getWhatsNew);
  useEffect(() => {
    dispatch(fetchWhatsNew({
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
                <h3>What's New</h3>
                <Link to="/home">Home </Link>
                <span>
                  <i className="fa fa-angle-double-right" /> What,s New
                </span>
                <span>
                  <i className="fa fa-angle-double-right" /> View All
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
            <Col lg={9} sm={12}>
              {getWhatsNew?.data?.length > 0 ? getWhatsNew?.data.map(item => (
                <div className="About-Subject">
                  <div className="About-Subject">
                    <Row>
                      <Col lg={5} sm={5} className="mb-4">
                        <div className="Editorials-card">
                          {/* <img src={Editorials} /> */}
                          <img src={getWhatsNew?.base_url + item?.image} />
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
                          <span style={{ color: '#04aa50' }} onClick={() => navigate(`/whats-details`, { state: { whatsData: item, base_url: getWhatsNew?.base_url } })}>Read More</span>
                        </div>
                      </Col>
                    </Row>
                  </div>
                  <div className="what-date">
                    <Link to="">{moment(item?.createdDate).format('DD MMM YYYY')} :</Link>
                    <span> {item?.title} </span>
                  </div>
                </div>)) : null}
              {/* Adds code */}
              <div></div>

              {/* <div className="About-Subject mb-4">
                <div className="About-Subject">
                  <Row>
                    <Col lg={5} sm={5} className="mb-4">
                      <div className="Editorials-card">
                        <img src={Editorials} />
                      </div>
                    </Col>
                    <Col lg={7} sm={7} className="mb-4">
                      <div className="Editorials-content">
                        <h6> History of Khalistan Movement in canada </h6>
                        <p>
                          Content Number 1 Lorem Ipsum is simply dummy text of
                          the printing and typesetting industry. Lorem Ipsum has
                          been the industry's standard dummy text ever since the
                          1500s, when unknown printer took a galley of type and
                          scrambled it to make a type specimen book. It has
                          survived not only five centuries, but also the leap
                          into electronic typesetting,
                        </p>
                      </div>
                      <div className="what-read-btn">
                        <Link to="">Read More</Link>
                      </div>
                    </Col>
                  </Row>
                </div>
                <div className="what-date">
                  <Link to="">06 October 2023 :</Link>
                  <span> I am A topic Heading </span>
                </div>
              </div>
              <div className="About-Subject mb-4">
                <div className="About-Subject">
                  <Row>
                    <Col lg={5} sm={5} className="mb-4">
                      <div className="Editorials-card">
                        <img src={Editorials} />
                      </div>
                    </Col>
                    <Col lg={7} sm={7} className="mb-4">
                      <div className="Editorials-content">
                        <h6> History of Khalistan Movement in canada </h6>
                        <p>
                          Content Number 1 Lorem Ipsum is simply dummy text of
                          the printing and typesetting industry. Lorem Ipsum has
                          been the industry's standard dummy text ever since the
                          1500s, when unknown printer took a galley of type and
                          scrambled it to make a type specimen book. It has
                          survived not only five centuries, but also the leap
                          into electronic typesetting,
                        </p>
                      </div>
                      <div className="what-read-btn">
                        <Link to="">Read More</Link>
                      </div>
                    </Col>
                  </Row>
                </div>
                <div className="what-date">
                  <Link to="">06 October 2023 :</Link>
                  <span> I am A topic Heading </span>
                </div>
              </div>
              <div className="About-Subject mb-4">
                <div className="About-Subject">
                  <Row>
                    <Col lg={5} sm={5} className="mb-4">
                      <div className="Editorials-card">
                        <img src={Editorials} />
                      </div>
                    </Col>
                    <Col lg={7} sm={7} className="mb-4">
                      <div className="Editorials-content">
                        <h6> History of Khalistan Movement in canada </h6>
                        <p>
                          Content Number 1 Lorem Ipsum is simply dummy text of
                          the printing and typesetting industry. Lorem Ipsum has
                          been the industry's standard dummy text ever since the
                          1500s, when unknown printer took a galley of type and
                          scrambled it to make a type specimen book. It has
                          survived not only five centuries, but also the leap
                          into electronic typesetting,
                        </p>
                      </div>
                      <div className="what-read-btn">
                        <Link to="">Read More</Link>
                      </div>
                    </Col>
                  </Row>
                </div>
                <div className="what-date">
                  <Link to="">06 October 2023 :</Link>
                  <span> I am A topic Heading </span>
                </div>
              </div> */}
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

export default WhatsNew;

import React, { useEffect } from "react";
import "../home/index.css";
import Header from "../../directives/header/header";
import { Col, Container, Form, InputGroup, Row } from "react-bootstrap";
import Footer from "../../directives/footer/footer";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchSubject } from "../../reduxx/action/SubjectAction";
import placeholder from "../../assets/images/placeholder.png";

function SubjectWiseVideo(props) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { getsubject } = useSelector((state) => state.subject);
  console.log("getsubject", getsubject);
  useEffect(() => {
    dispatch(
      fetchSubject({
        offset: 0,
        limit: 100,
      })
    );
  }, []);
  return (
    <>
      <Header />
      <div className="all-bannerBG">
        <Container fluid className="container-space">
          <Row className="justify-content-center">
            <Col lg={6} sm={8}>
              <div className="all-banner-content">
                <h3>Subject Wise Video</h3>
                <Link to="/home">Home </Link>
                <span>
                  <i className="fa fa-angle-double-right" /> Subject Wise Video
                </span>
                <InputGroup className="mb-3">
                  <Form.Control placeholder="Search Subject" />
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
          <div className="topic-box space-section">
            {getsubject?.data?.length > 0 &&
              getsubject?.data.map((item) => (
                <div className="Topic-card">
                  <div className="taxonomy-image">
                    {/* <img src={Topic1} /> */}
                    <img
                      src={item?.image || placeholder}
                      alt={item?.subject_name}
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = placeholder;
                      }}
                    />
                  </div>
                  <div>
                    <h5
                      onClick={() =>
                        navigate(`/trending-on-youtube`, {
                          state: { subject: item },
                        })
                      }
                    >
                      {item?.subject_name}
                    </h5>
                  </div>
                </div>
              ))}
            {/* <div className="Topic-card">
            <div className="taxonomy-image">
              <img src={Topic2} />
              </div>
              <div>
                <h5 onClick={() => navigate(`/trending-on-youtube`, { state: { name: 'Technology' } })}>TECHNOLOGY</h5>
              </div>
            </div>
            <div className="Topic-card">
            <div className="taxonomy-image">
              <img src={Topic3} />
              </div>
              <div>
                <h5 onClick={() => navigate(`/trending-on-youtube`, { state: { name: 'Anthropology' } })}>Anthropology</h5>
              </div>
            </div>
            <div className="Topic-card">
            <div className="taxonomy-image">
              <img src={Topic4} />
              </div>
              <div>
                <h5 onClick={() => navigate(`/trending-on-youtube`, { state: { name: 'Philosophy' } })}>Philosophy</h5>
              </div>
            </div>
            <div className="Topic-card">
            <div className="taxonomy-image">
              <img src={Topic5} />
              </div>
              <div>
                <h5 onClick={() => navigate(`/trending-on-youtube`, { state: { name: 'Agriculture' } })}>Agriculture</h5>
              </div>
            </div>
            <div className="Topic-card">
            <div className="taxonomy-image">
              <img src={Topic6} />
              </div>
              <div>
                <h5 onClick={() => navigate(`/trending-on-youtube`, { state: { name: 'POLITY' } })}>POLITY</h5>
              </div>
            </div>
            <div className="Topic-card">
            <div className="taxonomy-image">
              <img src={Topic7} />
              </div>
              <div>
                <h5 onClick={() => navigate(`/trending-on-youtube`, { state: { name: 'History' } })}>HISTORY</h5>
              </div>
            </div>
            <div className="Topic-card">
            <div className="taxonomy-image">
              <img src={Topic8} />
              </div>
              <div>
                <h5 onClick={() => navigate(`/trending-on-youtube`, { state: { name: 'Geography' } })}>GEOGRAPHY</h5>
              </div>
            </div>
            <div className="Topic-card">
            <div className="taxonomy-image">
              <img src={Topic9} />
              </div>
              <div>
                <h5 onClick={() => navigate(`/trending-on-youtube`, { state: { name: 'Economics' } })}>ECONOMICS</h5>
              </div>
            </div>
            <div className="Topic-card">
            <div className="taxonomy-image">
              <img src={Topic10} />
              </div>
              <div>
                <h5 onClick={() => navigate(`/trending-on-youtube`, { state: { name: 'Mathematics' } })}>MATHEMATICS</h5>
              </div>
            </div> */}
          </div>
        </Container>
      </section>

      {/* Adds code  */}
      <div></div>
      <Footer />
    </>
  );
}

export default SubjectWiseVideo;

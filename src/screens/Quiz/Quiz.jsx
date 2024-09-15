import React, { useEffect, useState } from "react";
import "../home/index.css";
import Header from "../../directives/header/header";
import { Col, Container, Row } from "react-bootstrap";
import Footer from "../../directives/footer/footer";
import { Link, useNavigate } from "react-router-dom";
import Topic1 from "../../assets/images/img/science 2.png";
import axios from "axios";
import { BaseURL } from "../../Config";
import placeholder from "../../assets/images/placeholder.png";
import { useSelector } from "react-redux";

function Quiz(props) {
  const navigate = useNavigate();
  const [quizList, setQuizList] = useState([]);
  useEffect(() => {
    const getquize = async () => {
      const res = await axios.get(`${BaseURL}/quiz/getQuizs`);
      if (res.data?.data.length > 0) {
        setQuizList(res.data.data);
      }
    };
    getquize();
  }, []);
  const { getsubject } = useSelector((state) => state.subject);
  return (
    <>
      <Header />
      <div className="all-bannerBG">
        <Container fluid className="container-space">
          <Row className="justify-content-center">
            <Col lg={6} sm={8}>
              <div className="all-banner-content">
                <h3>Live Quiz</h3>
                <Link to="/home">Home </Link>
                <span>
                  <i className="fa fa-angle-double-right" /> Live Quiz
                </span>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <section className="section-padding">
        <Container fluid className="container-space">
          <div className="main-heading">
            <h4> Live Quiz</h4>
          </div>

          <div className="topic-box">
            {quizList.length > 0 &&
              quizList.map((item) => (
                <div className="Topic-card">
                  <div className="taxonomy-image">
                    {/* <img src={Topic1} /> */}
                    <img
                      alt={item?.subject_name}
                      src={
                        item?.image
                          ? getsubject?.base_url + item?.image
                          : Topic1
                      }
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = placeholder;
                      }}
                    />
                  </div>
                  <div>
                    <h5
                      onClick={() => navigate(`/subjectwisequiz/${item?._id}`)}
                    >
                      {item?.subject_name}
                    </h5>
                  </div>
                </div>
              ))}
          </div>
          {/* <Link className="all-view">Watch More</Link> */}
        </Container>
      </section>

      {/* Adds code  */}
      <div></div>
      <Footer />
    </>
  );
}

export default Quiz;

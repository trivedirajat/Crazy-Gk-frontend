import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { BaseURL } from "../../Config";
import placeholder from "../../assets/images/placeholder.png";
import Footer from "../../directives/footer/footer";
import Header from "../../directives/header/header";
import Axios from "../../utils/Axios";
import "../home/index.css";

function Quiz(props) {
  const navigate = useNavigate();
  const [quizList, setQuizList] = useState([]);
  useEffect(() => {
    const getquize = async () => {
      const res = await Axios.get(`${BaseURL}/quiz/getQuizs`);
      if (res.data?.data.length > 0) {
        setQuizList(res.data.data);
      }
    };
    getquize();
  }, []);
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
                <div
                  className="Topic-card"
                  key={item?._id}
                  style={{ cursor: "pointer" }}
                  onClick={() => navigate(`/subjectwisequiz/${item?._id}`)}
                >
                  <div className="taxonomy-image">
                    {/* <img src={Topic1} /> */}
                    <img
                      alt={item?.subject_name}
                      src={item?.image || placeholder}
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = placeholder;
                      }}
                    />
                  </div>
                  <div>
                    <h5>{item?.subject_name}</h5>
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

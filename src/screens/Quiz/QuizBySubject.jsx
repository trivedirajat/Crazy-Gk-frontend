import React, { useEffect, useState } from "react";
import "../home/index.css";
import Header from "../../directives/header/header";
import { Button, Col, Container, Row } from "react-bootstrap";
import Footer from "../../directives/footer/footer";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { BaseURL } from "../../Config";
import moment from "moment";

function QuizBySubject(props) {
  const { subjectId } = useParams();
  const navigate = useNavigate();
  const [quizList, setQuizList] = useState([]);
  useEffect(() => {
    const getquize = async () => {
      const res = await axios.get(
        `${BaseURL}/quiz/getQuizsbySubject/${subjectId}`
      );
      if (res.data?.data.length > 0) {
        setQuizList(res.data.data);
      }
    };
    getquize();
  }, [subjectId]);
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
          {quizList?.map((quiz, index) => {
            return (
              <div className="live-quiz" style={{ marginTop: "20px" }}>
                <Row>
                  <Col lg={10}>
                    <p>
                      {`${quiz?.name} | ${moment(quiz?.createdDate).format(
                        "DD MMMM YYYY"
                      )}`}
                    </p>
                    <div>
                      <span>
                        <i className="fa fa-question-circle-o" />{" "}
                        {`${quiz?.questionList?.length} Questions`}
                      </span>
                      <span>
                        <i className="fa fa-file-text-o" />{" "}
                        {`${quiz?.totalMarks} Marks`}
                      </span>
                      <span>
                        <i className="fa fa-clock-o" /> 60 Mins
                      </span>
                    </div>
                  </Col>
                  <Col lg={2} className="align-self-center">
                    <Button onClick={() => navigate(`/startquiz/${subjectId}`)}>
                      Start Now
                    </Button>
                  </Col>
                </Row>
              </div>
            );
          })}

          {/* <Link className="all-view">Watch More</Link> */}
        </Container>
      </section>

      {/* Adds code  */}
      <div></div>
      <Footer />
    </>
  );
}

export default QuizBySubject;

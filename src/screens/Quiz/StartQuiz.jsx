import React, { useEffect, useState } from "react";
import "../home/index.css";
import Header from "../../directives/header/header";
import {
  Alert,
  Button,
  Card,
  Col,
  Container,
  Form,
  Row,
} from "react-bootstrap";
import Footer from "../../directives/footer/footer";
import { Link, useLocation } from "react-router-dom";
import { BaseURL } from "../../Config";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";
import Axios from "../../utils/Axios";
import QuizResultModal from "../../components/modal/QuizResultModal";

function StartQuiz(props) {
  const {
    auth: { responseLogin: user },
  } = useSelector((state) => {
    return state;
  });
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [showResultModal, setShowResultModal] = useState({
    show: false,
    result: {},
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { search } = useLocation();
  const QuizeId = new URLSearchParams(search).get("qi") || "";
  const subjectId = new URLSearchParams(search).get("subid") || "";
  const [userVierfy, setUserVirefy] = useState(false);
  const [quizList, setQuizList] = useState([]);
  useEffect(() => {
    const getquize = async () => {
      try {
        const res = await Axios.get(`${BaseURL}/quiz/startQuiz/${subjectId}`, {
          params: {
            QuizeId,
            subjectId,
          },
        });
        if (res.data?.data.length > 0) {
          setQuizList(res.data.data);
        }
      } catch (error) {
        toast.error(error?.response?.data?.message || "Something went wrong");
      }
    };
    if (userVierfy) {
      getquize();
    }
  }, [subjectId, userVierfy, QuizeId]);
  useEffect(() => {
    const virefyUser = async () => {
      try {
        const res = await Axios.get(`${BaseURL}/auth/verify/${user._id}`);
        if (res.status === 200) {
          setUserVirefy(true);
        }
      } catch (error) {
        toast.error("Please Login First");
        setUserVirefy(false);
      }
    };
    if (user?._id) {
      virefyUser();
    } else {
      setUserVirefy(false);
    }
  }, [user]);
  if (!userVierfy) {
    return (
      <>
        <Header />
        <div
          style={{
            height: "400px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Alert variant="warning" className="text-center">
            Please login first to access this content.
          </Alert>
        </div>
        <Footer />
      </>
    );
  }
  const handleOptionChange = (questionId, optionId) => {
    setSelectedAnswers({ ...selectedAnswers, [questionId]: optionId });
  };

  const handleInputChange = (questionId, value) => {
    setSelectedAnswers({ ...selectedAnswers, [questionId]: value });
  };

  const handleSubmit = async () => {
    setIsSubmitted(true);

    const result = quizList.map((quiz) => ({
      _id: quiz._id,
      subjectId: quiz.subject,
      selectedOptions: quiz.questionList.map((question) => ({
        questionId: question._id,
        answers: selectedAnswers[question._id] || [],
      })),
    }));
    const res = await Axios.post("quiz/submitQuiz", result, {
      requireAuth: true,
    });

    if (res.status === 200) {
      setShowResultModal({
        show: true,
        result: res.data,
      });
    }
  };
  const renderQuestionOptions = (question) => {
    switch (question.questionType) {
      case "Single Choice":
        return question.options.map((option) => (
          <Form.Check
            key={option._id}
            type="radio"
            label={option.value}
            name={`question-${question._id}`}
            id={`option-${option._id}`}
            checked={selectedAnswers[question._id] === option._id}
            onChange={() => handleOptionChange(question._id, option._id)}
            disabled={isSubmitted}
          />
        ));
      case "Multiple Choice":
        return question.options.map((option) => (
          <Form.Check
            key={option._id}
            type="checkbox"
            label={option.value}
            name={`question-${question._id}`}
            id={`option-${option._id}`}
            checked={
              selectedAnswers[question._id]?.includes(option._id) || false
            }
            onChange={() =>
              handleMultipleChoiceChange(question._id, option._id)
            }
            disabled={isSubmitted}
          />
        ));
      case "True/False":
        return question.options.map((option) => (
          <Form.Check
            key={option._id}
            type="radio"
            label={option.value}
            name={`question-${question._id}`}
            id={`option-${option._id}`}
            checked={selectedAnswers[question._id] === option._id}
            onChange={() => handleOptionChange(question._id, option._id)}
            disabled={isSubmitted}
          />
        ));
      case "Fill in the Blank":
        return (
          <Form.Control
            type="text"
            placeholder="Your answer here"
            value={selectedAnswers[question._id] || ""}
            onChange={(e) => handleInputChange(question._id, e.target.value)}
            disabled={isSubmitted}
          />
        );
      default:
        return null;
    }
  };

  const handleMultipleChoiceChange = (questionId, optionId) => {
    const currentAnswers = selectedAnswers[questionId] || [];
    if (currentAnswers.includes(optionId)) {
      setSelectedAnswers({
        ...selectedAnswers,
        [questionId]: currentAnswers.filter((id) => id !== optionId),
      });
    } else {
      setSelectedAnswers({
        ...selectedAnswers,
        [questionId]: [...currentAnswers, optionId],
      });
    }
  };

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
          <Container className="mt-4">
            {quizList.map((quiz) => (
              <Card key={quiz._id} className="mb-3">
                <Card.Header>
                  <h3>{quiz.name}</h3>
                  <p>{quiz.description}</p>
                </Card.Header>
                <Card.Body>
                  <h5>Subject: {quiz.subject.subject_name}</h5>
                  <p>Total Marks: {quiz.totalMarks}</p>
                  {quiz.questionList.map((question) => (
                    <Card key={question._id} className="mb-2">
                      <Card.Body>
                        <h5>{question.question}</h5>
                        <Form>{renderQuestionOptions(question)}</Form>
                      </Card.Body>
                    </Card>
                  ))}
                  <Button
                    variant="primary"
                    onClick={handleSubmit}
                    disabled={isSubmitted || !userVierfy}
                  >
                    Submit Quiz
                  </Button>
                </Card.Body>
              </Card>
            ))}
          </Container>
        </Container>
      </section>
      <Footer />
      <QuizResultModal
        show={showResultModal.show}
        handleClose={() => setShowResultModal({ show: false, result: {} })}
        result={showResultModal.result}
      />
    </>
  );
}

export default StartQuiz;

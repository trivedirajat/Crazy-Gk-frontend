import React, { useEffect, useState } from "react";
import "../home/index.css";
import Header from "../../directives/header/header";
import {
  Button,
  Card,
  Col,
  Container,
  Form,
  ListGroup,
  Row,
} from "react-bootstrap";
import Footer from "../../directives/footer/footer";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { BaseURL } from "../../Config";

function StartQuiz(props) {
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { subjectId } = useParams();
  const navigate = useNavigate();
  const [quizList, setQuizList] = useState([]);

  useEffect(() => {
    const getquize = async () => {
      const res = await axios.get(`${BaseURL}/quiz/startQuiz/${subjectId}`);
      if (res.data?.data.length > 0) {
        setQuizList(res.data.data);
      }
    };
    getquize();
  }, [subjectId]);

  const handleOptionChange = (questionId, optionId) => {
    setSelectedAnswers({ ...selectedAnswers, [questionId]: optionId });
  };

  const handleInputChange = (questionId, value) => {
    setSelectedAnswers({ ...selectedAnswers, [questionId]: value });
  };

  const handleSubmit = () => {
    setIsSubmitted(true);

    const result = quizList.map((quiz) => ({
      _id: quiz._id,
      subjectId: quiz.subject,
      selectedOptions: quiz.questionList.map((question) => ({
        questionId: question._id,
        answers: selectedAnswers[question._id] || [],
      })),
    }));

    console.log("Quiz Results:", result);
    // Send result object to API or further processing here
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
        return ["True", "False"].map((option, index) => (
          <Form.Check
            key={index}
            type="radio"
            label={option}
            name={`question-${question._id}`}
            id={`option-${option}`}
            checked={selectedAnswers[question._id] === option}
            onChange={() => handleOptionChange(question._id, option)}
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
                    disabled={isSubmitted}
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
    </>
  );
}

export default StartQuiz;

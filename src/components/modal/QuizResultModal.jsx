import React from "react";
import { Modal, Button } from "react-bootstrap";

const QuizResultModal = ({ show, handleClose, result }) => {
  const modalHeaderStyle = {
    backgroundColor: "#f8f9fa",
  };

  const modalBodyStyle = {
    backgroundColor: "#fefefe",
    padding: "20px",
  };

  const modalFooterStyle = {
    backgroundColor: "#f8f9fa",
  };

  const titleStyle = {
    color: "#000",
    textAlign: "center",
    width: "100%",
  };

  const detailsStyle = {
    fontSize: "1.1rem",
    lineHeight: "1.5",
  };

  const badgeStyle = {
    fontSize: "1rem",
    padding: "0.5em",
    marginLeft: "0.5em",
  };

  const buttonStyle = {
    fontSize: "1rem",
    padding: "10px 20px",
    borderRadius: "5px",
    backgroundColor: "#04aa50",
    border: "none",
  };

  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton style={modalHeaderStyle}>
        <Modal.Title style={titleStyle}>Quiz Result</Modal.Title>
      </Modal.Header>
      <Modal.Body style={modalBodyStyle}>
        <div style={detailsStyle}>
          <p>
            <strong>Message:</strong>{" "}
            <span style={{ color: "green" }}>{result?.message}</span>
          </p>
          <p>
            <strong>Total Score:</strong>
            <span
              style={{
                ...badgeStyle,
                backgroundColor: "#007bff",
                color: "white",
                borderRadius: "7px",
              }}
            >
              {result?.totalScore}
            </span>
          </p>
          <p>
            <strong>Total Marks:</strong>
            <span
              style={{
                ...badgeStyle,
                backgroundColor: "#6c757d",
                color: "white",
                borderRadius: "7px",
              }}
            >
              {result?.totalMarks}
            </span>
          </p>
          <p>
            <strong>Correct Answers:</strong>
            <span
              style={{
                ...badgeStyle,
                backgroundColor: "#28a745",
                color: "white",
                borderRadius: "7px",
              }}
            >
              {result?.correctAnswers}
            </span>
          </p>
          <p>
            <strong>Total Questions:</strong>
            <span
              style={{
                ...badgeStyle,
                backgroundColor: "#17a2b8",
                color: "white",
                borderRadius: "7px",
              }}
            >
              {result?.totalQuestions}
            </span>
          </p>
          {/* <p>
            <strong style={{ marginRight: "10px" }}>Passed:</strong>
            {result.passed ? (
              <span style={{ color: "green" }}>Yes</span>
            ) : (
              <span style={{ color: "red" }}>No</span>
            )}
          </p> */}
        </div>
      </Modal.Body>
      <Modal.Footer style={modalFooterStyle}>
        <Button variant="primary" onClick={handleClose} style={buttonStyle}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default QuizResultModal;

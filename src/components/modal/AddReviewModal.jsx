// AddReviewModal.js
import React, { useState } from "react";
import { Modal, Button, Form, Row, Col } from "react-bootstrap";
import { useForm } from "react-hook-form";
import StarRatingComponent from "react-star-rating-component";

const AddReviewModal = ({ show, handleClose, handleSubmitReview }) => {
  const defaultValues = {
    review: "",
    rating: 3,
  };
  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm({ defaultValues });

  // State for star rating
  const [rating, setRating] = useState(0);

  const onSubmit = (data) => {
    const reviewData = {
      ...data,
      rating,
    };
    handleSubmitReview(reviewData);
    reset();
    handleClose(); // Close the modal after submission
  };

  const handleStarClick = (nextValue) => {
    setRating(nextValue);
    setValue("rating", nextValue); // Set the rating value in the form
  };

  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title className="text-center w-100">Add Your Review</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div
          style={{
            backgroundColor: "#f8f9fa",
            padding: "20px",
            borderRadius: "10px",
          }}
        >
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Form.Group controlId="formReview" className="mb-4">
              <Form.Label>Review</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Write your review here..."
                style={{ resize: "none" }}
                {...register("review", { required: "Review is required" })}
              />
              {errors.review && (
                <Form.Text className="text-danger">
                  {errors.review.message}
                </Form.Text>
              )}
            </Form.Group>

            <Form.Group controlId="formRating" className="text-center mb-4">
              <Form.Label>Rating</Form.Label>
              <div className="d-flex justify-content-center">
                <StarRatingComponent
                  name="rate"
                  starCount={5}
                  value={rating}
                  onStarClick={handleStarClick}
                  starColor="#04aa50" // Primary color for stars
                  emptyStarColor="#ddd"
                  size={30}
                />
              </div>
              {errors.rating && (
                <Form.Text className="text-danger">
                  {errors.rating.message}
                </Form.Text>
              )}
            </Form.Group>

            <Row className="mt-4">
              <Col className="text-center">
                <Button
                  variant="primary"
                  type="submit"
                  style={{
                    backgroundColor: "#04aa50",
                    borderColor: "#04aa50",
                    padding: "10px 30px",
                    fontSize: "16px",
                  }}
                >
                  Submit Review
                </Button>
              </Col>
            </Row>
          </Form>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default AddReviewModal;

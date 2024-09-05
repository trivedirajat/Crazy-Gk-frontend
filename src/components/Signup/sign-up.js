import React from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { Link } from "react-router-dom";
import GoogleIcon from "../../assets/images/icon/google.png";
import FacebookIcon from "../../assets/images/icon/facebook.png";

function Signup({ show, handleClose, onloginClick }) {
  const handleloginClick = () => {
    handleClose();
    onloginClick();
  };
  return (
    <>
      <Modal show={show} onHide={handleClose} centered>
        <Modal.Body className="login-area">
          <div className="text-center">
            <h6>Let’s Sign Up To</h6>
            <h2>Create an account</h2>
          </div>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Mobile Number</Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter your Mobile Number"
                autoFocus
              />
            </Form.Group>
          </Form>
          <div className="social-are">
            <div className="social-login">
              <img src={GoogleIcon} alt="google" />
              Sign in with google
            </div>
            <div className="social-login">
              <img src={FacebookIcon} alt="facebook" />
              Sign in with facebook
            </div>
          </div>
          <div className="text-center">
            <Button>Create Account</Button>
            <p>
              Already have an account?{" "}
              <Button onClick={handleloginClick} className="login-text-btn">
                Login
              </Button>
            </p>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default Signup;

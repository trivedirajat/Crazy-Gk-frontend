import React from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { Link } from "react-router-dom";
import Signup from "../Signup/sign-up";
import Otp from "../OTP/otp";
import ForgotPassword from "../ForgotPassword/ForgotPassword";

function Login({ show}) {
  const [modalShow, setModalShow] = React.useState(false);
  const [otpmodalShow, setotpModalShow] = React.useState(false);
  const [ForgotPasswordmodal, setForgotPasswordmodal] = React.useState(false);

  const handleClose = () => {
    setModalShow(false);
  };
  const otphandleClose = () => {
    setotpModalShow(false);
  };
  const ForgotPasswordhandle = () => {
    setForgotPasswordmodal(false);
  };

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Body className="login-area">
          <div className="text-center">
            <h6>Welcome to </h6>
            <h2>Crazy GK Trick</h2>
          </div>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email ID/ Mobile Number</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter your Email ID/ Mobile Number"
                autoFocus
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter your password"
                autoFocus
              />
            </Form.Group>
          </Form>
          <div className="Forgottext">
            <Link onClick={() => setForgotPasswordmodal(true)}>Forgot Password?</Link>
          </div>
          <div className="text-center">
            <Button onClick={() => setotpModalShow(true)}>Login</Button>
            <p>
              Don't have an account?{" "}
              <Link onClick={() => setModalShow(true)} handleClose={handleClose} >Create account</Link>
            </p>
          </div>
        </Modal.Body>
      </Modal>
      <Signup show={modalShow} handleClose={handleClose} />
      <Otp show={otpmodalShow} otphandleClose={otphandleClose} />
      <ForgotPassword show={ForgotPasswordmodal} ForgotPasswordhandle={ForgotPasswordhandle} />

    </>
  );
}

export default Login;

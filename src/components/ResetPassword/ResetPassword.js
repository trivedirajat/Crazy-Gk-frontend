import React from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { Link } from "react-router-dom";
import Signup from "../Signup/sign-up";
import Otp from "../OTP/otp";
import ForgotPassword from "../ForgotPassword/ForgotPassword";

function ResetPassword({ show }) {
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
            <h6>Change Your Password</h6>
            <h2>Reset Password</h2>
          </div>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>New Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter New Password"
                autoFocus
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Confirm New Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter Confirm New Password"
                autoFocus
              />
            </Form.Group>
          </Form>
         
          <div className="text-center">
            <Button onClick={() => setotpModalShow(true)}>Reset Password</Button>
          </div>
        </Modal.Body>
      </Modal>

    </>
  );
}

export default ResetPassword;

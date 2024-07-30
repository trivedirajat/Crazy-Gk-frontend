import React from "react";
import { Button, Form, Modal } from "react-bootstrap";
import ResetPassword from "../ResetPassword/ResetPassword";

function ForgotPassword({ show, handleClose }) {
    const [ForgotPasswordmodal, setForgotPasswordmodal] = React.useState(false);

  const ForgotPasswordhandle = () => {
    setForgotPasswordmodal(false);
  };
  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Body className="login-area">
          <div className="text-center">
            <h6>Don’t Worry It Happens.</h6>
            <h2>Forgot Password</h2>
          </div>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email ID / Mobile Number</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your Email ID / Mobile Number"
                autoFocus
              />
            </Form.Group>
          </Form>
          <div className="text-center">
            <Button onClick={() => setForgotPasswordmodal(true)}>Continue</Button>

          </div>
        </Modal.Body>
      </Modal>
      <ResetPassword show={ForgotPasswordmodal} ForgotPasswordhandle={ForgotPasswordhandle} />

    </>
  );
}

export default ForgotPassword;

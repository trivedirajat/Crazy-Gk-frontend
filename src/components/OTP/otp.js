import React from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { Link } from "react-router-dom";
import GoogleIcon from "../../assets/images/icon/google.png";
import FacebookIcon from "../../assets/images/icon/facebook.png";

function Otp({ show, handleClose }) {
  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Body className="login-area">
          <div className="text-center">
            <h6>Welcome to</h6>
            <h2>Crazy GK Trick</h2>
          </div>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>
                Enter the six digit passcode sent to XXXXXXXXXX
              </Form.Label>
              <div className="otp-input-fields">
                <input type="text" maxLength="1" />
                <input type="text" maxLength="1" />
                <input type="text" maxLength="1" />
                <input type="text" maxLength="1" />
                <input type="text" maxLength="1" />
                <input type="text" maxLength="1" />
              </div>
            </Form.Group>
          </Form>
          <div className="Forgottext">
            <Link to="">Resend OTP</Link>
          </div>
          <div className="text-center">
            <Button>Verify OTP</Button>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default Otp;

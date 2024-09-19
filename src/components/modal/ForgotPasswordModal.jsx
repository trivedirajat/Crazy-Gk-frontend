import React, { useState } from "react";
import { Modal, Form, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import apiEndPoints from "../../utils/apiEndPoints";
import { toast } from "react-toastify";
import { BaseURL } from "../../Config";
import OtpModal from "./OtpModal";
import Axios from "../../utils/Axios";

const ForgotPasswordModal = ({ show, handleClose }) => {
  const [OtpModalShow, setOtpModalShow] = useState(false);
  const [FormData, setSignupData] = useState({});
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();

  const onSubmit = async (data) => {
    setSignupData(data);
    try {
      const response = await Axios.post(
        `${BaseURL}${apiEndPoints.FORGOTPASSWORD_API}`,
        data
      );
      if (response.status === 200) {
        toast.success(response?.data?.message || "OTP sent successfully");
        setOtpModalShow(true);
        handleClose();
      }
    } catch (error) {
      toast.error(error?.response?.data?.message || "Something went wrong");
    }
  };

  return (
    <>
      <Modal show={show} onHide={handleClose} centered>
        <Modal.Body className="login-area">
          <div className="text-center">
            <h6>Don’t Worry It Happens.</h6>
            <h2>Forgot Password</h2>
          </div>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Form.Group className="mb-3">
              <Form.Label>Email ID / Mobile Number</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your email or mobile number"
                {...register("emailOrMobile", {
                  required: "Email or mobile number is required",
                })}
              />
              {errors.emailOrMobile && (
                <p style={{ color: "red", marginTop: "5px", fontSize: "12px" }}>
                  {errors.emailOrMobile.message}
                </p>
              )}
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>New Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter your new password"
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 8,
                    message: "Password must be at least 8 characters long",
                  },
                })}
              />
              {errors.password && (
                <p style={{ color: "red", marginTop: "5px", fontSize: "12px" }}>
                  {errors.password.message}
                </p>
              )}
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Confirm your new password"
                {...register("confirmPassword", {
                  required: "Confirm password is required",
                  validate: (value) =>
                    value === watch("password") || "Passwords do not match",
                })}
              />
              {errors.confirmPassword && (
                <p style={{ color: "red", marginTop: "5px", fontSize: "12px" }}>
                  {errors.confirmPassword.message}
                </p>
              )}
            </Form.Group>
            <div className="text-center">
              <Button type="submit">Get OTP</Button>
            </div>
          </Form>
        </Modal.Body>
      </Modal>
      <OtpModal
        show={OtpModalShow}
        handleClose={() => setOtpModalShow(false)}
        mobileNo={FormData?.emailOrMobile}
        data={FormData}
        type="forgotPassword"
      />
    </>
  );
};

export default ForgotPasswordModal;

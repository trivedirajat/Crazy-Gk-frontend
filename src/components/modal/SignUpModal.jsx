import React, { useState } from "react";
import { Modal, Form, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import OtpModal from "./OtpModal";
import axios from "axios";
import { BaseURL } from "../../Config";
import apiEndPoints from "../../utils/apiEndPoints";
import { toast } from "react-toastify";

const SignUpModal = ({ show, handleClose, handleLoginModalShow }) => {
  const [OtpModalShow, setOtpModalShow] = useState(false);
  const [signupData, setSignupData] = useState({});
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const password = watch("password");

  const onSubmit = async (data) => {
    try {
      const response = await axios.post(
        `${BaseURL}${apiEndPoints.REGISTRATION_API}`,
        data
      );
      if (response.status === 201) {
        setOtpModalShow(true);
        handleClose();
      }
    } catch (error) {
      toast.error(error?.response?.data?.message || "Something went wrong");
    }
    setSignupData(data);
    console.log(data);
    // Handle signup logic here
  };

  return (
    <>
      <Modal show={show} onHide={handleClose} centered>
        <Modal.Body className="login-area">
          <div className="text-center">
            <h6>Let’s Sign Up To</h6>
            <h2>Create an account</h2>
          </div>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Form.Group className="mb-3">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your Name"
                {...register("name", { required: "Name is required" })}
              />
              {errors.name && (
                <p style={{ color: "red", marginTop: "5px", fontSize: "12px" }}>
                  {errors.name.message}
                </p>
              )}
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter your Email"
                {...register("email", {
                  required: "Email is required",
                  pattern: /^\S+@\S+$/i,
                })}
              />
              {errors.email && (
                <p style={{ color: "red", marginTop: "5px", fontSize: "12px" }}>
                  {errors.email.message}
                </p>
              )}
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Mobile Number</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your Mobile Number"
                {...register("mobile", {
                  required: "Mobile number is required",
                  maxLength: 10,
                })}
              />
              {errors.mobile && (
                <p style={{ color: "red", marginTop: "5px", fontSize: "12px" }}>
                  {errors.mobile.message}
                </p>
              )}
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Gender</Form.Label>
              <Form.Select
                {...register("gender", { required: "Gender is required" })}
              >
                <option value="">Select</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </Form.Select>
              {errors.gender && (
                <p style={{ color: "red" }}>{errors.gender.message}</p>
              )}
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter your Password"
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 8,
                    message: "Password must be 8 characters",
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
                placeholder="Confirm your Password"
                {...register("confirmPassword", {
                  required: "Confirm password is required",
                  validate: (value) =>
                    value === password || "Passwords do not match",
                })}
              />
              {errors.confirmPassword && (
                <p style={{ color: "red", marginTop: "5px", fontSize: "12px" }}>
                  {errors.confirmPassword.message}
                </p>
              )}
            </Form.Group>

            <div className="text-center">
              <Button type="submit">Create Account</Button>
              <p>
                Already have an account?{" "}
                <Link variant="link" onClick={handleLoginModalShow}>
                  Login
                </Link>
              </p>
            </div>
          </Form>
        </Modal.Body>
      </Modal>
      <OtpModal
        show={OtpModalShow}
        handleClose={() => setOtpModalShow(false)}
        mobileNo={signupData?.mobile}
        data={signupData}
      />
    </>
  );
};

export default SignUpModal;

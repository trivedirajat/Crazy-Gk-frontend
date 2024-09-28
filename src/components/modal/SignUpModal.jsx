import React, { useState } from "react";
import { Modal, Form, Button, InputGroup } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import OtpModal from "./OtpModal";
import { BaseURL } from "../../Config";
import apiEndPoints from "../../utils/apiEndPoints";
import { toast } from "react-toastify";
import Axios from "../../utils/Axios";
import { useDispatch } from "react-redux";
import { signInWithPopup } from "firebase/auth";
import { firebaseAuth, provider } from "../firebase/firebase";
import { USER_LOGIN_SUCCESS } from "../../reduxx/action/actionTypes";
import googleLoginImage from "../../assets/images/icon/google.png";
import facebookLoginImage from "../../assets/images/icon/facebook.png";

const SignUpModal = ({
  show,
  handleClose,
  handleLoginModalShow,
  setUserDetails,
  type,
}) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [OtpModalShow, setOtpModalShow] = useState({
    show: false,
    OTPID: "",
  });
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
      const response = await Axios.post(
        `${BaseURL}${apiEndPoints.REGISTRATION_API}`,
        data
      );
      if (response.status === 201) {
        setOtpModalShow({ show: true, OTPID: response?.data?.OTPID });
        handleClose();
      }
    } catch (error) {
      toast.error(error?.response?.data?.message || "Something went wrong");
    }
    setSignupData(data);
    console.log(data);
  };

  const handleGoogleSignUp = async () => {
    try {
      const result = await signInWithPopup(firebaseAuth, provider);
      const Googleuser = result.user;
      const idToken = await Googleuser.getIdToken();
      const res = await Axios.post(
        `${BaseURL}${apiEndPoints?.GOOGLE_AUTH_API}`,
        {
          idToken,
        }
      );
      if (res.status === 200) {
        const { user, accessToken, refreshToken } = res?.data?.data;
        localStorage.setItem("user", JSON.stringify(user));
        localStorage.setItem("accessToken", accessToken);
        localStorage.setItem("refreshToken", refreshToken);
        toast.success(res?.data?.message || "Login successful");
        dispatch({
          type: USER_LOGIN_SUCCESS,
          payload: user,
        });
        handleClose();
        if (type === "welcome") {
          navigate("/home");
        } else {
          setUserDetails(user);
        }
      }
    } catch (error) {
      toast.error(error?.response?.data?.message || "Google login failed");
    }
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
              <InputGroup>
                <InputGroup.Text>+91</InputGroup.Text>
                <Form.Control
                  type="text"
                  placeholder="Enter your Mobile Number"
                  maxLength={10}
                  {...register("mobile", {
                    required: "Mobile number is required",
                    maxLength: {
                      value: 10,
                      message: "Mobile number cannot exceed 10 digits",
                    },
                  })}
                />
              </InputGroup>
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
                <p style={{ color: "red", marginTop: "5px", fontSize: "12px" }}>
                  {errors.gender.message}
                </p>
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
            <div className="text-center mt-4">
              <p>Or sign up with</p>
              <div className="d-flex justify-content-center gap-3">
                <img
                  src={googleLoginImage}
                  alt="Google Login"
                  style={{ width: "35px", height: "35px", cursor: "pointer" }}
                  onClick={handleGoogleSignUp}
                />
                <img
                  src={facebookLoginImage}
                  alt="Facebook Login"
                  style={{ width: "35px", height: "35px", cursor: "pointer" }}
                />
              </div>
            </div>
          </Form>
        </Modal.Body>
      </Modal>
      <OtpModal
        show={OtpModalShow.show}
        OTPID={OtpModalShow.OTPID}
        handleClose={() => setOtpModalShow(false)}
        mobileNo={signupData?.mobile}
        data={signupData}
      />
    </>
  );
};

export default SignUpModal;

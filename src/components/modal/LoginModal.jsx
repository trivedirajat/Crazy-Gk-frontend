import React from "react";
import { Button, Form, InputGroup, Modal } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import googleLoginImage from "../../assets/images/icon/google.png";
import { BaseURL } from "../../Config";
import { USER_LOGIN_SUCCESS } from "../../reduxx/action/actionTypes";
import apiEndPoints from "../../utils/apiEndPoints";
import Axios from "../../utils/Axios";
import { firebaseAuth, provider, signInWithPopup } from "../firebase/firebase";

const LoginModal = ({
  show,
  handleClose,
  handleForgotPasswordModalShow,
  handleSignUpModalShow,
  setUserDetails,
  type,
}) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const res = await Axios.post(`${BaseURL}/${apiEndPoints?.LOGIN_API}`, {
        user_type: "user",
        ...data,
      });
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
      toast.error(error?.response?.data?.message || "Something went wrong");
    }
  };

  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithPopup(firebaseAuth, provider);
      // const credential = GoogleAuthProvider.credentialFromResult(result);
      // const token = credential.accessToken;
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
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Body className="login-area">
        <div className="text-center">
          <h6>Welcome to</h6>
          <h2>Crazy GK Trick</h2>
        </div>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Form.Group className="mb-3">
            <Form.Label>Mobile Number</Form.Label>
            <InputGroup>
              <InputGroup.Text>+91</InputGroup.Text>
              <Form.Control
                type="tel"
                placeholder="Enter your Mobile Number"
                minLength={10}
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
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Enter your password"
              {...register("password", { required: "Password is required" })}
            />
            {errors.password && (
              <p style={{ color: "red", marginTop: "5px", fontSize: "12px" }}>
                {errors.password.message}
              </p>
            )}
          </Form.Group>
          <div className="Forgottext">
            <Link variant="link" onClick={handleForgotPasswordModalShow}>
              Forgot Password?
            </Link>
          </div>
          <div className="text-center">
            <Button type="submit">Login</Button>
            <p>
              Don't have an account?{" "}
              <Link variant="link" onClick={handleSignUpModalShow}>
                Create account
              </Link>
            </p>
          </div>
          <div className="text-center mt-4">
            <p>Or login with</p>
            <div className="d-flex justify-content-center gap-3">
              <img
                src={googleLoginImage}
                alt="Google Login"
                style={{ width: "35px", height: "35px", cursor: "pointer" }}
                onClick={handleGoogleLogin}
              />
              {/* <img
                src={facebookLoginImage}
                alt="Facebook Login"
                style={{ width: "35px", height: "35px", cursor: "pointer" }}
              /> */}
            </div>
          </div>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default LoginModal;

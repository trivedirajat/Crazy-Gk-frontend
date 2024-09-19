import React from "react";
import { Modal, Form, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { BaseURL } from "../../Config";
import apiEndPoints from "../../utils/apiEndPoints";
import { toast } from "react-toastify";
import { USER_LOGIN_SUCCESS } from "../../reduxx/action/actionTypes";
import { useDispatch } from "react-redux";
import Axios from "../../utils/Axios";

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
            <Form.Control
              type="text"
              placeholder="Enter your Mobile Number"
              {...register("mobile", {
                required: "Mobile number is required",
                pattern: {
                  value: /^[0-9]{10}$/,
                  message: "Enter valid mobile number",
                },
                maxLength: {
                  value: 10,
                  message: "Mobile number should be 10 digits",
                },
              })}
            />
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
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default LoginModal;

import React from "react";
import { Modal, Form, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";

const ResetPasswordModal = ({ show, handleClose }) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const password = watch("password");

  const onSubmit = (data) => {
    console.log(data);
    // Handle reset password logic here
  };

  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Body className="login-area">
        <div className="text-center">
          <h6>Change Your Password</h6>
          <h2>Reset Password</h2>
        </div>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Form.Group className="mb-3">
            <Form.Label>New Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Enter New Password"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be at least 6 characters",
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
            <Form.Label>Confirm New Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Confirm New Password"
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
            <Button type="submit">Reset Password</Button>
          </div>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default ResetPasswordModal;

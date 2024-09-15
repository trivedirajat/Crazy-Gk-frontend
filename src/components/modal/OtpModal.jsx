import React, { useState, useRef } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import Countdown from "../shared/Countdown";
import axios from "axios";
import { BaseURL } from "../../Config";
import apiEndPoints from "../../utils/apiEndPoints";
import { toast } from "react-toastify";

const OtpModal = ({ show, handleClose, mobileNo, data, type }) => {
  const [otp, setOtp] = useState(Array(6).fill(""));
  const [canResend, setCanResend] = useState(false);
  const inputRefs = useRef([]);

  const handleOtpChange = (index, value) => {
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value && index < otp.length - 1) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyPress = (e, index) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handleResendOtp = async () => {
    try {
      const res = await axios.post(
        `${BaseURL}${apiEndPoints?.RESENTOTP_API}`,
        data
      );
      if (res.status === 200) {
        toast.success(res?.data?.message || "OTP sent successfully");
        setCanResend(false);
      }
    } catch (error) {
      toast.error(error?.response?.data?.message || "Something went wrong");
    }
    setCanResend(false);
  };

  const handleCountdownComplete = () => {
    setCanResend(true);
  };

  const handleSubmit = async () => {
    const otpValue = otp.join("");
    if (type === "forgotPassword") {
      try {
        const res = await axios.post(
          `${BaseURL}${apiEndPoints?.UPDATEPASSWORD_API}`,
          {
            emailOrMobile: mobileNo,
            otp: otpValue,
            newPassword: data?.confirmPassword,
          }
        );
        if (res.status === 200) {
          toast.success(res?.data?.message || "Password updated successfully");
          handleClose();
        }
      } catch (error) {
        toast.error(error?.response?.data?.message || "Something went wrong");
      }
    } else {
      try {
        const res = await axios.post(
          `${BaseURL}${apiEndPoints?.VERFIYOTP_API}`,
          {
            mobile: mobileNo,
            otp: otpValue,
            data,
          }
        );
        if (res.status === 200) {
          toast.success(res?.data?.message || "OTP verified successfully");
          setTimeout(() => {
            toast.success("signup successfully");
          }, 500);
          handleClose();
        }
      } catch (error) {
        toast.error(error?.response?.data?.message || "Something went wrong");
      }
      handleClose();
    }
  };

  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Body className="login-area">
        <div className="text-center">
          <h6>Welcome to</h6>
          <h2>Crazy GK Trick</h2>
        </div>
        <Form>
          <Form.Group
            className="mb-3"
            controlId="otpInput"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <Form.Label>
              Enter the six digit passcode sent to {mobileNo}
            </Form.Label>
            <div
              className="otp-input-fields"
              style={{ display: "flex", justifyContent: "center" }}
            >
              {otp.map((value, index) => (
                <input
                  key={index}
                  ref={(el) => (inputRefs.current[index] = el)}
                  type="text"
                  maxLength="1"
                  value={value}
                  onChange={(e) => handleOtpChange(index, e.target.value)}
                  onKeyDown={(e) => handleKeyPress(e, index)}
                  style={{
                    width: "40px",
                    margin: "0 5px",
                    textAlign: "center",
                  }}
                />
              ))}
            </div>
          </Form.Group>
        </Form>

        <div className="Forgottext" style={{ marginRight: "68px" }}>
          {canResend ? (
            <Link onClick={handleResendOtp}>Resend OTP</Link>
          ) : (
            <span>
              Resend{" "}
              <Countdown
                initialTime={120000}
                onComplete={handleCountdownComplete}
              />
            </span>
          )}
        </div>

        <div className="text-center">
          <Button onClick={handleSubmit}>Verify OTP</Button>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default OtpModal;

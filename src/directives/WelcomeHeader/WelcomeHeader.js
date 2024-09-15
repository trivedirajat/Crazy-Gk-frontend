import React, { useEffect, useState } from "react";
import { Container, Form, Nav, Navbar } from "react-bootstrap";
import Logo from "../../assets/images/logo.png";
import { Link, useNavigate } from "react-router-dom";
import "../header/header.css";

import LoginModal from "../../components/modal/LoginModal";
import SignUpModal from "../../components/modal/SignUpModal";
import ForgotPasswordModal from "../../components/modal/ForgotPasswordModal";

function WelcomeHeader(props) {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const [signUpModal, setSignUpModal] = useState(false);
  const [ForgotPasswordmodal, setForgotPasswordmodal] = useState(false);
  const [userDetails, setUserDetails] = useState(null);

  useEffect(() => {
    const fetchUserDetails = async () => {
      const userData = await localStorage.getItem("user");
      const data = JSON.parse(userData);
      if (data) {
        setUserDetails(data);
      }
    };
    fetchUserDetails();
  }, []);
  // logout end
  const handleClose = () => {
    setShow(false);
    setSignUpModal(false);
  };
  const handleShow = () => {
    setShow(true);
    setSignUpModal(false);
  };

  const handleSignUpModalClose = () => {
    setSignUpModal(false);
    setShow(false);
  };

  const handleSignUpModalShow = () => {
    setSignUpModal(true);
    setShow(false);
  };
  // Forgot password start

  // Forgot password end
  const handleForgotPasswordmodalClose = () => {
    setForgotPasswordmodal(false);
    setShow(false);
  };

  const handleForgotPasswordmodalShow = () => {
    setForgotPasswordmodal(true);
    setShow(false);
  };
  const goToFooter = () => {
    navigate("/home");
    setTimeout(() => {
      const footerElement = document.getElementById("footer");
      if (footerElement) {
        footerElement.scrollIntoView({ behavior: "smooth" });
      }
    }, 0);
  };
  return (
    <>
      <Navbar expand="lg" className="nav-area">
        <Container fluid>
          <Navbar.Brand>
            <Link to="/">
              <img src={Logo} alt="logo" />
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto nav-menus">
              <Form className="d-flex">
                {!userDetails?.verified && (
                  <button
                    className="login-text-btn"
                    onClick={handleShow}
                    type="button"
                  >
                    Login
                  </button>
                )}
                {!userDetails?.verified && (
                  <button
                    variant="outline-success"
                    className="login-text-btn"
                    onClick={() => setSignUpModal(true)}
                    type="button"
                  >
                    Register
                  </button>
                )}
                <button
                  variant="outline-success"
                  className="login-text-btn"
                  onClick={goToFooter}
                  type="button"
                >
                  Contact Us
                </button>
              </Form>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {/*================================= Login Modal ============================= */}
      <LoginModal
        type="welcome"
        show={show}
        handleClose={handleClose}
        handleForgotPasswordModalShow={handleForgotPasswordmodalShow}
        handleSignUpModalShow={handleSignUpModalShow}
      />

      {/*================================= Sign Up Modal ============================= */}
      <SignUpModal
        show={signUpModal}
        handleClose={handleSignUpModalClose}
        handleLoginModalShow={handleShow}
      />

      {/*================================= Forgot Password Modal ============================= */}
      <ForgotPasswordModal
        show={ForgotPasswordmodal}
        handleClose={handleForgotPasswordmodalClose}
      />
    </>
  );
}

export default WelcomeHeader;

import React, { useEffect, useState } from "react";
import {
  Button,
  Col,
  Container,
  Form,
  Nav,
  Navbar,
  Row,
} from "react-bootstrap";
import Logo from "../../assets/images/logo.png";
import { Link } from "react-router-dom";
import "../header/header.css";
import welcome3 from "../../assets/images/icon/welcome3.png";
import userProfile from "../../assets/images/img/Avata.png";
import { useDispatch } from "react-redux";
import { removeAuthResponse } from "../../reduxx/action/AuthAction";
import { logout } from "../../reduxx/action/actionCreators";
import GlobalSearch from "../../components/shared/GlobalSearch";
import { COURSES, EXAM_NOTES, ROOT_APP, TEST_SERIES } from "../../Config";
import LoginModal from "../../components/modal/LoginModal";
import SignUpModal from "../../components/modal/SignUpModal";
import ForgotPasswordModal from "../../components/modal/ForgotPasswordModal";

function Header(props) {
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const [signUpModal, setSignUpModal] = useState(false);
  const [ForgotPasswordmodal, setForgotPasswordmodal] = useState(false);
  const [userDetails, setUserDetails] = useState(null);

  useEffect(() => {
    const fetchUserDetails = () => {
      const userData = localStorage.getItem("user") || "";
      const data = JSON.parse(userData || "{}");
      if (data) {
        setUserDetails(data);
      }
    };
    fetchUserDetails();
  }, []);

  // logout start
  const handleLogout = () => {
    setUserDetails(null);
    dispatch(logout());
    dispatch(removeAuthResponse());
  };
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

  const [showOverlay, setShowOverlay] = useState(false);

  const handleSearchClick = () => {
    setShowOverlay(true);
  };

  const handleHideOverlay = () => {
    setShowOverlay(false);
  };

  return (
    <>
      <div className="top-nav">
        <Container fluid className="container-space">
          <Row>
            <Col lg={6}>
              <div className="">
                <Row>
                  <Col sm={2} className="align-self-center p-0">
                    <a href={COURSES} target="_blank" rel="noreferrer">
                      Courses
                    </a>
                  </Col>
                  <Col sm={3} className="align-self-center p-0">
                    <a href={TEST_SERIES} target="_blank" rel="noreferrer">
                      Test series
                    </a>
                  </Col>
                  <Col sm={7} className="p-0">
                    <button onClick={() => window.open(ROOT_APP, "_blank")}>
                      Root App <img src={welcome3} alt="welcome" />
                    </button>
                  </Col>
                </Row>
              </div>
            </Col>
            <Col lg={6}>
              <div className="contact-top">
                <Row>
                  <Col sm={6} className="align-self-center p-0">
                    <Link>
                      <i className="fa fa-envelope-o" /> dummymail@123gmail.com
                    </Link>
                  </Col>
                  <Col sm={4} className="align-self-center p-0">
                    <Link>
                      <i className="fa fa-volume-control-phone" /> +91 98765
                      43321
                    </Link>
                  </Col>
                  <Col sm={2} className="p-0">
                    <Form.Select aria-label="Default select example">
                      <option>English</option>
                      <option>Hindi</option>
                    </Form.Select>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <Navbar
        expand="lg"
        className={`nav-area ${props.openLightBox && "d-none"}`}
      >
        <Container fluid>
          <Navbar.Brand>
            <Link to="/home">
              <img src={Logo} />
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="m-auto nav-menus">
              <Nav.Link>
                <Link className="linkA-view" to="/home">
                  Home
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link className="linkA-view" to="/study-material">
                  Study Material
                </Link>
              </Nav.Link>
              {/* <div className="dropdown">
                <button className="dropbtn">
                  <Link to="/study-material">
                    Study Material <i className="fa fa-angle-down" />
                  </Link>
                </button>
                <div className="dropdown-content">
                  <Link to="">Link 1</Link>
                  <Link to="">Link 2</Link>
                  <Link to="">Link 3</Link>
                </div>
              </div> */}
              <div className="dropdown">
                <button className="dropbtn">
                  <Link to={"/topic-current-affairs"}>
                    Current Affairs <i className="fa fa-angle-down" />
                  </Link>
                </button>
                <div className="dropdown-content">
                  <Link to="/daily-current-affairs">Daily Current Affairs</Link>
                  <Link to="/monthly-current-affairs">
                    Monthly Current Affairs
                  </Link>
                  <Link to="/topic-current-affairs">
                    Topic Wise Current Affairs
                  </Link>
                  <Link to="/editorial-section">Editorial Section</Link>
                </div>
              </div>
              <Nav.Link>
                <Link className="linkA-view" to="/quiz">
                  Quiz
                </Link>
              </Nav.Link>
              <div style={{ padding: "0 10px" }}>
                <a
                  className="linkA-view"
                  href={EXAM_NOTES}
                  rel="noreferrer"
                  target="_blank"
                >
                  Exam
                </a>
              </div>
              {/* <div className="dropdown">
                <button className="dropbtn">
                  <Link>
                    Exam <i className="fa fa-angle-down" />
                  </Link>
                </button>
                <div className="dropdown-content">
                  <Link to="">Link 1</Link>
                  <Link to="">Link 2</Link>
                  <Link to="">Link 3</Link>
                </div>
              </div> */}
              <div style={{ padding: "0 10px" }}>
                <a
                  className="linkA-view"
                  href={TEST_SERIES}
                  rel="noreferrer"
                  target="_blank"
                >
                  Test Series
                </a>
              </div>
              {/* <div className="dropdown">
                <button className="dropbtn">
                  <Link>
                    Test Series <i className="fa fa-angle-down" />
                  </Link>
                </button>
                <div className="dropdown-content">
                  <Link to="">Link 1</Link>
                  <Link to="">Link 2</Link>
                  <Link to="">Link 3</Link>
                </div>
              </div> */}
              <div className="dropdown">
                <button className="dropbtn">
                  <Link to={"/subject-wise-video"}>
                    Youtube Videos <i className="fa fa-angle-down" />
                  </Link>
                </button>
                <div className="dropdown-content">
                  <Link to="/subject-wise-video">Topic wise videos</Link>
                  <Link to="/trending-on-youtube">Trending videos</Link>
                </div>
              </div>
            </Nav>
            {showOverlay && (
              <div className="overlay-header" onClick={handleHideOverlay}></div>
            )}
            <>
              {showOverlay && (
                <GlobalSearch handleHideOverlay={handleHideOverlay} />
              )}
              <Form className="d-flex">
                <span onClick={handleSearchClick}>
                  <i className="fa fa-search" />
                </span>
                {!userDetails?.verified && (
                  <Button variant="outline-success" onClick={handleShow}>
                    Login
                  </Button>
                )}
              </Form>
              {userDetails?.verified && (
                <div className="dropdown">
                  <div className="dropbtn">
                    <Link>
                      <img src={userProfile} alt={userDetails?.name} />
                    </Link>
                  </div>
                  <div className="dropdown-content userprofile">
                    <div className="profile-header">
                      <img src={userProfile} alt={userDetails?.name} />
                      <div>
                        <h4>
                          {userDetails?.name ? userDetails?.name : "jhon Doe"}
                        </h4>
                        <p>
                          {userDetails?.email
                            ? userDetails?.email
                            : "jhon@gmail.com"}
                        </p>
                      </div>
                    </div>
                    <hr className="m-0" />
                    <Link to="/my-profile">Profile</Link>
                    <Link onClick={handleLogout}>Logout</Link>
                  </div>
                </div>
              )}
            </>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/*================================= Login Modal ============================= */}
      <LoginModal
        show={show}
        handleClose={handleClose}
        handleForgotPasswordModalShow={handleForgotPasswordmodalShow}
        handleSignUpModalShow={handleSignUpModalShow}
        setUserDetails={setUserDetails}
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

export default Header;

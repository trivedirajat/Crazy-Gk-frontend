import React, { useEffect, useRef, useState } from "react";
import {
  Button,
  Col,
  Container,
  Form,
  Modal,
  Nav,
  Navbar,
  Row,
} from "react-bootstrap";
import Logo from "../../assets/images/logo.png";
import { Link } from "react-router-dom";
import "../header/header.css";
import GoogleIcon from "../../assets/images/icon/google.png";
import FacebookIcon from "../../assets/images/icon/facebook.png";
import welcome3 from "../../assets/images/icon/welcome3.png";
import en from "../../assets/images/icon/en.png";
import userProfile from "../../assets/images/img/Avata.png";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { checkUserMobile, removeAuthResponse, resetPassword, updateProfile, userLogin, userReSendOTP, userRegister, userVerfiyOTP } from "../../reduxx/action/AuthAction";
import { logout, userForgotPassword } from "../../reduxx/action/actionCreators";

function Header(props) {
  const dispatch = useDispatch()
  const { isAuthenticated = false, userData, responseLogin, responseSignup, responseCheckMobile, responseOtpVerify, resendotp, forgotpassword, updateprofile, updatepassword } = useSelector(state => state.auth) || {}
  const [show, setShow] = useState(false);
  const [signUpModal, setSignUpModal] = useState(false);
  const [userNameModal, setUserNameModal] = useState(false);
  const [ForgotPasswordmodal, setForgotPasswordmodal] = useState(false);
  const [otpmodal, setOtpmodal] = useState(false);
  const [signotpmodal, setSignOtpmodal] = useState(false);
  const [resetPasswordmodal, setResetPasswordmodal] = useState(false);
  // forgot password
  const [emailOrMobile, setEmailOrMobile] = useState("");
  // register acount
  const [mobileNo, setMobileNo] = useState("")
  const [user_name, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const [forgotOtp, setForgotOtp] = useState(['', '', '', '', '', '']);
  const [userNameData, setUserNameData] = useState({
    name: '',
    password: '',
    confirmPassword: ''
  })
  const [resetPasswordData, setResetPasswordData] = useState({
    password: '',
    confirmPassword: ''
  })
  const [userDetails, setUserDetails] = useState(null)
  console.log('userDetails', userDetails);
  console.log('responseOtpVerify', responseOtpVerify);
  console.log('resendotp', resendotp);
  console.log('isAuthenticated', isAuthenticated);
  console.log('password', password);
  useEffect(() => {
    if (responseSignup || responseCheckMobile || responseOtpVerify || resendotp || responseLogin || forgotpassword || updateprofile || userData || updatepassword) {
      if (responseCheckMobile?.status === 200) {
        toast.success(responseSignup?.data?.message)
        dispatch(removeAuthResponse())
        dispatch(userRegister({
          mobile: mobileNo,
          user_type: 'user'
        }))
      }
      else if (responseSignup?.status === 200) {
        toast.success(responseSignup?.data?.message)
        dispatch(removeAuthResponse())
        setSignOtpmodal(true);
        setSignUpModal(false);
      }
      else if (responseOtpVerify?.status === 200) {
        toast.success(responseOtpVerify?.data?.message)
        localStorage.setItem('userData', JSON.stringify(responseOtpVerify?.data?.data));
        localStorage.setItem('token', responseOtpVerify?.data?.token);
        setSignOtpmodal(false);
        setSignUpModal(false);
        if (otpmodal) {
          setOtpmodal(false)
          setResetPasswordmodal(true)
        } else {
          setUserNameModal(true)
        }
        dispatch(removeAuthResponse())
      }
      else if (resendotp?.status === 200) {
        toast.success(resendotp?.data?.message)
        dispatch(removeAuthResponse())
      }
      else if (responseLogin?.status === 200) {
        toast.success(resendotp?.data?.message)
        toast.success(responseLogin?.data?.message)
        // Close the modal
        setShow(false);
        // Save user data and token in local storage
        localStorage.setItem('userData', JSON.stringify(responseLogin?.data?.data?.userDetail));
        localStorage.setItem('token', responseLogin?.data?.data?.token);
        dispatch(removeAuthResponse())
      }
      else if (responseLogin?.status === 203) {
        toast.success(responseLogin?.data?.message)
        setShow(false);
        setUserNameModal(true)
        dispatch(removeAuthResponse())
      }
      else if (forgotpassword?.status === 200) {
        toast.success(forgotpassword?.data?.message)
        setForgotPasswordmodal(false)
        setOtpmodal(true)
        dispatch(removeAuthResponse())
      }
      else if (forgotpassword?.status === 203) {
        toast.success(forgotpassword?.data?.message)
        setForgotPasswordmodal(false)
        setUserNameModal(true)
        dispatch(removeAuthResponse())
      }
      else if (updatepassword?.status === 200) {
        toast.success(updatepassword?.data?.message)
        setForgotPasswordmodal(false)
        setResetPasswordmodal(false)
        dispatch(removeAuthResponse())
        setResetPasswordData(null)
      }
      // else if (userData?.status === 200) {
      //   setUserDetails(userData?.data?.data?.userDetail)
      // }
      else if (updateprofile?.status === 200) {
        toast.success(updateprofile?.data?.message)
        localStorage.setItem('userData', JSON.stringify(updateprofile?.data?.data));
        setUserNameModal(false)
        dispatch(removeAuthResponse())
      }
      else {
        toast.error(responseSignup?.data?.message || responseCheckMobile?.data?.message || responseOtpVerify?.data?.message || resendotp?.data?.message || responseLogin?.data?.message || forgotpassword?.data?.message || updateprofile?.data?.message || updatepassword?.data?.message)
        // alert(responseSignup?.data?.message)
        dispatch(removeAuthResponse())
      }
    }

  }, [responseSignup, responseOtpVerify, resendotp, responseLogin, responseCheckMobile, forgotpassword, updateprofile, userData, updatepassword])

  useEffect(() => {
    const fetchUserDetails = async () => {
      const userData = await localStorage.getItem('userData');
      const data = JSON.parse(userData)
      if (data) {
        setUserDetails(data)
      }
    }
    fetchUserDetails()
  }, [])

  const handleChangeSignup = (e) => {
    setUserName(e.target.value);
    if (!isEmail(user_name) && e.target.value.length > 10) {
      setErrorMessage("Please enter a 10-digit number or email address.");
    } else {
      setErrorMessage("");
    }
  };

  const isEmail = (value) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
  };

  const validateInput = () => {
    const isValidInput = /^\d{10}$/.test(mobileNo)

    if (!isValidInput) {
      // setErrorMessage("Please enter a valid 10-digit number or email address.");
      toast.error("Please enter a valid 10-digit number");
      return false;
    }

    return true;
  };
  const validation = () => {
    let isValidate = true
    let isError1 = ''
    let isError2 = ''
    const isValidInput = /^\d{10}$/.test(mobileNo)
    if (!isValidInput) {
      isValidate = false
      isError1 = 'Please enter a valid 10-digit number'
    }
    else if (password == '' || password == undefined) {
      isValidate = false
      isError2 = 'Please enter The Password'
    }
    if (isError1 !== '' || isError2 !== '') {
      setErrorMessage(!isValidInput ? isError1 : isError2)
      toast.error(!isValidInput ? isError1 : isError2)
    }
    return isValidate
  }

  const checkMobile = () => {
    if (validateInput()) {
      dispatch(checkUserMobile({
        mobile: mobileNo
      }))
    }
  }

  const handleSignOtpmodalShow = () => {
    if (validateInput()) {
      dispatch(userRegister({
        user_name: user_name,
        user_type: 'user'
      }))

    }
  };
  // logout start
  const handleLogout = () => {
    // Dispatch the logout action when the user clicks on "Logout"
    dispatch(logout());
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
    dispatch(removeAuthResponse())
    setSignUpModal(false);
    setShow(false);
  };

  const handleSignUpModalShow = () => {
    setSignUpModal(true);
    setShow(false);
  };
  // Forgot password start
  const handleForgotPassword = async () => {
    if (validateInput()) {
      dispatch(userForgotPassword({
        mobile: mobileNo,
        user_type: 'user'
      }));
    }
  };

  // Forgot password end
  const handleForgotPasswordmodalClose = () => {
    setForgotPasswordmodal(false);
    setShow(false);
  };

  const handleForgotPasswordmodalShow = () => {
    setForgotPasswordmodal(true);
    setShow(false);
  };

  const handleOtpmodalClose = () => {
    dispatch(userVerfiyOTP({
      mobile: mobileNo,
      otp: Number(forgotOtp.join(''))
    }))
    setForgotOtp(['', '', '', '', '', ''])
    // setOtpmodal(false);
    // setShow(false);
  };


  const handleOtpmodalShow = async () => {
    if (validation()) {
      try {
        await dispatch(userLogin({
          mobile: mobileNo,
          password: password,
          user_type: 'user'
        }));
        setPassword('')
      } catch (error) {
        toast.error("Login failed");
      }
    }
  };

  const handleSignOtpmodalClose = () => {
    dispatch(userVerfiyOTP({
      mobile: mobileNo,
      otp: Number(otp.join(''))
    }))
    setOtp(['', '', '', '', '', ''])
    // setSignOtpmodal(false);
    // setSignUpModal(false);
  };

  // const handleSignOtpmodalShow = () => {
  //   setSignOtpmodal(true);
  //   setSignUpModal(false);
  // };

  const resetPasswordValidation = () => {
    let isValidate = true
    let isError = ''
    if (resetPasswordData?.password == '' || resetPasswordData?.password == undefined) {
      isValidate = false
      isError = 'Please enter The Password'
    }
    else if (resetPasswordData?.confirmPassword == '' || resetPasswordData?.confirmPassword == undefined) {
      isValidate = false
      isError = 'Please enter The confirm Password'
    }
    else if (resetPasswordData?.confirmPassword !== resetPasswordData?.password) {
      isValidate = false
      isError = 'Your password and confirmation password do not match.'
    }
    if (isError !== '') {
      toast.error(isError)
    }
    return isValidate
  }

  const handleResetPasswordmodalClose = () => {
    setResetPasswordmodal(false);
    setForgotPasswordmodal(false);
  };

  const onPressResetPassword = () => {
    if (resetPasswordValidation()) {
      dispatch(resetPassword({
        mobile: mobileNo,
        password: resetPasswordData.password
      }))
    }
  };
  const [showOverlay, setShowOverlay] = useState(false);

  const handleSearchClick = () => {
    setShowOverlay(true);
  };

  const handleHideOverlay = () => {
    setShowOverlay(false);
  };

  const handleStateChnage = (e) => {
    const { name, value } = e.target
    if (name === 'mobile') {
      setMobileNo(e.target.value);
    } else {
      setPassword(e.target.value)
    }

  }

  const inputRefs1 = useRef([]);

  // Function to focus on the next input box
  const focusNextInput1 = (currentIndex) => {
    if (currentIndex < inputRefs1.current.length - 1) {
      inputRefs1.current[currentIndex + 1].focus();
    }
  };

  // Function to focus on the previous input box
  const focusPrevInput1 = (currentIndex) => {
    if (currentIndex > 0) {
      inputRefs1.current[currentIndex - 1].focus();
    }
  };

  // Function to handle change in OTP input
  const handleChange = (index, value) => {
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Move to the next input box if a value is entered
    if (value !== '') {
      if (index < otp.length - 1) {
        focusNextInput1(index);
      }
    } else {
      // If value is removed, check if we should move to the previous input box
      if (index > 0 && newOtp[index - 1] === '') {
        focusPrevInput1(index);
      }
    }
  };

  // Function to handle key presses for navigation and backspace
  const handleKeyPress1 = (e, index) => {
    if (e.key === 'ArrowLeft') {
      focusPrevInput1(index);
    } else if (e.key === 'ArrowRight') {
      focusNextInput1(index);
    } else if (e.key === 'Backspace') {
      // If backspace is pressed and the current input box is empty, move to the previous box
      if (otp[index] === '') {
        focusPrevInput1(index);
      }
    }
  };

  // Initialize the inputRefs1 array
  useEffect(() => {
    inputRefs1.current = inputRefs1.current.slice(0, otp.length);
  }, [otp]);

  const inputRefs = useRef([]);

  // Focus on the next input box
  const focusNextInput = (currentIndex) => {
    if (currentIndex < inputRefs.current.length - 1) {
      inputRefs.current[currentIndex + 1].focus();
    }
  };

  // Focus on the previous input box
  const focusPrevInput = (currentIndex) => {
    if (currentIndex > 0) {
      inputRefs.current[currentIndex - 1].focus();
    }
  };

  // Handle change in OTP input
  const handleForgotOtp = (index, value) => {
    const newOtp = [...forgotOtp];
    newOtp[index] = value;
    setForgotOtp(newOtp);

    // Move to the next input box if a value is entered
    if (value !== '') {
      if (index < forgotOtp.length - 1) {
        focusNextInput(index);
      }
    } else {
      // If value is removed, check if we should move to the previous input box
      if (index > 0 && newOtp[index - 1] === '') {
        focusPrevInput(index);
      }
    }
  };

  // Handle key press events for navigation and backspace
  const handleKeyPress = (e, index) => {
    if (e.key === 'ArrowLeft') {
      focusPrevInput(index);
    } else if (e.key === 'ArrowRight') {
      focusNextInput(index);
    } else if (e.key === 'Backspace') {
      // If backspace is pressed and the current input box is empty, move to the previous box
      if (forgotOtp[index] === '') {
        focusPrevInput(index);
      }
    }
  };

  // Initialize the inputRefs array
  useEffect(() => {
    inputRefs.current = inputRefs.current.slice(0, forgotOtp.length);
  }, [forgotOtp]);


  const handleResendOtp = () => {
    dispatch(removeAuthResponse())
    dispatch(userReSendOTP({
      mobile: mobileNo
    }))
  }

  const handleUserNameChnage = (e) => {
    const { name, value } = e.target
    setUserNameData({
      ...userNameData, [name]: value
    })
  }

  const UserNameValidation = () => {
    let isValidate = true
    let isError = ''
    if (userNameData?.name === '' || userNameData?.name === undefined) {
      isValidate = false
      isError = 'Please enter the username'
    }
    else if (userNameData?.password == '' || userNameData?.password == undefined) {
      isValidate = false
      isError = 'Please enter The Password'
    }
    else if (userNameData?.confirmPassword == '' || userNameData?.confirmPassword == undefined) {
      isValidate = false
      isError = 'Please enter The confirm Password'
    }
    else if (userNameData?.confirmPassword !== userNameData?.password) {
      isValidate = false
      isError = 'Your password and confirmation password do not match.'
    }
    if (isError) {
      toast.error(isError)
    }
    return isValidate
  }

  const CreateUserName = async () => {
    const userId = await localStorage.getItem('userData')
    if (UserNameValidation()) {
      const data = new URLSearchParams();
      data.append("user_name", userNameData?.name);
      data.append("mobile", mobileNo);
      data.append("password", userNameData?.password);
      data.append("user_id", '');
      dispatch(updateProfile(data))
    }
  }

  return (
    <>
      <div className="top-nav">
        <Container fluid className="container-space">
          <Row>
            <Col lg={6}>
              <div className="">
                <Row>
                  <Col sm={2} className="align-self-center p-0">
                    <Link>Courses</Link>
                  </Col>
                  <Col sm={3} className="align-self-center p-0">
                    <Link>Test series</Link>
                  </Col>
                  <Col sm={7} className="p-0">
                    <button>
                      Root App <img src={welcome3} />
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
              <Nav.Link >
                <Link className="linkA-view" to="/home">Home</Link>
              </Nav.Link>
              <Nav.Link >
                <Link className="linkA-view" to="/study-material">Study Material</Link>
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
              <div className="dropdown">
                <button className="dropbtn">
                  <Link>
                    Quiz <i className="fa fa-angle-down" />
                  </Link>
                </button>
                <div className="dropdown-content">
                  <Link to="">Link 1</Link>
                  <Link to="">Link 2</Link>
                  <Link to="">Link 3</Link>
                </div>
              </div>
              <div className="dropdown">
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
              </div>
              <div className="dropdown">
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
              </div>
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
                <div className="overlay-header">
                  <div className="search-container">
                    <input type="text" placeholder="Search..." />
                    <i className="fa fa-close" onClick={handleHideOverlay} />
                  </div>
                </div>
              )}
              <Form className="d-flex">
                <span onClick={handleSearchClick}>
                  <i className="fa fa-search" />
                </span>
                {!isAuthenticated && (<Button variant="outline-success" onClick={handleShow}>
                  Login
                </Button>)}
              </Form>
              {isAuthenticated && (<div className="dropdown">
                <div className="dropbtn">
                  <Link>
                    <img src={userProfile} />
                  </Link>
                </div>
                <div className="dropdown-content userprofile">
                  <div className="profile-header">
                    <img src={userProfile} />
                    <div>
                      <h4>{userDetails?.user_name ? userDetails?.user_name : 'jhon Doe'}</h4>
                      <p>{userDetails?.email ? userDetails?.email : 'jhon@gmail.com'}</p>
                    </div>
                  </div>
                  <hr className="m-0" />
                  <Link to="/my-profile">Profile</Link>
                  <Link onClick={handleLogout}>Logout</Link>
                </div>
              </div>)}
            </>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/*================================= Login Modal ============================= */}
      <Modal show={show} onHide={handleClose}>
        <Modal.Body className="login-area">
          <div className="text-center">
            <h6>Welcome to</h6>
            <h2>Crazy GK Trick</h2>
          </div>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Mobile Number</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter your Mobile Number"
                autoFocus
                name="mobile"
                value={mobileNo}
                onChange={(val) => {
                  const mobile = val?.target?.value
                  if (mobile?.length <= 10) {
                    handleStateChnage(val)
                  }
                }}
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter your password"
                name="user_password"
                onChange={(val) => handleStateChnage(val)}
              />
            </Form.Group>
          </Form>
          {/* {errorMessage && <div className="text-danger">{errorMessage}</div>} */}
          <div className="Forgottext">
            <Link onClick={handleForgotPasswordmodalShow}>
              Forgot Password?
            </Link>
          </div>
          <div className="text-center">
            <Button onClick={handleOtpmodalShow}>Login</Button>
            <p>
              Don't have an account?{" "}
              <Link onClick={handleSignUpModalShow}>Create account</Link>
            </p>
          </div>
        </Modal.Body>
      </Modal>

      {/*================================= Sign Up Modal ============================= */}
      <Modal show={signUpModal} onHide={handleSignUpModalClose}>
        <Modal.Body className="login-area">
          <div className="text-center">
            <h6>Let’s Sign Up To</h6>
            <h2>Create an account</h2>
          </div>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Mobile Number</Form.Label>

              <Form.Control
                type="email"
                placeholder="Enter your Mobile Number"
                autoFocus
                name="mobile"
                value={mobileNo}
                onChange={(val) => {
                  const mobile = val?.target?.value
                  if (mobile?.length <= 10) {
                    handleStateChnage(val)
                  }
                }}
              />
            </Form.Group>
          </Form>
          <div className="social-are">
            <div className="social-login">
              <img src={GoogleIcon} />
              Sign in with google
            </div>
            <div className="social-login">
              <img src={FacebookIcon} />
              Sign in with facebook
            </div>
          </div>
          <div className="text-center">
            <Button onClick={() => checkMobile()}>Create Account</Button>
          </div>
          <div className="text-center">
            <p>
              Already have an account?{" "}
              <Link onClick={handleShow} onHide={handleSignUpModalClose}>
                Login
              </Link>
            </p>
          </div>
        </Modal.Body>
      </Modal>

      {/* ================================ login OTP Modal =============================== */}
      <Modal show={otpmodal} onHide={() => {
        dispatch(removeAuthResponse())
        setOtpmodal(false);
        setForgotPasswordmodal(false);
      }}>
        <Modal.Body className="login-area">
          <div className="text-center">
            <h6>Welcome to</h6>
            <h2>Crazy GK Trick</h2>
          </div>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>
                Enter the six digit passcode sent to {mobileNo}
              </Form.Label>
              <div className="otp-input-fields">
                {forgotOtp.map((value, index) => (
                  <input
                    key={index}
                    ref={(el) => (inputRefs.current[index] = el)}
                    type="text"
                    maxLength="1"
                    value={value}
                    onChange={(e) => handleForgotOtp(index, e.target.value)}
                    onKeyDown={(e) => handleKeyPress(e, index)}
                  />
                ))}
              </div>
            </Form.Group>
          </Form>
          <div className="Forgottext">
            <Button onClick={() => handleResendOtp()} to="">Resend OTP</Button>
          </div>
          <div className="text-center">
            <Button onClick={handleOtpmodalClose}>Verify OTP</Button>
          </div>
        </Modal.Body>
      </Modal>

      {/* ================================ Signup OTP Modal =============================== */}
      <Modal show={signotpmodal} onHide={() => {
        dispatch(removeAuthResponse())
        setSignOtpmodal(false);
        setSignUpModal(false);
      }}>
        <Modal.Body className="login-area">
          <div className="text-center">
            <h6>Welcome to</h6>
            <h2>Crazy GK Trick</h2>
          </div>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>
                Enter the six digit passcode sent to {mobileNo}
              </Form.Label>
              <div className="otp-input-fields">
                {otp.map((value, index) => (
                  <input
                    key={index}
                    ref={(el) => (inputRefs1.current[index] = el)}
                    type="text"
                    maxLength="1"
                    value={value}
                    onChange={(e) => handleChange(index, e.target.value)}
                    onKeyDown={(e) => handleKeyPress1(e, index)}
                  />
                ))}
              </div>
            </Form.Group>
          </Form>
          <div className="Forgottext">
            <Link to="" onClick={() => handleResendOtp()}>Resend OTP</Link>
          </div>
          <div className="text-center">
            <Button onClick={handleSignOtpmodalClose}>Verify OTP</Button>
          </div>
        </Modal.Body>
      </Modal>

      {/*================================= Forgot Password Modal ============================= */}
      <Modal show={ForgotPasswordmodal} onHide={handleForgotPasswordmodalClose}>
        <Modal.Body className="login-area">
          <div className="text-center">
            <h6>Don’t Worry It Happens.</h6>
            <h2>Forgot Password</h2>
          </div>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email ID / Mobile Number</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your email or mobile number"
                value={mobileNo}
                onChange={(e) => {
                  if (e.target.value?.length <= 10) {
                    setMobileNo(e.target.value)
                  }
                }}
              />
            </Form.Group>
          </Form>
          <div className="text-center">
            <Button onClick={handleForgotPassword}>Get OTP</Button>
          </div>
        </Modal.Body>
      </Modal>

      {/*================================= User Name Modal ============================= */}
      <Modal show={userNameModal} onHide={() => setUserNameModal(false)}>
        <Modal.Body className="login-area">
          <div className="text-center">
            <h6>Welcome to</h6>
            <h2>Crazy GK Trick</h2>
          </div>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>User Name</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter your User Name"
                autoFocus
                name="name"
                value={userNameData?.name}
                onChange={(val) => handleUserNameChnage(val)}
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter your password"
                name="password"
                value={userNameData?.password}
                onChange={(val) => handleUserNameChnage(val)}
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter your password"
                name="confirmPassword"
                value={userNameData?.confirmPassword}
                onChange={(val) => handleUserNameChnage(val)}
              />
            </Form.Group>
          </Form>
          <div className="text-center">
            <Button onClick={CreateUserName}>Create</Button>
          </div>
        </Modal.Body>
      </Modal>

      {/* ========================== Reset Password ========================== */}
      <Modal show={resetPasswordmodal} onHide={handleResetPasswordmodalClose}>
        <Modal.Body className="login-area">
          <div className="text-center">
            <h6>Change Your Password</h6>
            <h2>Reset Password</h2>
          </div>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>New Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter New Password"
                autoFocus
                name="password"
                value={resetPasswordData?.password}
                onChange={(val) => {
                  setResetPasswordData({
                    ...resetPasswordData,
                    password: val.target.value
                  })
                }}
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Confirm New Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter Confirm New Password"
                name="confirmPassword"
                value={resetPasswordData?.confirmPassword}
                onChange={(val) => {
                  setResetPasswordData({
                    ...resetPasswordData,
                    confirmPassword: val.target.value
                  })
                }}
              />
            </Form.Group>
          </Form>

          <div className="text-center">
            <Button onClick={() => onPressResetPassword()}>Reset Password</Button>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default Header;

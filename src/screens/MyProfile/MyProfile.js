import React, { useEffect, useState } from "react";
import "../MyProfile/MyProfile.css";
import Header from "../../directives/header/header";
import { Button, Col, Container, Form, InputGroup, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import Footer from "../../directives/footer/footer";
import { removeAuthResponse, updateProfile } from "../../reduxx/action/AuthAction";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";

function MyProfile() {
  const dispatch = useDispatch()
  const { updateprofile } = useSelector(state => state.auth) || {}
  const [profileData, setProfileData] = useState({
    name: '',
    email: '',
    gender: 'male',
    dob: '',
    mobile: '',
    address: '',
    city: '',
    state: '',
    country: '',
    pincode: ''
  })

  useEffect(() => {
    fetchUserDetails()
  }, [])
  useEffect(() => {
    if (updateprofile?.status === 200) {
      toast.success(updateprofile?.data?.message)
      localStorage.setItem('userData', JSON.stringify(updateprofile?.data?.data));
      dispatch(removeAuthResponse())
    } else {
      toast.error(updateprofile?.data?.message)
    }
  }, [updateprofile])


  console.log('profileData', profileData);
  const handleVlaueChnage = (event) => {
    const { name, value } = event.target;
    setProfileData({
      ...profileData, [name]: value
    })
  }

  const fetchUserDetails = async () => {
    const userData = await localStorage.getItem('userData');
    const data = JSON.parse(userData)
    if (data) {
      setProfileData({
        name: data?.name ?? '',
        email: data?.email ?? '',
        gender: data?.gender ?? '',
        dob: data?.birth_date ?? '',
        mobile: data?.mobile ?? '',
        address: data?.address ?? '',
        city: data?.city ?? '',
        state: data?.state ?? '',
        country: data?.country ?? '',
        pincode: data?.pincode ?? ''
      })
    }
  }

  const handleSubmit = async () => {
    const userData = await localStorage.getItem('userData');
    const data = new URLSearchParams();
    data.append("user_id", JSON.parse(userData)?._id ?? '');
    data.append("email", profileData?.email ?? '');
    data.append("name", profileData?.name ?? '');
    data.append("gender", profileData?.gender ?? '');
    data.append("birth_date", profileData?.dob ?? '');
    data.append("mobile", profileData?.mobile ?? '');
    data.append("address", profileData?.address ?? '');
    data.append("city", profileData?.city ?? '');
    data.append("state", profileData?.state ?? '');
    data.append("country", profileData?.country ?? '');
    data.append("pincode", profileData?.pincode ?? '');
    dispatch(updateProfile(data))
  }
  return (
    <>
      <Header />
      <div className="all-bannerBG">
        <Container fluid className="container-space">
          <Row className="justify-content-center">
            <Col lg={6} sm={8}>
              <div className="all-banner-content">
                <h3>My Profile</h3>
                <Link to="/home">Home </Link>
                <span>
                  <i className="fa fa-angle-double-right" /> Plans
                </span>
                <InputGroup className="mb-3">
                  <Form.Control placeholder="Search Features" />
                  <InputGroup.Text id="basic-addon2">
                    <i className="fa fa-search" />
                  </InputGroup.Text>
                </InputGroup>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <section className="section-padding">
        <Container fluid className="container-space">
          <Row className="justify-content-center">
            <Col lg={8}>
              <div className="About-Subject profilen-area mb-4">
                <div className="login-area">
                  <div className="main-heading">
                    <h4>Update Profile</h4>
                  </div>
                  <Form>
                    <Form.Group className="mb-3" controlId="formProfilePicture">
                      <div className="profile-upload">
                        <label
                          htmlFor="profile-picture"
                          className="profile-picture-label"
                        >
                          <input
                            type="file"
                            id="profile-picture"
                            accept="image/*"
                            style={{ display: "none" }}
                          />
                          <img
                            src="https://d30y9cdsu7xlg0.cloudfront.net/png/138926-200.png"
                            alt="Profile"
                            className="profile-picture"
                          />
                          {/* <div className="overlay">
                            <i className="fa fa-plus-circle plus-icon"></i>
                          </div> */}
                        </label>
                        <br />
                        <Form.Label>Profile Picture</Form.Label>
                      </div>
                    </Form.Group>
                    <Row>
                      <Col lg={6} sm={6} xs={12} className="mb-3">
                        <Form.Group controlId="formGridEmail">
                          <Form.Label>Name</Form.Label>
                          <Form.Control
                            type="text"
                            placeholder="Enter Name"
                            value={profileData?.name}
                            name="name"
                            onChange={handleVlaueChnage}
                          />
                        </Form.Group>
                      </Col>
                      <Col lg={6} sm={6} xs={12} className="mb-3">
                        <Form.Group controlId="formGridPassword">
                          <Form.Label>Email Address</Form.Label>
                          <Form.Control
                            type="email"
                            placeholder="Enter Email Address"
                            value={profileData?.email}
                            name="email"
                            onChange={handleVlaueChnage}
                          />
                        </Form.Group>
                      </Col>
                    </Row>
                    <Row className="mb-3">
                      <Col lg={6} sm={6} xs={12} className="mb-3">
                        <Form.Group controlId="formGridEmail">
                          <Form.Label>Gender</Form.Label>
                          <Form.Select defaultValue="Choose..."
                            value={profileData?.gender}
                            name="gender"
                            onChange={handleVlaueChnage}>
                            <option value={'female'}>Female</option>
                            <option value={'male'}>Male</option>
                          </Form.Select>
                        </Form.Group>
                      </Col>
                      <Col lg={6} sm={6} xs={12} className="mb-3">
                        <Form.Group controlId="formGridPassword">
                          <Form.Label>DOB</Form.Label>
                          <Form.Control type="date" placeholder="Enter DOB"
                            value={profileData?.dob}
                            name="dob"
                            onChange={handleVlaueChnage} />
                        </Form.Group>
                      </Col>
                    </Row>
                    <Row className="mb-3">
                      <Col lg={6} sm={6} xs={12} className="mb-3">
                        <Form.Group controlId="formGridEmail">
                          <Form.Label>Mobile Number</Form.Label>
                          <Form.Control
                            type="number"
                            placeholder="Enter Mobile Number"
                            value={profileData?.mobile}
                            name="mobile"
                            onChange={handleVlaueChnage}
                            disabled
                          />
                        </Form.Group>
                      </Col>
                      <Col lg={6} sm={6} xs={12} className="mb-3">
                        <Form.Group controlId="formGridPassword">
                          <Form.Label>Address</Form.Label>
                          <Form.Control
                            type="text"
                            placeholder="Enter Address"
                            value={profileData?.address}
                            name="address"
                            onChange={handleVlaueChnage}
                          />
                        </Form.Group>
                      </Col>
                    </Row>
                    <Row className="mb-3">
                      <Col lg={6} sm={6} xs={12} className="mb-3">
                        <Form.Group controlId="formGridEmail">
                          <Form.Label>City</Form.Label>
                          <Form.Control type="text" placeholder="Enter City"
                            value={profileData?.city}
                            name="city"
                            onChange={handleVlaueChnage} />
                        </Form.Group>
                      </Col>
                      <Col lg={6} sm={6} xs={12} className="mb-3">
                        <Form.Group controlId="formGridPassword">
                          <Form.Label>State</Form.Label>
                          <Form.Control type="text" placeholder="Enter State"
                            value={profileData?.state}
                            name="state"
                            onChange={handleVlaueChnage} />
                        </Form.Group>
                      </Col>
                    </Row>
                    <Row className="mb-3">
                      <Col lg={6} sm={6} xs={12} className="mb-3">
                        <Form.Group controlId="formGridEmail">
                          <Form.Label>Country</Form.Label>
                          <Form.Select defaultValue="Choose..."
                            value={profileData?.country}
                            name="country"
                            onChange={handleVlaueChnage}>
                            <option value={''}>Choose...</option>
                            <option value={'india'}>India</option>
                          </Form.Select>
                        </Form.Group>
                      </Col>
                      <Col lg={6} sm={6} xs={12} className="mb-3">
                        <Form.Group controlId="formGridPassword">
                          <Form.Label>Pincode</Form.Label>
                          <Form.Control
                            type="number"
                            placeholder="Enter Pincode"
                            value={profileData?.pincode}
                            name="pincode"
                            onChange={handleVlaueChnage}
                          />
                        </Form.Group>
                      </Col>
                    </Row>
                  </Form>
                  <div className="text-center mt-5">
                    <Button variant="success" onClick={(e) => handleSubmit()}>Update Profile</Button>
                  </div>
                </div>
              </div>
              <div className="About-Subject ">
                <Row>
                  <Col lg={4} sm={4} className="align-self-center">
                    <div className="Suscription-area">
                      <h6>Suscription Plan Active</h6>
                    </div>
                  </Col>
                  <Col lg={5} sm={5}>
                    <div className="Suscription-area text-center">
                      <h6>Freebie</h6>
                      <p>
                        Ideal for individuals who need quick <br />
                        access to basic features.
                      </p>
                    </div>
                  </Col>
                  <Col lg={3} sm={3} className="align-self-center">
                    <div className="text-center">
                      <Button variant="success">Update the Plan</Button>
                    </div>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <Footer />
    </>
  );
}

export default MyProfile;

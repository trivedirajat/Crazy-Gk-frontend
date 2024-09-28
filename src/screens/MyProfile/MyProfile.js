import React, { useEffect, useState } from "react";
import "../MyProfile/MyProfile.css";
import Header from "../../directives/header/header";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import Footer from "../../directives/footer/footer";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { BaseURL } from "../../Config";
import apiEndPoints from "../../utils/apiEndPoints";
import Axios from "../../utils/Axios";

function MyProfile() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();
  const [loading, setLoading] = useState(false);
  const [profileImage, setProfileImage] = useState(null);
  const [previewImage, setPreviewImage] = useState(null);

  const userData = localStorage.getItem("user");
  const parsedData = JSON.parse(userData);

  const fetchUserDetails = async () => {
    try {
      // Fetch user details from the API
      const response = await Axios.get(
        `${BaseURL}${apiEndPoints.GETPROFILE_API}/${parsedData._id}`,
        {
          requireAuth: true,
        }
      );
      if (response.status === 200) {
        const user = response.data?.data;
        setValue("name", user?.name ?? "");
        setValue("email", user?.email ?? "");
        setValue("gender", user?.gender ?? "male");
        setValue("birth_date", user?.birth_date ?? "");
        setValue("mobile", user?.mobile ?? "");
        setValue("address", user?.address ?? "");
        setValue("city", user?.city ?? "");
        setValue("state", user?.state ?? "");
        setValue("country", user?.country ?? "");
        setValue("pincode", user?.pincode ?? "");
        setPreviewImage(user?.profile_image ?? ""); // Set profile picture if available
      } else {
        toast.error("Failed to load profile details.");
      }
    } catch (error) {
      toast.error("An error occurred while fetching user details.");
    }
  };

  useEffect(() => {
    fetchUserDetails();
  }, []);

  // Handle form submission
  const onSubmit = async (data) => {
    setLoading(true);
    try {
      const formData = new FormData();
      formData.append("user_id", parsedData._id);
      formData.append("name", data.name);
      formData.append("email", data.email);
      formData.append("gender", data.gender);
      formData.append("birth_date", data.birth_date);
      formData.append("mobile", data.mobile);
      formData.append("address", data.address);
      formData.append("city", data.city);
      formData.append("state", data.state);
      formData.append("country", data.country);
      formData.append("pincode", data.pincode);

      if (profileImage) {
        formData.append("profile", profileImage);
      }

      const response = await Axios.put(
        `${BaseURL}${apiEndPoints.UPDATEPROFILE_API}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      if (response.status === 200) {
        toast.success(response.data.message);
        localStorage.setItem("user", JSON.stringify(response.data.data));
        navigate("/home");
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      toast.error(error?.response?.data?.message || "Profile update failed.");
    } finally {
      setLoading(false);
    }
  };

  // Handle image change for preview
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProfileImage(file);
      setPreviewImage(URL.createObjectURL(file));
    }
  };
  if (!parsedData || !parsedData._id) {
    toast.error("Please log in first.");
    navigate("/home");
    return;
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
                  <i className="fa fa-angle-double-right" /> My Profile
                </span>
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
                  <Form onSubmit={handleSubmit(onSubmit)}>
                    <Form.Group className="mb-3" controlId="formProfilePicture">
                      <div className="profile-upload">
                        <label
                          htmlFor="profile-picture"
                          className="profile-picture-label"
                          style={{ display: "block", textAlign: "center" }}
                        >
                          <input
                            type="file"
                            id="profile-picture"
                            accept="image/*"
                            style={{ display: "none" }}
                            onChange={handleImageChange}
                          />
                          {previewImage ? (
                            <img
                              src={previewImage}
                              alt="Profile Preview"
                              className="profile-picture"
                              style={{
                                width: "150px",
                                height: "150px",
                                borderRadius: "50%",
                                objectFit: "cover",
                              }}
                            />
                          ) : (
                            <img
                              src="https://d30y9cdsu7xlg0.cloudfront.net/png/138926-200.png"
                              alt="Default Profile"
                              className="profile-picture"
                              style={{
                                width: "150px",
                                height: "150px",
                                borderRadius: "50%",
                                objectFit: "cover",
                              }}
                            />
                          )}
                        </label>
                        <br />
                        <Form.Label style={{ textAlign: "center" }}>
                          Profile Picture
                        </Form.Label>
                      </div>
                    </Form.Group>

                    {/* Name Field */}
                    <Row>
                      <Col lg={6}>
                        <Form.Group controlId="name" className="mb-3">
                          <Form.Label>Name</Form.Label>
                          <Form.Control
                            type="text"
                            placeholder="Enter Name"
                            {...register("name", {
                              required: "Name is required",
                            })}
                            isInvalid={errors.name}
                          />
                          <Form.Control.Feedback type="invalid">
                            {errors.name?.message}
                          </Form.Control.Feedback>
                        </Form.Group>
                      </Col>

                      {/* Email Field */}
                      <Col lg={6}>
                        <Form.Group controlId="email" className="mb-3">
                          <Form.Label>Email Address</Form.Label>
                          <Form.Control
                            type="email"
                            placeholder="Enter Email Address"
                            {...register("email", {
                              required: "Email is required",
                            })}
                            isInvalid={errors.email}
                          />
                          <Form.Control.Feedback type="invalid">
                            {errors.email?.message}
                          </Form.Control.Feedback>
                        </Form.Group>
                      </Col>
                    </Row>
                    {/* Gender Field */}
                    <Row>
                      <Col lg={6}>
                        <Form.Group controlId="gender" className="mb-3">
                          <Form.Label>Gender</Form.Label>
                          <Form.Select {...register("gender")}>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                            <option value="other">Other</option>
                          </Form.Select>
                        </Form.Group>
                      </Col>
                      {/* DOB Field */}
                      <Col lg={6}>
                        <Form.Group controlId="birth_date" className="mb-3">
                          <Form.Label>Date of Birth</Form.Label>
                          <Form.Control
                            type="date"
                            {...register("birth_date")}
                          />
                        </Form.Group>
                      </Col>
                    </Row>
                    {/* Address Fields */}
                    <Row className="mb-3">
                      <Col lg={6}>
                        <Form.Group controlId="mobile">
                          <Form.Label>Mobile Number</Form.Label>
                          <Form.Control
                            type="text"
                            placeholder="Enter Mobile Number"
                            {...register("mobile")}
                          />
                        </Form.Group>
                      </Col>

                      <Col lg={6}>
                        <Form.Group controlId="address">
                          <Form.Label>Address</Form.Label>
                          <Form.Control
                            type="text"
                            placeholder="Enter Address"
                            {...register("address")}
                          />
                        </Form.Group>
                      </Col>
                    </Row>

                    <Row className="mb-3">
                      <Col lg={6}>
                        <Form.Group controlId="city">
                          <Form.Label>City</Form.Label>
                          <Form.Control
                            type="text"
                            placeholder="Enter City"
                            {...register("city")}
                          />
                        </Form.Group>
                      </Col>

                      <Col lg={6}>
                        <Form.Group controlId="state">
                          <Form.Label>State</Form.Label>
                          <Form.Control
                            type="text"
                            placeholder="Enter State"
                            {...register("state")}
                          />
                        </Form.Group>
                      </Col>
                    </Row>

                    <Row className="mb-3">
                      <Col lg={6}>
                        <Form.Group controlId="country" className="mb-3">
                          <Form.Label>Country</Form.Label>
                          <Form.Select
                            {...register("country")}
                            defaultValue={""}
                          >
                            <option value="">choose</option>
                            <option value="India">India</option>
                          </Form.Select>
                        </Form.Group>
                      </Col>

                      <Col lg={6}>
                        <Form.Group controlId="pincode">
                          <Form.Label>Pin Code</Form.Label>
                          <Form.Control
                            type="text"
                            placeholder="Enter Pin Code"
                            {...register("pincode")}
                          />
                        </Form.Group>
                      </Col>
                    </Row>
                    <div className="text-center" style={{ margin: "5rem 0" }}>
                      <Button
                        type="submit"
                        disabled={loading}
                        variant="success"
                        style={{
                          margin: "0 auto",
                        }}
                      >
                        {loading ? "Updating..." : "Update Profile"}
                      </Button>
                    </div>
                  </Form>
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
                </div>
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

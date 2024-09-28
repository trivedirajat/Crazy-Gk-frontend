import React, { useEffect, useState } from "react";
import {
  Row,
  Col,
  Button,
  Spinner,
  Container,
  InputGroup,
  Form,
} from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import Axios from "../../utils/Axios";
import { BaseURL } from "../../Config";
import apiEndPoints from "../../utils/apiEndPoints";
import placeholder from "../../assets/images/placeholder.png";
import Header from "../../directives/header/header";
import Footer from "../../directives/footer/footer";
import { toast } from "react-toastify";
import "../StudyMaterialbySubject/index.css";

const SubjectWiseVideo = () => {
  const navigate = useNavigate();
  const [subjects, setSubjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const limit = 20;
  const [visibleSubjects, setVisibleSubjects] = useState(limit);
  const [totalSubjects, setTotalSubjects] = useState(0);

  // Fetch subjects from API
  const fetchSubjects = async () => {
    setLoading(true);
    try {
      const response = await Axios.get(
        `${BaseURL}${apiEndPoints.GETSUBJECTS_API}`,
        {
          params: { limit: visibleSubjects },
        }
      );
      setSubjects(response.data.data);
      setTotalSubjects(response.data.total_data);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSubjects();
  }, [visibleSubjects]);

  const handleLoadMore = () => {
    setVisibleSubjects((prev) => prev + limit); // Increase the limit by 10
  };

  if (loading && subjects.length === 0) return <Spinner animation="border" />;
  if (error) toast.error(error.message || "Something went wrong");
  return (
    <>
      <Header />
      <div className="all-bannerBG">
        <Container fluid className="container-space">
          <Row className="justify-content-center">
            <Col lg={6} sm={8}>
              <div className="all-banner-content">
                <h3>Subject Wise Video</h3>
                <Link to="/home">Home </Link>
                <span>
                  <i className="fa fa-angle-double-right" /> Subject Wise Video
                </span>
                <InputGroup className="mb-3">
                  <Form.Control placeholder="Search Subject" />
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
          <div className="topic-box space-section">
            {subjects?.length > 0 &&
              subjects?.map((item) => (
                <div
                  className="Topic-card"
                  style={{ cursor: "pointer" }}
                  onClick={() =>
                    navigate(`/trending-on-youtube?subjectid=${item?._id}`)
                  }
                >
                  <div className="taxonomy-image">
                    {/* <img src={Topic1} /> */}
                    <img
                      src={item?.image || placeholder}
                      alt={item?.subject_name}
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = placeholder;
                      }}
                      style={{
                        borderRadius: "10px",
                      }}
                    />
                  </div>
                  <div>
                    <h5>{item?.subject_name}</h5>
                  </div>
                </div>
              ))}
          </div>
        </Container>
        {visibleSubjects < totalSubjects && (
          <div className="text-center mt-4">
            <Button
              variant="success"
              onClick={handleLoadMore}
              disabled={loading}
            >
              {loading ? "Loading..." : "Load More"}
            </Button>
          </div>
        )}
      </section>

      {/* Adds code  */}
      <div></div>
      <Footer />
    </>
  );
};

export default SubjectWiseVideo;

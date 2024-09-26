import React, { useEffect, useState } from "react";
import "../home/index.css";
import Header from "../../directives/header/header";
import { Col, Container, Form, InputGroup, Row, Button } from "react-bootstrap";
import Topic1 from "../../assets/images/img/science 2.png";
import NotFound from "../../assets/images/img/notfound.png";
import Footer from "../../directives/footer/footer";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchSubject } from "../../reduxx/action/SubjectAction";

function StudyMaterial() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { getsubject } = useSelector((state) => state.subject);

  // States for search and data handling
  const [searchTxt, setSearchTxt] = useState("");
  const [subjects, setSubjects] = useState([]);
  const [limit, setLimit] = useState(10); // Start with limit 10
  const [isLoadingMore, setIsLoadingMore] = useState(false);
  const [totalData, setTotalData] = useState(0); // Total data count

  useEffect(() => {
    fetchSubjects();
  }, [limit, searchTxt]);

  useEffect(() => {
    if (getsubject?.data?.length > 0) {
      // Append new data using Set to remove duplicates
      setSubjects((prev) => {
        const combinedSubjects = [...prev, ...getsubject.data];
        // Using Set to filter out duplicates based on _id
        const uniqueSubjects = Array.from(
          new Set(combinedSubjects.map((item) => item._id))
        ).map((id) => combinedSubjects.find((item) => item._id === id));

        return uniqueSubjects;
      });

      // Update total data from the API response
      setTotalData(getsubject.total_data);
    }
    setIsLoadingMore(false); // Reset loading state after data is added
  }, [getsubject]);

  const fetchSubjects = () => {
    // Dispatch action to fetch subjects with increased limit
    dispatch(
      fetchSubject({
        offset: 0, // Always set offset to 0
        limit: limit, // Increment limit to fetch more data
        subject_name: searchTxt ?? "",
      })
    );
  };

  const handleLoadMore = () => {
    if (subjects.length < totalData) {
      setIsLoadingMore(true);
      setLimit((prevLimit) => prevLimit + 10); // Increase the limit by 10
    }
  };

  return (
    <>
      <Header />
      <div className="all-bannerBG">
        <Container fluid className="container-space">
          <Row className="justify-content-center">
            <Col lg={6} sm={6}>
              <div className="all-banner-content">
                <h3>Study Material</h3>
                <Link to="/home">Home </Link>
                <span>
                  <i className="fa fa-angle-double-right" /> Study Material
                </span>
                <InputGroup className="mb-3">
                  <Form.Control
                    placeholder="Search Subject"
                    onChange={(val) => setSearchTxt(val?.target?.value)}
                  />
                  <InputGroup.Text
                    id="basic-addon2"
                    onClick={() => fetchSubjects()}
                  >
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
          {subjects?.length > 0 ? (
            <div className="topic-box space-section">
              {subjects.map((item) => (
                <div
                  className="Topic-card"
                  key={item?._id}
                  style={{ cursor: "pointer" }}
                  onClick={() =>
                    navigate(`/study-material/${item?._id}`, {
                      state: { subjectData: item },
                    })
                  }
                >
                  <div className="taxonomy-image">
                    <img
                      src={item?.image || Topic1}
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = Topic1;
                      }}
                      alt="error"
                    />
                  </div>
                  <div>
                    <h5>{item?.subject_name}</h5>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="justify-content-center d-flex align-items-center">
              <img src={NotFound} alt="error" />
            </div>
          )}

          {subjects.length < totalData && (
            <div className="d-flex justify-content-center mt-3">
              <Button
                variant="success"
                onClick={handleLoadMore}
                disabled={isLoadingMore}
              >
                {isLoadingMore ? "Loading..." : "Load More"}
              </Button>
            </div>
          )}
        </Container>
      </section>

      <Footer />
    </>
  );
}

export default StudyMaterial;

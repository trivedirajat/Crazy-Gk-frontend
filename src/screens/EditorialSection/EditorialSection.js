import React, { useEffect, useState } from "react";
import { Col, Container, Form, InputGroup, Row, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import CalendarPage from "../../components/Calendar/CalendarPage";
import Footer from "../../directives/footer/footer";
import Header from "../../directives/header/header";
import "../EditorialSection/EditorialSection.css";
import "../StudyMaterialbySubject/index.css";
import moment from "moment";
import Axios from "../../utils/Axios";
import { BaseURL } from "../../Config";
import apiEndPoints from "../../utils/apiEndPoints";
import { toast } from "react-toastify";
import { stripHtmlTags } from "../../utils/stripHtmlTags";

function EditorialSection(props) {
  const navigate = useNavigate();
  const [getCAdate, setgetCAdate] = useState(new Date());
  const [editorial, seteditorial] = useState([]);
  const [limit, setLimit] = useState(10); // Initial limit set to 20
  const [totalData, setTotalData] = useState(0); // To track total data count

  useEffect(() => {
    const covertDate = moment(getCAdate).format("YYYY-MM-DD");
    const getEditorialData = async () => {
      try {
        const response = await Axios.get(
          `${BaseURL}${apiEndPoints.GET_EDITORIAL}`,
          {
            params: {
              type: "daily",
              date: covertDate,
              limit: limit,
            },
          }
        );

        if (response.data.data.length === 0) {
          toast.warning("No Current Affair found for selected date");
        }
        seteditorial(response.data.data);
        setTotalData(response.data.total_data);
      } catch (error) {
        toast.error(error?.response?.data?.message || "Something went wrong");
      }
    };
    getEditorialData();
  }, [getCAdate, limit]);

  const loadMoreData = () => {
    setLimit((prevLimit) => prevLimit + 10);
  };

  return (
    <>
      <Header />
      <div className="all-bannerBG">
        <Container fluid className="container-space">
          <Row className="justify-content-center">
            <Col lg={6} sm={8}>
              <div className="all-banner-content">
                <h3>Editorial Section</h3>
                <Link to="/study-material">Current Affairs </Link>
                <span>
                  <i className="fa fa-angle-double-right" /> Editorial Section{" "}
                </span>
                <InputGroup className="mb-3">
                  <Form.Control placeholder="Search Editorial" />
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
          <Row>
            <Col lg={3} sm={12}>
              <CalendarPage onSetDate={setgetCAdate} />
            </Col>
            <Col lg={9} sm={12}>
              <div className="About-Subject">
                <h4 className="inner-head">Important Editorials</h4>
                <Row>
                  {editorial.map((item) => (
                    <Col key={item._id} lg={3} sm={4}>
                      <div
                        onClick={() => navigate(`/blog-details/${item._id}`)}
                        className="Editorials-card"
                        style={{
                          padding: "20px",
                          height: "100%",
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "space-between",
                          border: "1px solid #ddd",
                          borderRadius: "10px",
                          cursor: "pointer",
                          boxShadow: "0px 0px 5px 0px #00000040",
                        }}
                      >
                        <h3
                          style={{
                            fontSize: "1rem",
                            fontWeight: "bold",
                            marginBottom: "10px",
                            whiteSpace: "nowrap",
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                            maxWidth: "100%",
                            height: "25px", // Fixed height for the title
                          }}
                        >
                          {item.title}
                        </h3>

                        <img
                          src={item.image}
                          alt={item.title}
                          style={{
                            width: "100%",
                            height: "150px",
                            borderRadius: "10px",
                            marginBottom: "15px",
                            objectFit: "cover",
                          }}
                        />

                        <p
                          style={{
                            fontSize: "0.875rem",
                            color: "#333",
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                            display: "-webkit-box",
                            WebkitLineClamp: 2,
                            WebkitBoxOrient: "vertical",
                            marginBottom: "15px",
                            height: "35px",
                          }}
                        >
                          {stripHtmlTags(item.sortdescription)}
                        </p>

                        <span
                          style={{
                            display: "block",
                            fontSize: "0.9rem",
                            color: "#666",
                          }}
                        >
                          {moment(item.createdDate).format("DD MMMM YYYY")}
                        </span>
                      </div>
                    </Col>
                  ))}
                </Row>

                {/* Load More Button */}
                {editorial.length < totalData && (
                  <div className="text-center mt-4">
                    <Button variant="success" onClick={loadMoreData}>
                      Load More
                    </Button>
                  </div>
                )}
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <Footer />
    </>
  );
}

export default EditorialSection;

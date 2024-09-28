import React, { useEffect, useState } from "react";
import { Col, Container, Form, InputGroup, Row } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import TopicList from "../../components/ScienceAndTechnology/TopicList";
import { BaseURL } from "../../Config";
import Footer from "../../directives/footer/footer";
import Header from "../../directives/header/header";
import apiEndPoints from "../../utils/apiEndPoints";
import Axios from "../../utils/Axios";
import HtmlRenderer from "../../utils/stripHtmlTags";
import "./index.css";

function StudyMaterial() {
  const navigate = useNavigate();
  const urlParams = new URLSearchParams(window.location.search);
  const topicId = urlParams.get("topicid");
  const subjectId = urlParams.get("subid");

  const [studyMaterial, setStudyMaterial] = useState([]);
  const [topicDetail, setTopicDetail] = useState();
  const [currentIndex, setCurrentIndex] = useState(0);

  // Fetch study materials
  const getStudyMaterial = async () => {
    try {
      const res = await Axios.get(
        `${BaseURL}${apiEndPoints.GET_STYDYMATERIAL_BY_SUBJECT}/${subjectId}?onlytopics=true`
      );
      if (res.data?.data) {
        const index = res.data.data.studyMaterials.findIndex(
          (el) => el._id === topicId
        );
        setCurrentIndex(index);
        setStudyMaterial(res.data.data.studyMaterials || []);
      }
    } catch (error) {
      console.log(error);
    }
  };

  // Fetch topic content
  const fetchData = async () => {
    try {
      const res = await Axios.get(
        `${BaseURL}/${apiEndPoints.GET_STYDYMATERIAL_BY_ID}/${topicId}`
      );
      if (res.status === 200) {
        setTopicDetail(res.data.data);
      }
    } catch (error) {
      toast.error(error?.response?.data?.message || "Something went wrong");
    }
  };

  useEffect(() => {
    fetchData();
  }, [topicId]);

  useEffect(() => {
    getStudyMaterial();
  }, [subjectId]);

  // Handle next and previous buttons
  const handleNextButton = () => {
    const index = studyMaterial.findIndex((el) => el._id === topicId);
    if (index !== -1 && index + 1 < studyMaterial.length) {
      const nextTopic = studyMaterial[index + 1];
      navigate(
        `/study-material/subject?subid=${subjectId}&topicid=${nextTopic._id}`
      );
      setCurrentIndex(index + 1);
    }
  };

  const handlePrevButton = () => {
    const index = studyMaterial.findIndex((el) => el._id === topicId);
    if (index > 0) {
      const prevTopic = studyMaterial[index - 1];
      navigate(
        `/study-material/subject?subid=${subjectId}&topicid=${prevTopic._id}`
      );
      setCurrentIndex(index - 1);
    }
  };

  const handleClick = (id) => {
    const element = document.getElementById(id);
    const headerOffset = 150;
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  };
  return (
    <>
      <Header />
      <div className="all-bannerBG">
        <Container fluid className="container-space">
          <Row className="justify-content-center">
            <Col lg={6} sm={10}>
              <div className="all-banner-content">
                <h3>Science And Technology</h3>
                <Link to="/study-material">Study Material </Link>
                <span>
                  <i className="fa fa-angle-double-right" />{" "}
                  {topicDetail?.subject_name ?? ""}
                </span>
                <span>
                  <i className="fa fa-angle-double-right" />{" "}
                  {topicDetail?.topic_name ?? ""}
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
          <Row>
            <Col lg={3} sm={3}>
              <TopicList
                topics={studyMaterial.length > 0 ? studyMaterial : []}
                setCurrentIndex={setCurrentIndex}
              />
            </Col>
            <Col lg={6} sm={6} md={6}>
              <div className="topic-details">
                <HtmlRenderer htmlContent={topicDetail?.containt} />
              </div>
              <div className="pre-next">
                <div>
                  <button
                    className="btn btn-success"
                    onClick={handlePrevButton}
                    disabled={currentIndex === 0}
                  >
                    <i className="fa fa-caret-left" /> Previous
                  </button>
                </div>
                <div>
                  <button
                    className="btn btn-success"
                    onClick={() => navigate("/quiz")}
                  >
                    Take a Quiz
                  </button>
                </div>
                <div>
                  <button
                    className="btn btn-success"
                    onClick={handleNextButton}
                    disabled={currentIndex === studyMaterial.length - 1}
                  >
                    Next <i className="fa fa-caret-right" />
                  </button>
                </div>
              </div>
            </Col>
            <Col lg={3} sm={3}>
              <div className="About-Subject mb-3">
                <h4 className="inner-head">Table of Content</h4>
                <ul>
                  {topicDetail?.toc?.map((toc) => (
                    <li
                      style={{ cursor: "pointer" }}
                      onClick={() => handleClick(toc?.id)}
                      key={toc?._id}
                    >
                      {toc?.text}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="About-Subject">
                <h4 className="inner-head">Trending Topic</h4>
                {/* Trending topic content area */}
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <Footer />
    </>
  );
}

export default StudyMaterial;

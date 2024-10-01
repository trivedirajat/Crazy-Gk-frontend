import React, { useEffect, useState } from "react";
import "../ScienceAndTechnology/ScienceAndTech.css";
import Header from "../../directives/header/header";
import { Col, Container, Form, InputGroup, Row } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import Footer from "../../directives/footer/footer";
import Axios from "../../utils/Axios";
import { toast } from "react-toastify";
import { BaseURL } from "../../Config";
import HtmlRenderer from "../../utils/stripHtmlTags";

function CurrentAffairsByTopic(props) {
  const { topicId } = useParams();
  const urlParams = new URLSearchParams(window.location.search);
  const CurrentAffairType = urlParams.get("type");
  let redirecturl = "";
  let BreadcumbTitle = "";
  switch (CurrentAffairType) {
    case "daily":
      redirecturl = "/daily-current-affairs";
      BreadcumbTitle = "Daily Current Affairs";
      break;
    case "monthly":
      redirecturl = "/monthly-current-affairs";
      BreadcumbTitle = "Monthly Current Politics";
      break;
    case "editorial":
      redirecturl = "/editorial-section";
      BreadcumbTitle = "Editorial Section";
      break;
    case "topic":
      redirecturl = "/topic-current-affairs";
      BreadcumbTitle = "Topic wise current affairs";
      break;

    default:
      redirecturl = "/daily-current-affairs";
      BreadcumbTitle = "Daily Current Politics";
      break;
  }
  const [topicdetail, settopicdetail] = useState();
  const handleClick = (id) => {
    const element = document.getElementById(id);
    const headerOffset = 150; // Height of the fixed header
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await Axios.get(
          `${BaseURL}/currentAffairs/getCurrentAffairsById/${topicId}`
        );
        if (res.status === 200) {
          settopicdetail(res.data.data);
        }
      } catch (error) {
        toast.error(error?.response?.data?.message || "Something went wrong");
      }
    };
    fetchData();
  }, [topicId]);
  return (
    <>
      <Header />
      <div className="all-bannerBG">
        <Container fluid className="container-space">
          <Row className="justify-content-center">
            <Col lg={6} sm={10}>
              <div className="all-banner-content">
                <h3>{topicdetail?.title ?? ""}</h3>
                <Link to={redirecturl}>{BreadcumbTitle} </Link>
                <span>
                  <i className="fa fa-angle-double-right" />{" "}
                  {topicdetail?.title ?? ""}
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
              {/* <TopicList
                topics={
                  subjectTopics?.data?.length > 0 ? subjectTopics?.data : []
                }
                setCurrentIndex={setCurrentIndex}
              /> */}
            </Col>
            <Col lg={6} sm={6} md={6}>
              <div>
                <h1>{topicdetail?.title}</h1>
              </div>
              <div className="topic-details">
                <HtmlRenderer htmlContent={topicdetail?.description} />
              </div>
              {/* Adds code */}
              <div></div>

              {/* <div className="pre-next">
                <div>
                  <Button
                    variant="success"
                    onClick={() => PressPrevButton()}
                    disabled={currentIndex === 0}
                  >
                    <i className="fa fa-caret-left" /> Previous
                  </Button>
                </div>
                <div>
                  <Button variant="success">Take a Quiz</Button>
                </div>
                <div>
                  <Button
                    variant="success"
                    onClick={() => PressNextButton()}
                    disabled={currentIndex === subjectTopics?.data?.length - 1}
                  >
                    Next <i className="fa fa-caret-right" />
                  </Button>
                </div>
              </div> */}
            </Col>
            <Col lg={3} sm={3}>
              <div className="About-Subject mb-3">
                <h4 className="inner-head">Table of Content</h4>
                <ul>
                  {topicdetail?.toc.map((toc) => (
                    <li
                      key={toc?._id}
                      onClick={() => handleClick(toc?.id)}
                      style={{ cursor: "pointer" }}
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

export default CurrentAffairsByTopic;

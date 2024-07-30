import React, { useCallback, useEffect, useRef, useState } from "react";
import "../ScienceAndTechnology/ScienceAndTech.css";
import Header from "../../directives/header/header";
import { Button, Col, Container, Form, InputGroup, Row } from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Footer from "../../directives/footer/footer";
import TopicList from "../../components/ScienceAndTechnology/TopicList";
import Carousel from "react-multi-carousel";
import Banner1 from "../../assets/images/img/banner1.png";
import { useDispatch, useSelector } from "react-redux";
import { fetchSubjectTopics } from "../../reduxx/action/SubjectAction";

function ScienceTechnologyTopic(props) {
  const dispatch = useDispatch()
  const location = useLocation()
  const navigate = useNavigate()
  const { topicData } = location.state || {}
  const scrollToContent = (contentId) => {
    const content = document.getElementById(contentId);
    content.scrollIntoView({ behavior: "smooth" });
  };

  const { subjectTopics } = useSelector(state => state.subject)

  // states
  const [topicContent, setTopicContent] = useState()

  const fetchSubjectTopicsMemoized = useCallback(
    (data) => dispatch(fetchSubjectTopics(data)),
    [dispatch]
  );

  const prevTopicDataRef = useRef();

  useEffect(() => {
    if (prevTopicDataRef.current !== topicData?.subject_id) {
      fetchSubjectTopicsMemoized({
        limit: 100,
        offset: 0,
        subject_id: topicData?.subject_id
      });
      prevTopicDataRef.current = topicData?.subject_id;
    }
  }, [topicData, fetchSubjectTopicsMemoized]);
  useEffect(() => {
    setTopicContent(topicData)
  }, [topicData])


  const [h1Tags, setH1Tags] = useState([]);

  useEffect(() => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(topicContent?.containt, 'text/html');
    const h1Elements = doc.getElementsByTagName('h1');
    const h1Texts = Array.from(h1Elements).map(element => element.textContent);
    setH1Tags(h1Texts);
  }, [topicContent?.containt]);
  console.log('subjectTopics', subjectTopics);

  const [currentIndex, setCurrentIndex] = useState(0)
  console.log('currentIndex', currentIndex);

  const PressNextButton = () => {
    const index = subjectTopics?.data?.findIndex(el => el._id === topicContent?._id);

    if (index !== -1 && index + 1 < subjectTopics?.data?.length) {
      const nextData = subjectTopics?.data[index + 1];
      setCurrentIndex(index + 1);
      setTopicContent(nextData);
      window.scrollTo(0, 0);
    }
  };

  const PressPrevButton = () => {
    const index = subjectTopics?.data?.findIndex(el => el._id === topicContent?._id);

    if (index > 0) {
      const prevData = subjectTopics?.data[index - 1];
      setCurrentIndex(index - 1);
      setTopicContent(prevData);
      window.scrollTo(0, 0);
    }
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
                  <i className="fa fa-angle-double-right" /> {topicContent?.subject_name ?? ''}
                </span>
                <span>
                  <i className="fa fa-angle-double-right" /> {topicContent?.topic_name ?? ''}
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
              <TopicList topics={subjectTopics?.data?.length > 0 ? subjectTopics?.data : []} setCurrentIndex={setCurrentIndex} />
            </Col>
            <Col lg={6} sm={6} md={6}>
              <div dangerouslySetInnerHTML={{ __html: topicContent?.containt }} />

              {/* Adds code */}
              <div></div>



              <div className="pre-next">
                <div><Button variant="success" onClick={() => PressPrevButton()} disabled={currentIndex === 0}><i className="fa fa-caret-left" /> Previous</Button></div>
                <div><Button variant="success">Take a Quiz</Button></div>
                <div><Button variant="success" onClick={() => PressNextButton()} disabled={currentIndex === subjectTopics?.data?.length - 1}>Next <i className="fa fa-caret-right" /></Button></div>

              </div>
            </Col>
            <Col lg={3} sm={3}>
              <div className="About-Subject mb-3">
                <h4 className="inner-head">Table of Content</h4>
                <ul>
                  {h1Tags.map((text, index) => (
                    <li key={index}>{text}</li>
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

export default ScienceTechnologyTopic;

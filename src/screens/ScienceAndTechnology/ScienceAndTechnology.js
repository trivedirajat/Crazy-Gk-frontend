import React, { useEffect, useState } from "react";
import "../ScienceAndTechnology/ScienceAndTech.css";
import Header from "../../directives/header/header";
import { Button, Col, Container, Form, InputGroup, Row } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import { Link, useLocation, useNavigate } from "react-router-dom";
import OtherSubjects from "../../components/OtherSubjects/OtherSubjects";
import Banner1 from "../../assets/images/img/banner1.png";
import Footer from "../../directives/footer/footer";
import { useDispatch, useSelector } from "react-redux";
import { fetchSubjectTopics } from "../../reduxx/action/SubjectAction";
import NotFound from "../../assets/images/img/notfound.png";

function ScienceAndTechnology(props) {
  const dispatch = useDispatch()
  const location = useLocation()
  const navigate = useNavigate()
  const { subjectData } = location.state || {}
  const { subjectTopics } = useSelector(state => state.subject)
  const [searchTxt, setSearchTxt] = useState('')
  useEffect(() => {
    fetchSubjectTopic()
  }, [subjectData])

  const fetchSubjectTopic = () => {
    if (subjectData?._id !== '') {
      dispatch(fetchSubjectTopics({
        limit: 100,
        offset: 0,
        subject_id: subjectData?._id,
        topic_name: searchTxt ?? ''
      }))
    }
  }

  return (
    <>
      <Header />
      <div className="all-bannerBG">
        <Container fluid className="container-space">
          <Row className="justify-content-center">
            <Col lg={6} sm={6}>
              <div className="all-banner-content">
                <h3>{subjectData?.subject_name ? subjectData?.subject_name : 'Science And Technology'}</h3>
                <Link to="/study-material">Study Material </Link>
                <span><i className="fa fa-angle-double-right" /> {subjectData?.subject_name ? subjectData?.subject_name : 'Science And Technology'} </span>
                <InputGroup className="mb-3">
                  <Form.Control placeholder="Search Subject" onChange={(val) => setSearchTxt(val?.target?.value)} />
                  <InputGroup.Text id="basic-addon2" onClick={() => fetchSubjectTopic()}>
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
              <OtherSubjects />
            </Col>
            <Col lg={9} sm={9}>
              <div className="About-Subject">
                <h4 className="inner-head">About Subject</h4>
                <p>{subjectData?.description ?? 'Not Found'}</p>
              </div>

              <div className="About-Subject">
                <h4 className="inner-head">Subject Topics</h4>
                <Row>
                  {subjectTopics && subjectTopics?.data?.length > 0 ?
                    subjectTopics?.data.map(item => {
                      return (<Col lg={3} sm={3} xs={6} className="mb-4">
                        <div className="sub-topic">
                          <span onClick={() => navigate(`/science-technology-topic`, { state: { topicData: item } })}>
                            {item?.topic_name ?? ''}
                          </span>
                        </div>
                      </Col>)
                    })
                    : <div className="justify-content-center d-flex align-items-center mb-3">
                      <img src={NotFound} />
                    </div>}
                </Row>
                <div className="viewmore">
                  <Button variant="success">Other Relevant Links</Button>
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

export default ScienceAndTechnology;

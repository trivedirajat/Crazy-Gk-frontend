import React, { useEffect, useState } from "react";
import { Button, Col, Container, Form, InputGroup, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import NotFound from "../../assets/images/img/notfound.png";
import OtherSubjects from "../../components/OtherSubjects/OtherSubjects";
import { BaseURL } from "../../Config";
import Footer from "../../directives/footer/footer";
import Header from "../../directives/header/header";
import { fetchSubjectTopics } from "../../reduxx/action/SubjectAction";
import apiEndPoints from "../../utils/apiEndPoints";
import Axios from "../../utils/Axios";
import HtmlRenderer from "../../utils/stripHtmlTags";
import "./index.css";
import { toast } from "react-toastify";

function StudyMaterialBySubject(props) {
  const { subjectId } = useParams();
  const { data: subjectTopics } = useSelector(
    (state) => state?.subject?.subjectTopics
  );

  console.log("🚀 ~ StudyMaterialBySubject ~ location:", subjectTopics);
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();
  const { subjectData } = location.state || {};
  const [searchTxt, setSearchTxt] = useState("");
  const [studyMaterial, setStudyMaterial] = useState([]);
  useEffect(() => {
    fetchSubjectTopic();
  }, [subjectData]);

  const fetchSubjectTopic = () => {
    if (subjectData?._id !== "") {
      dispatch(
        fetchSubjectTopics({
          limit: 100,
          offset: 0,
          subject_id: subjectData?._id,
          topic_name: searchTxt ?? "",
        })
      );
    }
  };
  const getStudyMaterial = async (subjectId) => {
    try {
      const res = await Axios.get(
        `${BaseURL}${apiEndPoints.GET_STYDYMATERIAL_BY_SUBJECT}/${subjectId}`
      );
      if (res.data?.data) {
        setStudyMaterial(res.data.data);
      }
    } catch (error) {
      toast.error('Stydy Material Not Found For This Subject');
      // setStudyMaterial([]);
      console.log(error);
    }
  };
  useEffect(() => {
    getStudyMaterial(subjectId);
  }, [subjectId]);
  return (
    <>
      <Header />
      <div className="all-bannerBG">
        <Container fluid className="container-space">
          <Row className="justify-content-center">
            <Col lg={6} sm={6}>
              <div className="all-banner-content">
                <h3>
                  {studyMaterial?.subjectDetails?.subject_name ||
                    "Science And Technology"}
                </h3>
                <Link to="/study-material">Study Material </Link>
                <span>
                  <i className="fa fa-angle-double-right" />{" "}
                  {studyMaterial?.subjectDetails?.subject_name ||
                    "Science And Technology"}
                </span>
                <InputGroup className="mb-3">
                  <Form.Control
                    placeholder="Search Subject"
                    onChange={(val) => setSearchTxt(val?.target?.value)}
                  />
                  <InputGroup.Text
                    id="basic-addon2"
                    onClick={() => fetchSubjectTopic()}
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
          <Row>
            <Col lg={3} sm={3}>
              <OtherSubjects />
            </Col>
            <Col lg={9} sm={9}>
              <div className="About-Subject" style={{ marginBottom: "20px" }}>
                <h4 className="inner-head">About Subject</h4>
                <HtmlRenderer
                  htmlContent={studyMaterial?.subjectDetails?.description || ""}
                />
              </div>

              <div className="About-Subject">
                <h4 className="inner-head">Subject Topics</h4>
                <Row>
                  {studyMaterial &&
                  studyMaterial?.studyMaterials?.length > 0 ? (
                    studyMaterial?.studyMaterials.map((item) => {
                      return (
                        <Col lg={3} sm={3} xs={6} className="mb-4">
                          <div className="sub-topic">
                            <span
                              style={{ cursor: "pointer" }}
                              onClick={() =>
                                // navigate(`/science-technology-topic`, {
                                //   state: { topicData: item },
                                // })
                                navigate(
                                  `/study-material/subject?subid=${subjectId}&topicid=${item?._id}`
                                )
                              }
                            >
                              {item?.topic_name ?? ""}
                            </span>
                          </div>
                        </Col>
                      );
                    })
                  ) : (
                    <div className="justify-content-center d-flex align-items-center mb-3">
                      <img src={NotFound} alt="error" />
                    </div>
                  )}
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

export default StudyMaterialBySubject;

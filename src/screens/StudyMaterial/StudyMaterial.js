import React, { useEffect, useState } from "react";
import "../home/index.css";
import Header from "../../directives/header/header";
import { Col, Container, Form, InputGroup, Row } from "react-bootstrap";
import Banner1 from "../../assets/images/img/banner1.png";
import Topic1 from "../../assets/images/img/science 2.png";
import NotFound from "../../assets/images/img/notfound.png";
import Footer from "../../directives/footer/footer";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchSubject } from "../../reduxx/action/SubjectAction";


function StudyMaterial(props) {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { getsubject } = useSelector(state => state.subject)
  const [searchTxt, setSearchTxt] = useState('')
  useEffect(() => {
    fetchSubjects()
  }, [])

  const fetchSubjects = () => {
    dispatch(fetchSubject({
      offset: 0,
      limit: 100,
      subject_name: searchTxt ?? ''
    }))
  }

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
                  <Form.Control placeholder="Search Subject" onChange={(val) => setSearchTxt(val?.target?.value)} />
                  <InputGroup.Text id="basic-addon2" onClick={() => fetchSubjects()}>
                    <i className="fa fa-search" />
                  </InputGroup.Text>
                </InputGroup>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      <section className="section-padding">
        <Container fluid className="container-space ">
          {getsubject?.data?.length > 0 ?
            <div className="topic-box space-section">
              {getsubject?.data.map((item) => (
                <div className="Topic-card">
                  <div className="taxonomy-image">
                    {/* <img src={Topic1} /> */}
                    <img src={item?.image ? getsubject?.base_url + item?.image : Topic1} />
                  </div>
                  <div>
                    <h5 onClick={() => navigate(`/science-and-technology`, { state: { subjectData: item } })}>{item?.subject_name}</h5>
                  </div>
                </div>))}
            </div>
            :
            <div className="justify-content-center d-flex align-items-center">
              <img src={NotFound} />
            </div>
          }
        </Container>
      </section>

      {/* Adds code  */}
      <div></div>
      <Footer />
    </>
  );
}

export default StudyMaterial;

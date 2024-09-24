import React, { useEffect, useRef, useState } from "react";
import Header from "../../directives/header/header";
import { Alert, Col, Container, Form, InputGroup, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import CalendarPage from "../../components/Calendar/CalendarPage";
import Footer from "../../directives/footer/footer";
import Axios from "../../utils/Axios";
import { BaseURL } from "../../Config";
import moment from "moment";
import { toast } from "react-toastify";

function Topicwisecurrentaffairs(props) {
  const hasMounted = useRef(false);
  const [getCAdate, setgetCAdate] = useState(null);
  const [getcurrentaffairs, setgetcurrentaffairs] = useState([]);
  const [params, setParams] = useState({ onlytopic: true });

  const ImportendDay = getcurrentaffairs?.filter((item) => item.is_important);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await Axios.get(
          `${BaseURL}/currentAffairs/getallCurrentAffairs`,
          { params }
        );
        if (response.data.data.length === 0) {
          toast.warning("No Current Affair found for selected date");
        }
        setgetcurrentaffairs(response.data.data);
      } catch (error) {
        toast.error(error?.response?.data?.message || "Something went wrong");
      }
    };

    if (!hasMounted.current) {
      fetchData();
      hasMounted.current = true;
    } else {
      fetchData();
    }
  }, [params]);

  useEffect(() => {
    if (getCAdate) {
      const covertDate = moment(getCAdate).format("YYYY-MM-DD");
      setParams({ type: "daily", date: covertDate, onlytopic: true });
    } else {
      setParams({ onlytopic: true });
    }
  }, [getCAdate]);

  const handleClearDate = () => {
    setgetCAdate(null);
  };
  return (
    <>
      <Header />
      <div className="all-bannerBG">
        <Container fluid className="container-space">
          <Row className="justify-content-center">
            <Col lg={6} sm={8}>
              <div className="all-banner-content">
                <h3>Topic wise Current Affairs</h3>
                <Link to="/topic-current-affairs">Current Affairs </Link>
                <span>
                  <i className="fa fa-angle-double-right" /> Topic Wise Current
                  Affairs
                </span>
                <InputGroup className="mb-3">
                  <Form.Control placeholder="Search topic" />
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
              <CalendarPage
                onSetDate={setgetCAdate}
                handleClearDate={handleClearDate}
              />
            </Col>
            <Col lg={9} sm={12}>
              {getcurrentaffairs.length === 0 ? (
                <Alert variant="warning" className="text-center">
                  No current affairs found for this date
                </Alert>
              ) : (
                <>
                  <div className="About-Subject">
                    <h4 className="inner-head">Topic Wise News</h4>
                    <Row>
                      {getcurrentaffairs.map((item) => {
                        return (
                          <Col lg={3} sm={3} xs={6} className="mb-4">
                            <div className="sub-topic">
                              <Link
                                to={`/current-affairs/${item._id}?type=daily`}
                              >
                                <i className="fa fa-calendar m-0" />{" "}
                                {item.title}
                              </Link>
                            </div>
                          </Col>
                        );
                      })}
                    </Row>
                  </div>
                  {/* Adds code */}
                  <div></div>

                  <div className="About-Subject mt-3">
                    <h4 className="inner-head">Important Dates</h4>
                    <Row>
                      {ImportendDay.map((item) => {
                        return (
                          <Col lg={3} sm={3} xs={6} className="mb-4">
                            <div className="sub-topic">
                              <Link to={`/current-affairs/${item._id}`}>
                                <i className="fa fa-calendar m-0" />{" "}
                                {item.title}
                              </Link>
                            </div>
                          </Col>
                        );
                      })}
                    </Row>
                  </div>
                </>
              )}
            </Col>
          </Row>
        </Container>
      </section>
      <Footer />
    </>
  );
}

export default Topicwisecurrentaffairs;

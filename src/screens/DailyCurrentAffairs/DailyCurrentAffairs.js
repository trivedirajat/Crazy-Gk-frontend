import React, { useCallback, useEffect, useState } from "react";
import Header from "../../directives/header/header";
import { Alert, Col, Container, Form, InputGroup, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import CalendarPage from "../../components/Calendar/CalendarPage";
import Footer from "../../directives/footer/footer";
import Axios from "../../utils/Axios";
import { BaseURL } from "../../Config";
import moment from "moment";
import { toast } from "react-toastify";
import debounce from "../../helper/debounce";

function DailyCurrentAffairs(props) {
  const [searchTxt, setSearchTxt] = useState("");
  const [getCAdate, setgetCAdate] = useState(new Date());
  const [getdailycurrentaffairs, setgetdailycurrentaffairs] = useState([]);
  const ImportendDay = getdailycurrentaffairs?.filter((item) => {
    return item.is_important;
  });

  useEffect(() => {
    const covertDate = moment(getCAdate).format("YYYY-MM-DD");
    const getdailycurrentaffairs = async () => {
      try {
        const response = await Axios.get(
          `${BaseURL}/currentAffairs/getallCurrentAffairs`,
          {
            params: {
              type: "daily",
              date: covertDate,
              onlytopic: true,
              topicquery: searchTxt,
            },
          }
        );
        if (response.data.data.length === 0) {
          toast.warning("No Current Affair found for selected date");
        }
        setgetdailycurrentaffairs(response.data.data);
      } catch (error) {
        toast.error(error?.response?.data?.message || "Something went wrong");
      }
    };
    getdailycurrentaffairs();
  }, [getCAdate, searchTxt]);

  const debouncedSearch = useCallback(
    debounce((value) => {
      setSearchTxt(value);
    }, 600),
    []
  );
  const handleSearchInput = (event) => {
    // const value = event.target.value;
    // debouncedSearch(value);
  };
  const handleClearDate = () => {
    setgetCAdate(new Date());
    setSearchTxt("");
  };
  return (
    <>
      <Header />
      <div className="all-bannerBG">
        <Container fluid className="container-space">
          <Row className="justify-content-center">
            <Col lg={6} sm={8}>
              <div className="all-banner-content">
                <h3>Daily Current Affairs</h3>
                <Link to="/study-material">Current Affairs </Link>
                <span>
                  <i className="fa fa-angle-double-right" /> Daily Current
                  Affairs
                </span>
                <InputGroup className="mb-3">
                  <Form.Control
                    placeholder="Search topic"
                    onChange={handleSearchInput}
                  />
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
              {getdailycurrentaffairs.length === 0 ? (
                <Alert variant="warning" className="text-center">
                  No current affairs found for this date
                </Alert>
              ) : (
                <>
                  <div className="About-Subject">
                    <h4 className="inner-head">Day Wise Daily News</h4>
                    <Row>
                      {getdailycurrentaffairs.map((item) => {
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

export default DailyCurrentAffairs;

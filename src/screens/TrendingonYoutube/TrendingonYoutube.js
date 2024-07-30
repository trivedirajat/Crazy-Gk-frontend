import React, { useEffect } from "react";
import Header from "../../directives/header/header";
import { Col, Container, Form, InputGroup, Row } from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";
// import Editorials from "../../assets/images/img/Editorials.png";
import Editorials from "../../assets/images/img/videoBanner.jpg";
import OtherTopics from "../../components/OtherTopics/OtherTopics";
import Footer from "../../directives/footer/footer";
import { useDispatch, useSelector } from "react-redux"
import { fetchVideos } from "../../reduxx/action/VideoAction";
import moment from "moment";

function TrendingonYoutube() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const location = useLocation()
  const { subject } = location.state || {}
  const { getvideo } = useSelector(state => state.video)
  console.log('getvideo', getvideo);

  useEffect(() => {
    console.log('subject',subject);
    if (subject?._id) {
      dispatch(fetchVideos({
        limit: 100,
        offset: 0,
        subject_id: subject?._id
      }))
    }else{
      dispatch(fetchVideos({
        limit: 100,
        offset: 0,
        is_trending: true
      }))
    }
  }, [subject])
  const extractVideoId = (videoUrl) => {
    // Regular expression to match YouTube video ID from various URL formats
    const match = videoUrl.match(/(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|shorts\/|watch\?v=|watch\?.+&v=))([\w-]{11})/);
    if (match && match[1]) {
      return match[1];
    } else {
      // Invalid YouTube URL or no match found
      return null;
    }
  };

  return (
    <>
      <Header />
      <div className="all-bannerBG">
        <Container fluid className="container-space">
          <Row className="justify-content-center">
            <Col lg={6} sm={8}>
              <div className="all-banner-content">
                <h3>{subject ? subject?.subject_name : 'Trending on Youtube'}</h3>
                <Link to="/home">Home </Link>
                <span>
                  <i className="fa fa-angle-double-right" /> {subject ? subject?.subject_name : 'Trending'}
                </span>
                <InputGroup className="mb-3">
                  <Form.Control placeholder="Search Features" />
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
            <Col lg={3} sm={3} className="mb-4">
              <OtherTopics />
            </Col>
            <Col lg={9} sm={9}>
              <div className="About-Subject">
                <div className="video-area">
                  <div>
                    {" "}
                    <h4 className="inner-head">Videos</h4>
                  </div>
                  <div>
                    <h6>Sort by</h6>
                  </div>
                </div>

                <Row>
                  {getvideo?.length > 0 && getvideo.map(item => {
                    const id = extractVideoId(item?.video_url)
                    return (
                      <Col lg={3} sm={6} className="mb-4">
                        <div className="Editorials-card">
                          <img onClick={() => navigate(`/video-player`, { state: { videoData: item, getvideo: getvideo } })} src={`https://img.youtube.com/vi/${id}/hqdefault.jpg`} style={{
                            width: '256px',
                            borderRadius: 15,
                            height: '176px'
                          }} />
                          <p onClick={() => navigate(`/video-player`, { state: { videoData: item } })}>
                            {item?.title}
                          </p>
                          <span> {moment(item?.createdDate).format('DD MMM YYYY')} </span>
                        </div>
                      </Col>)
                  })
                  }
                  {/* <Col lg={3} sm={6} className="mb-4">
                    <div className="Editorials-card">
                      <img src={Editorials} style={{
                        width: '256px',
                        borderRadius: 15,
                        height: '176px'
                      }} />
                      <Link to={'/video-player'}>
                        <p>
                          Content Number 1 Lorem Ipsum simply dummy
                        </p>
                      </Link>
                      <span> 06 October 2023 </span>
                    </div>
                  </Col>
                  <Col lg={3} sm={6} className="mb-4">
                    <div className="Editorials-card">
                      <img src={Editorials} style={{
                        width: '256px',
                        borderRadius: 15,
                        height: '176px'
                      }} />
                      <Link to={'/video-player'}>
                        <p>
                          Content Number 1 Lorem Ipsum simply dummy
                        </p>
                      </Link>
                      <span> 06 October 2023 </span>
                    </div>
                  </Col> */}

                </Row>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <Footer />
    </>
  );
}

export default TrendingonYoutube;

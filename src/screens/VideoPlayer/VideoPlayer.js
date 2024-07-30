import React, { useEffect, useState } from "react";
import Header from "../../directives/header/header";
import { Button, Col, Container, Form, InputGroup, Row } from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Editorials from "../../assets/images/img/Editorials.png";
import OtherTopics from "../../components/OtherTopics/OtherTopics";
import Footer from "../../directives/footer/footer";
import Carousel from "react-multi-carousel";
import testimonial1 from "../../assets/images/img/Testimonial1.png";
import testimonial2 from "../../assets/images/img/Testimonial2.png";
import testimonial3 from "../../assets/images/img/Testimonial3.png";
const testimonialSlider = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 3,
    slidesToSlide: 3,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1,
  },
};

function VideoPlayer(props) {
  const [showNotes, setShowNotes] = useState(false);
  const navigate = useNavigate();
  const location = useLocation()
  const { videoData, getvideo } = location.state || {}
  const [videoId, setVideoId] = useState('')
  console.log('videoData', videoData);
  useEffect(() => {
    if (videoData?.video_url !== '') {
      const id = extractVideoId(videoData?.video_url)
      setVideoId(id)
      console.log('id', id);

    }
  }, [videoData])

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

  const handleViewNotes = () => {
    setShowNotes(!showNotes); // Show the notes
  };
  return (
    <>
      <Header />
      <div className="all-bannerBG">
        <Container fluid className="container-space">
          <Row className="justify-content-center">
            <Col lg={6} sm={8}>
              <div className="all-banner-content">
                <h3>Trending on Youtube</h3>
                <Link to="/home">Home </Link>
                <span>
                  <i className="fa fa-angle-double-right" /> Trending
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
                </div>
                <Row>
                  <Col lg={12} sm={12} className="mb-4">
                    <div className="Editorials-card text-center">
                      {/* Image */}
                      <iframe
                        width="100%"
                        height="500"
                        src={`https://www.youtube.com/embed/${videoId}`}
                        title="YouTube video player"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowfullscreen
                      ></iframe>
                      {/* <img src={Editorials} alt="Editorials" /> */}

                      {/* Play Icon */}
                      {/* <div className="play-icon">
                        <i className="fa fa-play" />
                      </div> */}

                      {/* Button */}
                      <Button
                        className="mt-5 mb-3"
                        variant="success"
                        onClick={handleViewNotes}
                      >
                        View Notes
                      </Button>
                    </div>
                    {showNotes && (
                      <div>
                        {videoData?.description?.length > 0 ? videoData?.description.map(item => (
                          <>
                            <h4 className="Content-head">
                              <i className="fa fa-circle" /> {item?.title}
                            </h4>
                            <p>{item?.description}</p>
                          </>
                        )) : null}
                      </div>
                    )}
                  </Col>
                </Row>
              </div>

              <section className="section-padding">
                <Container fluid className="container-space">
                  <div className="main-heading">
                    <h4>Similar Videos</h4>
                  </div>
                  <Carousel
                    swipeable={false}
                    draggable={false}
                    showDots={true}
                    responsive={testimonialSlider}
                    ssr={true} // means to render carousel on server-side.
                    infinite={true}
                    autoPlay={props.deviceType !== "mobile" ? true : false}
                    autoPlaySpeed={1000}
                    keyBoardControl={true}
                    customTransition="all .5"
                    transitionDuration={500}
                    containerClass="carousel-container"
                    removeArrowOnDeviceType={["tablet", "mobile"]}
                    deviceType={props.deviceType}
                    dotListClass="custom-dot-list-style"
                    itemClass="carousel-item-padding-40-px"
                  >
                    {getvideo?.length > 0 && getvideo.map((item, index) => {
                      const id = extractVideoId(item?.video_url)
                      return (
                        <div className="testimonial" key={index}>
                          <img
                            onClick={() => navigate(`/video-player`, { state: { videoData: item, getvideo: getvideo } })}
                            src={`https://img.youtube.com/vi/${id}/hqdefault.jpg`} />
                        </div>
                      )
                    })}
                  </Carousel>
                </Container>
              </section>
            </Col>
          </Row>
        </Container>
      </section>
      <Footer />
    </>
  );
}

export default VideoPlayer;

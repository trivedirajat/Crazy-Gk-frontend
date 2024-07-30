import React, { useEffect, useState } from "react";
import "../home/index.css";
import "../../components/Lightbox/lightbox.css";
import Header from "../../directives/header/header";
import { Button, Col, Container, Row } from "react-bootstrap";
import Home1 from "../../assets/images/img/home1.png";
import Banner1 from "../../assets/images/img/banner1.png";
import testimonial1 from "../../assets/images/img/Testimonial1.png";
import testimonial2 from "../../assets/images/img/Testimonial2.png";
import testimonial3 from "../../assets/images/img/Testimonial3.png";
import Topic1 from "../../assets/images/img/science 2.png";
import Topic2 from "../../assets/images/img/molecular 1.png";
import Topic3 from "../../assets/images/img/anthropology 2.png";
import Topic4 from "../../assets/images/img/question 1.png";
import Topic5 from "../../assets/images/img/sprout 1.png";
import Topic6 from "../../assets/images/img/court 2.png";
import Topic7 from "../../assets/images/img/history-book (1) 1.png";
import Topic8 from "../../assets/images/img/globe 2.png";
import Topic9 from "../../assets/images/img/economics 1.png";
import Topic10 from "../../assets/images/img/math 2.png";
import Book1 from "../../assets/images/img/book1.png";
import Book2 from "../../assets/images/img/book2.png";
import Book3 from "../../assets/images/img/book3.png";
import Book4 from "../../assets/images/img/book4.png";
import Book5 from "../../assets/images/img/book5.png";
import BG1 from "../../assets/images/img/BG.png";
import BG2 from "../../assets/images/img/BG (1).png";
import BG3 from "../../assets/images/img/BG (2).png";
import BG4 from "../../assets/images/img/BG (3).png";
import Img1 from "../../assets/images/img/img1.png";
import allBaanner from "../../assets/images/img/allbaanner.png";
import Carousel from "react-multi-carousel";
import Footer from "../../directives/footer/footer";
import { Link, useNavigate } from "react-router-dom";
import IframeLightbox from "../../components/Lightbox/MyLightboxComponent";
import ReactImageVideoLightbox from "react-image-video-lightbox";
import { useDispatch, useSelector } from "react-redux";
import { fetchSubject } from "../../reduxx/action/SubjectAction";
import { fetcEBooks, fetchBlog, fetchDaliyVocab, fetchJobs, fetchWhatsNew } from "../../reduxx/action/BlogAction";
import moment from "moment";
import { fetchVideos } from "../../reduxx/action/VideoAction";

const testimonialSlider = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
    slidesToSlide: 4,
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
const Lightbox = () => {
  return (
    <div className="lightbox">
      {/* Video player */}
      <video controls>
        <source
          src="https://www.youtube.com/watch?time_continue=13&v=jPbtsRGhlNU&embeds_referring_euri=https%3A%2F%2Fcrazygk.zetawiztechnologies.com%2F&embeds_referring_origin=https%3A%2F%2Fcrazygk.zetawiztechnologies.com&source_ve_path=MjM4NTE&feature=emb_title"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

function Index(props) {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { getsubject } = useSelector(state => state.subject)
  const { getBlog, getWhatsNew, getEBook, getDaliyVocab, getJobs } = useSelector(state => state.blog)
  const { getvideo } = useSelector(state => state.video)
  const [openLightBox, setOpenLightBox] = useState(false);
  console.log('getDaliyVocab', getDaliyVocab);

  useEffect(() => {
    dispatch(fetchSubject({
      offset: 0,
      limit: 100
    }))
    dispatch(fetchBlog({
      limit: 100,
      offset: 0
    }))
    dispatch(fetchWhatsNew({
      limit: 100,
      offset: 0
    }))
    dispatch(fetchVideos({
      limit: 100,
      offset: 0,
      is_trending: true
    }))
    dispatch(fetcEBooks({
      limit: 100,
      offset: 0,
    }))
    dispatch(fetchDaliyVocab({
      limit: 1,
      offset: 0,
    }))
    dispatch(fetchJobs({
      limit: 100,
      offset: 0,
    }))
  }, [])


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
      <Header openLightBox={openLightBox} />
      <section className="section-padding">
        <Container fluid className="container-space home-area">
          <Row>
            <Col lg={5} sm={12} xs={12} className="align-self-center p-0">
              <div className="home-content p-0">
                <h3>Unlock Your UPSC Success </h3>
                <h6>Your Gateway to a Distinguished Civil Service Career </h6>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
                  consectetur justo quis euismod vehicula. Quisque diam dui,
                  imperdiet et hendrerit in, accumsan tempus erat.smod vehicula.
                  Quisque diam dui, imperdiet et hendrerit in, accumsan tempus
                  erat.
                </p>
                <div className="home-btns">
                  <Button>Exam Note</Button>
                  <Button onClick={() => navigate('/topic-current-affairs')}>Current Affairs</Button>
                  <Button>MCQ</Button>
                  <Button>Online Store</Button>
                </div>
              </div>
            </Col>
            <Col lg={7} sm={12} xs={12} className="p-0">
              <div className="home-img">
                <img src={Home1} />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      {/* Whats New and Blog */}
      <section className="section-padding">
        <Container fluid className="container-space">
          <div className="main-heading">
            <h4>Recent Updates On Crazy GK Trick</h4>
          </div>
          <Row>
            {/* Whats New */}
            <Col lg={6} sm={12} xs={12}>
              <div className="Trick-card">
                <div className="trick-head">
                  <div>
                    <h2>What’s New</h2>
                  </div>
                  <Link to={"/whats-new"}>
                    <div
                      style={{
                        color: "#fff",
                        fontSize: "16px",
                        fontWeight: "600",
                        lineHeight: "16px",
                      }}
                    >
                      View All
                    </div>
                  </Link>
                </div>
                <div className="trick-scroll">
                  {getWhatsNew?.data?.length > 0 ? getWhatsNew?.data.map(item => (
                    <div className="trick-list">
                      <h6>
                        <i className="fa fa-calendar-check-o" /> {moment(item?.createdDate).format('DD MMMM YY')}
                      </h6>
                      <p className="fw-bold" onClick={() => navigate(`/whats-details`, { state: { whatsData: item, base_url: getWhatsNew?.base_url } })}>{item?.title}</p>
                    </div>)) : null}
                </div>
              </div>
            </Col>
            {/* Blogs's */}
            <Col lg={6} sm={12} xs={12}>
              <div className="Trick-card">
                <div className="trick-head">
                  <div>
                    <h2>Latest Blogs</h2>
                  </div>
                  <Link to={"/latest-blogs"}>
                    <div
                      style={{
                        color: "#fff",
                        fontSize: "16px",
                        fontWeight: "600",
                        lineHeight: "16px",
                      }}
                    >
                      View All
                    </div>
                  </Link>
                </div>
                <div className="trick-scroll">
                  {getBlog?.data?.length > 0 ? getBlog?.data.map(item => (
                    <div className="trick-list">
                      <p className="fw-bold mb-3" onClick={() => navigate(`/blog-details`, { state: { blogData: item, base_url: getBlog?.base_url } })}>
                        {item?.title}
                      </p>
                      <h5>
                        <i className="fa fa-calendar-check-o" />{" "}
                        <span>{moment(item?.createdDate).format('DD MMMM YY')}</span>{" "}
                        <i className="fa fa-user-circle" />{" "}
                        <span>Admin</span>
                      </h5>
                      <p className="latest-des">
                        {item?.description ? item?.description.substring(0, 250) : ''}...
                      </p>
                    </div>)) : null}
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      {/* Trending Video */}
      <section className="section-padding Trending-Videos">
        <Container fluid className="container-space">
          <div className="main-heading">
            <h4>Trending Videos On Youtube</h4>
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
            {getvideo?.length > 0 && getvideo.map(item => {
              const id = extractVideoId(item?.video_url)
              return (
                <div onClick={() => setOpenLightBox(true)} className="testimonial">
                  {/* <img src={testimonial1} /> */}
                  <img src={`https://img.youtube.com/vi/${id}/hqdefault.jpg`} />
                  <div className="testimonial-icon">
                    <i className="fa fa-play" />
                  </div>
                </div>)
            })}
          </Carousel>
          {openLightBox && (
            <ReactImageVideoLightbox
              data={[
                {
                  url: "https://www.youtube.com/embed/rDC8NNcIioU",
                  type: "video",
                  altTag: "some image",
                },
                {
                  url: "https://www.youtube.com/embed/rDC8NNcIioU",
                  type: "video",
                  title: "Placeholder video",
                },
                {
                  url: "https://www.youtube.com/embed/rDC8NNcIioU",
                  type: "video",
                  altTag: "some other image",
                },
                {
                  url: "https://www.youtube.com/embed/rDC8NNcIioU",
                  type: "video",
                  title: "some other video",
                },
              ]}
              startIndex={0}
              showResourceCount={true}
              onCloseCallback={() => setOpenLightBox(false)}
              onNavigationCallback={(currentIndex) =>
                console.log(`Current index: ${currentIndex}`)
              }
            />
          )}
        </Container>
      </section>
      {/* Topic wise videos */}
      <section className="section-padding">
        <Container fluid className="container-space">
          <div className="main-heading">
            <div></div>
            <h4>Topic wise videos</h4>
          </div>
          <div className="topic-box">
            {getsubject?.data?.length > 0 && getsubject?.data.map((item) => (
              <div className="Topic-card">
                <div className="taxonomy-image">
                  {/* <img src={Topic1} /> */}
                  <img src={item?.image ? getsubject?.base_url + item?.image : Topic1} />
                </div>
                <div>
                  <h5 onClick={() => navigate(`/trending-on-youtube`, { state: { subject: item } })}>{item?.subject_name}</h5>
                </div>
              </div>
            ))}
          </div>
          <Link to="/subject-wise-video" className="all-view">
            View More
          </Link>
        </Container>
      </section>
      {/* Daily Current Affairs */}
      <section className="section-padding">
        <Container fluid className="container-space">
          <div className="main-heading">
            <h4>Daily Current Affairs and GK | Live Quiz</h4>
          </div>
          <div className="live-quiz">
            <Row>
              <Col lg={10}>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting | June 30,2024
                </p>
                <div>
                  <span>
                    <i className="fa fa-question-circle-o" /> 50 Questions
                  </span>
                  <span>
                    <i className="fa fa-file-text-o" /> 50 Marks
                  </span>
                  <span>
                    <i className="fa fa-clock-o" /> 60 Mins
                  </span>
                </div>
              </Col>
              <Col lg={2} className="align-self-center">
                <Button>Start Now</Button>
              </Col>
            </Row>
          </div>
          <div className="live-quiz">
            <Row>
              <Col lg={10}>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting | June 30,2024
                </p>
                <div>
                  <span>
                    <i className="fa fa-question-circle-o" /> 50 Questions
                  </span>
                  <span>
                    <i className="fa fa-file-text-o" /> 50 Marks
                  </span>
                  <span>
                    <i className="fa fa-clock-o" /> 60 Mins
                  </span>
                </div>
              </Col>
              <Col lg={2} className="align-self-center">
                <Button>Start Now</Button>
              </Col>
            </Row>
          </div>
          <div className="live-quiz">
            <Row>
              <Col lg={10}>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting | June 30,2024
                </p>
                <div>
                  <span>
                    <i className="fa fa-question-circle-o" /> 50 Questions
                  </span>
                  <span>
                    <i className="fa fa-file-text-o" /> 50 Marks
                  </span>
                  <span>
                    <i className="fa fa-clock-o" /> 60 Mins
                  </span>
                </div>
              </Col>
              <Col lg={2} className="align-self-center">
                <Button>Start Now</Button>
              </Col>
            </Row>
          </div>
          <div className="live-quiz">
            <Row>
              <Col lg={10}>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting | June 30,2024
                </p>
                <div>
                  <span>
                    <i className="fa fa-question-circle-o" /> 50 Questions
                  </span>
                  <span>
                    <i className="fa fa-file-text-o" /> 50 Marks
                  </span>
                  <span>
                    <i className="fa fa-clock-o" /> 60 Mins
                  </span>
                </div>
              </Col>
              <Col lg={2} className="align-self-center">
                <Button>Start Now</Button>
              </Col>
            </Row>
          </div>
          <div className="live-quiz">
            <Row>
              <Col lg={10}>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting | June 30,2024
                </p>
                <div>
                  <span>
                    <i className="fa fa-question-circle-o" /> 50 Questions
                  </span>
                  <span>
                    <i className="fa fa-file-text-o" /> 50 Marks
                  </span>
                  <span>
                    <i className="fa fa-clock-o" /> 60 Mins
                  </span>
                </div>
              </Col>
              <Col lg={2} className="align-self-center">
                <Button>Start Now</Button>
              </Col>
            </Row>
          </div>
          <Link className="all-view">Watch More</Link>
        </Container>
      </section>
      {/* E - Books */}
      <section className="section-padding">
        <Container fluid className="container-space">
          <div className="main-heading">
            <h4>E - Books</h4>
          </div>
          <div className="topic-box">
            {getEBook?.data?.length > 0 && getEBook?.data.slice(0, 5).map(item => (
              <div className="book-card" onClick={() => window.open(item?.pdf_link)}>
                <img src={item?.image !== '' ? getEBook?.base_url + item?.image : Book1} />
              </div>))}
          </div>
          <Link to={'/allEBook'} className="all-view">View More</Link>
        </Container>
      </section>
      {/* Recent Job Updates */}
      <section className="section-padding">
        <Container fluid className="container-space">
          <div className="main-heading">
            <h4>Recent Job Updates</h4>
          </div>
          <div className="job-bg">
            <Row>
              <Col lg={3}></Col>
              <Col lg={9}>
                <div className="job-list">
                  {getJobs?.data?.length > 0 && getJobs?.data?.map(item => (
                    <div className="job-content">
                      <a>
                        <span className="job-icon">
                          <i className="fa fa-calendar-check-o" />
                        </span>
                        <span className="job-date">{moment(item?.createdDate).format('DD MMMM YYYY')}</span>
                      </a>
                      <h4>UPSSSC PET Notification 2023 Available</h4>
                      <Button className="btn-green">Apply Now</Button>
                    </div>))}
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </section>
      {/* WORD OF THE DAY */}
      <section className="section-padding">
        <Container fluid className="container-space">
          <div className="workday-bg">
            <Row className="justify-content-center">
              <Col lg={7} sm={9} xs={9}>
                <div className="work-content">
                  <h4>WORD OF THE DAY</h4>
                  {getDaliyVocab?.data?.length > 0 && (<p>{getDaliyVocab?.data[0]?.description}</p>)}
                  <Button className="btn-green">Daily Vocab</Button>
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </section>
      {/* Review */}
      <section className="section-padding">
        <Container fluid className="container-space">
          <div className="main-heading">
            <h6>100+ Happy Crazy gk Users</h6>
            <h4>What our Students say about us</h4>
          </div>
          <Row>
            <Col lg={4} sm={6} xs={12} className="mb-4">
              <div className="Happy-Crazy">
                <div>
                  <img src={BG1} />
                </div>
                <div className="align-self-center">
                  <div className="star-icon">
                    <a>
                      <i className="fa fa-star" />
                    </a>
                    <a>
                      <i className="fa fa-star" />
                    </a>
                    <a>
                      <i className="fa fa-star" />
                    </a>
                    <a>
                      <i className="fa fa-star" />
                    </a>
                    <a>
                      <i className="fa fa-star" />
                    </a>
                  </div>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                  </p>
                  <h6>I am a Name</h6>
                </div>
              </div>
            </Col>
            <Col lg={4} sm={6} xs={12} className="mb-4">
              <div className="Happy-Crazy">
                <div>
                  <img src={BG2} />
                </div>
                <div className="align-self-center">
                  <div className="star-icon">
                    <a>
                      <i className="fa fa-star" />
                    </a>
                    <a>
                      <i className="fa fa-star" />
                    </a>
                    <a>
                      <i className="fa fa-star" />
                    </a>
                    <a>
                      <i className="fa fa-star" />
                    </a>
                    <a>
                      <i className="fa fa-star" />
                    </a>
                  </div>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                  </p>
                  <h6>I am a Name</h6>
                </div>
              </div>
            </Col>
            <Col lg={4} sm={6} xs={12} className="mb-4">
              <div className="Happy-Crazy">
                <div>
                  <img src={BG3} />
                </div>
                <div className="align-self-center">
                  <div className="star-icon">
                    <a>
                      <i className="fa fa-star" />
                    </a>
                    <a>
                      <i className="fa fa-star" />
                    </a>
                    <a>
                      <i className="fa fa-star" />
                    </a>
                    <a>
                      <i className="fa fa-star" />
                    </a>
                    <a>
                      <i className="fa fa-star" />
                    </a>
                  </div>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                  </p>
                  <h6>I am a Name</h6>
                </div>
              </div>
            </Col>
            <Col lg={4} sm={6} xs={12} className="mb-4">
              <div className="Happy-Crazy">
                <div>
                  <img src={BG4} />
                </div>
                <div className="align-self-center">
                  <div className="star-icon">
                    <a>
                      <i className="fa fa-star" />
                    </a>
                    <a>
                      <i className="fa fa-star" />
                    </a>
                    <a>
                      <i className="fa fa-star" />
                    </a>
                    <a>
                      <i className="fa fa-star" />
                    </a>
                    <a>
                      <i className="fa fa-star" />
                    </a>
                  </div>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                  </p>
                  <h6>I am a Name</h6>
                </div>
              </div>
            </Col>
            <Col lg={4} sm={6} xs={12} className="mb-4">
              <div className="Happy-Crazy">
                <div>
                  <img src={BG4} />
                </div>
                <div className="align-self-center">
                  <div className="star-icon">
                    <a>
                      <i className="fa fa-star" />
                    </a>
                    <a>
                      <i className="fa fa-star" />
                    </a>
                    <a>
                      <i className="fa fa-star" />
                    </a>
                    <a>
                      <i className="fa fa-star" />
                    </a>
                    <a>
                      <i className="fa fa-star" />
                    </a>
                  </div>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                  </p>
                  <h6>I am a Name</h6>
                </div>
              </div>
            </Col>
            <Col lg={4} sm={6} xs={12} className="mb-4">
              <div className="Happy-Crazy">
                <div>
                  <img src={BG1} />
                </div>
                <div className="align-self-center">
                  <div className="star-icon">
                    <a>
                      <i className="fa fa-star" />
                    </a>
                    <a>
                      <i className="fa fa-star" />
                    </a>
                    <a>
                      <i className="fa fa-star" />
                    </a>
                    <a>
                      <i className="fa fa-star" />
                    </a>
                    <a>
                      <i className="fa fa-star" />
                    </a>
                  </div>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                  </p>
                  <h6>I am a Name</h6>
                </div>
              </div>
            </Col>
            <Col lg={4} sm={6} xs={12} className="mb-4">
              <div className="Happy-Crazy">
                <div>
                  <img src={BG2} />
                </div>
                <div className="align-self-center">
                  <div className="star-icon">
                    <a>
                      <i className="fa fa-star" />
                    </a>
                    <a>
                      <i className="fa fa-star" />
                    </a>
                    <a>
                      <i className="fa fa-star" />
                    </a>
                    <a>
                      <i className="fa fa-star" />
                    </a>
                    <a>
                      <i className="fa fa-star" />
                    </a>
                  </div>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                  </p>
                  <h6>I am a Name</h6>
                </div>
              </div>
            </Col>
            <Col lg={4} sm={6} xs={12} className="mb-4">
              <div className="Happy-Crazy">
                <div>
                  <img src={BG3} />
                </div>
                <div className="align-self-center">
                  <div className="star-icon">
                    <a>
                      <i className="fa fa-star" />
                    </a>
                    <a>
                      <i className="fa fa-star" />
                    </a>
                    <a>
                      <i className="fa fa-star" />
                    </a>
                    <a>
                      <i className="fa fa-star" />
                    </a>
                    <a>
                      <i className="fa fa-star" />
                    </a>
                  </div>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                  </p>
                  <h6>I am a Name</h6>
                </div>
              </div>
            </Col>
            <Col lg={4} sm={6} xs={12} className="mb-4">
              <div className="Happy-Crazy">
                <div>
                  <img src={BG4} />
                </div>
                <div className="align-self-center">
                  <div className="star-icon">
                    <a>
                      <i className="fa fa-star" />
                    </a>
                    <a>
                      <i className="fa fa-star" />
                    </a>
                    <a>
                      <i className="fa fa-star" />
                    </a>
                    <a>
                      <i className="fa fa-star" />
                    </a>
                    <a>
                      <i className="fa fa-star" />
                    </a>
                  </div>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                  </p>
                  <h6>I am a Name</h6>
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

export default Index;

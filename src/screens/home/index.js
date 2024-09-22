import React, { useEffect, useState } from "react";
import Header from "../../directives/header/header";
import { Button, Col, Container, Row } from "react-bootstrap";
import Home1 from "../../assets/images/img/home1.png";
import Topic1 from "../../assets/images/img/science 2.png";
import Book1 from "../../assets/images/img/book1.png";
import BG1 from "../../assets/images/img/BG.png";
import BG2 from "../../assets/images/img/BG (1).png";
import BG3 from "../../assets/images/img/BG (2).png";
import BG4 from "../../assets/images/img/BG (3).png";
import Carousel from "react-multi-carousel";
import Footer from "../../directives/footer/footer";
import { Link, useNavigate } from "react-router-dom";
import ReactImageVideoLightbox from "react-image-video-lightbox";
import { useDispatch, useSelector } from "react-redux";
import { fetchSubject } from "../../reduxx/action/SubjectAction";
import {
  fetcEBooks,
  fetchBlog,
  fetchDaliyVocab,
  fetchJobs,
  fetchWhatsNew,
} from "../../reduxx/action/BlogAction";
import moment from "moment";
import { fetchVideos } from "../../reduxx/action/VideoAction";
import HtmlRenderer from "../../utils/stripHtmlTags";
import { BaseURL, COURSES } from "../../Config";
import AddReviewModal from "../../components/modal/AddReviewModal";
import { toast } from "react-toastify";
import StarRatingComponent from "react-star-rating-component";
import Axios from "../../utils/Axios";

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

const RendomeImage = () => [BG1, BG2, BG3, BG4][Math.floor(Math.random() * 4)];
function Index(props) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { getsubject } = useSelector((state) => state.subject);
  const [quizsubject, setQuizSubject] = useState([]);
  const [userRewiew, setUserRewiew] = useState([]);
  const { getBlog, getWhatsNew, getEBook, getDaliyVocab, getJobs } =
    useSelector((state) => state.blog);
  const { getvideo } = useSelector((state) => state.video);
  const VideoLightboxData =
    getvideo.length > 0 &&
    getvideo?.map((item) => {
      return {
        url: item?.video_url,
        type: "video",
        title: item?.title,
      };
    });
  const [openLightBox, setOpenLightBox] = useState(false);

  useEffect(() => {
    dispatch(
      fetchSubject({
        offset: 0,
        limit: 100,
      })
    );
    dispatch(
      fetchBlog({
        limit: 100,
        offset: 0,
      })
    );
    dispatch(
      fetchWhatsNew({
        limit: 100,
        offset: 0,
      })
    );
    dispatch(
      fetchVideos({
        limit: 100,
        offset: 0,
        is_trending: true,
      })
    );
    dispatch(
      fetcEBooks({
        limit: 100,
        offset: 0,
      })
    );
    dispatch(
      fetchDaliyVocab({
        limit: 1,
        offset: 0,
      })
    );
    dispatch(
      fetchJobs({
        limit: 100,
        offset: 0,
      })
    );
    const getquize = async () => {
      const res = await Axios.get(`${BaseURL}/quiz/getQuizsbyFeatured`);
      if (res.data?.data.length > 0) {
        setQuizSubject(res.data.data);
      }
    };
    const getReview = async () => {
      const res = await Axios.get(`${BaseURL}/review/getReviews`);
      if (res.data?.data.length > 0) {
        setUserRewiew(res?.data?.data);
      }
    };
    getquize();
    getReview();
  }, []);

  const extractVideoId = (videoUrl) => {
    // Regular expression to match YouTube video ID from various URL formats
    const match = videoUrl.match(
      /(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|shorts\/|watch\?v=|watch\?.+&v=))([\w-]{11})/
    );
    if (match && match[1]) {
      return match[1];
    } else {
      // Invalid YouTube URL or no match found
      return null;
    }
  };
  const [showModal, setShowModal] = useState(false);

  const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

  const handleSubmitReview = async (data) => {
    const res = await Axios.post(`${BaseURL}/review/addReview`, {
      rating: data.rating,
      review: data.review,
    });
    if (res.data?.status === 201) {
      toast.success("Review Submitted Successfully");
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
                  <Button onClick={() => window.open(COURSES, "_blank")}>
                    Exam Note
                  </Button>
                  <Button onClick={() => navigate("/topic-current-affairs")}>
                    Current Affairs
                  </Button>
                  <Button onClick={() => navigate("/quiz")}>MCQ</Button>
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
                  {getWhatsNew?.data?.length > 0
                    ? getWhatsNew?.data.map((item) => (
                        <div className="trick-list">
                          <h6>
                            <i className="fa fa-calendar-check-o" />{" "}
                            {moment(item?.createdDate).format("DD MMMM YY")}
                          </h6>
                          <p
                            style={{ cursor: "pointer" }}
                            className="fw-bold"
                            onClick={() =>
                              navigate(`/whats-details`, {
                                state: {
                                  whatsData: item,
                                  base_url: getWhatsNew?.base_url,
                                },
                              })
                            }
                          >
                            {item?.title}
                          </p>
                        </div>
                      ))
                    : null}
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
                        cursor: "pointer",
                      }}
                    >
                      View All
                    </div>
                  </Link>
                </div>
                <div className="trick-scroll">
                  {getBlog?.data?.length > 0
                    ? getBlog?.data.map((item) => (
                        <div className="trick-list">
                          <p
                            className="fw-bold mb-3"
                            style={{ cursor: "pointer" }}
                            onClick={() =>
                              navigate(`/blog-details`, {
                                state: {
                                  blogData: item,
                                  base_url: getBlog?.base_url,
                                },
                              })
                            }
                          >
                            {item?.title}
                          </p>
                          <h5>
                            <i className="fa fa-calendar-check-o" />{" "}
                            <span>
                              {moment(item?.createdDate).format("DD MMMM YY")}
                            </span>{" "}
                            <i className="fa fa-user-circle" />{" "}
                            <span>Admin</span>
                          </h5>
                          <p className="latest-des">
                            <HtmlRenderer
                              htmlContent={item?.description || ""}
                            />
                            ...
                          </p>
                        </div>
                      ))
                    : null}
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
            {getvideo?.length > 0 &&
              getvideo?.map((item) => {
                const id = extractVideoId(item?.video_url);
                return (
                  <div
                    onClick={() => setOpenLightBox(true)}
                    className="testimonial"
                  >
                    {/* <img src={testimonial1} /> */}
                    <img
                      src={`https://img.youtube.com/vi/${id}/hqdefault.jpg`}
                      alt="img"
                    />
                    <div className="testimonial-icon">
                      <i className="fa fa-play" />
                    </div>
                  </div>
                );
              })}
          </Carousel>
          {openLightBox && (
            <ReactImageVideoLightbox
              data={VideoLightboxData || []}
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
            {getsubject?.data?.length > 0 &&
              getsubject?.data.map((item) => (
                <div
                  className="Topic-card"
                  style={{ cursor: "pointer" }}
                  onClick={() =>
                    navigate(`/trending-on-youtube`, {
                      state: { subject: item },
                    })
                  }
                >
                  <div className="taxonomy-image">
                    {/* <img src={Topic1} /> */}
                    <img
                      alt={item?.subject_name}
                      src={item?.image ?? Topic1}
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = Topic1;
                      }}
                    />
                  </div>
                  <div>
                    <h5>{item?.subject_name}</h5>
                  </div>
                </div>
              ))}
          </div>
          <Link to="/subject-wise-video" className="all-view">
            View More
          </Link>
        </Container>
      </section>
      <section className="section-padding" id="quiz">
        <Container fluid className="container-space">
          <div className="main-heading">
            <div></div>
            <h4>Daily Current Affairs and GK | Live Quiz</h4>
          </div>
          {quizsubject?.map((quiz, index) => {
            return (
              <div className="live-quiz">
                <Row>
                  <Col lg={10}>
                    <p>
                      {`${quiz?.name} | ${moment(quiz?.createdDate).format(
                        "DD MMMM YYYY"
                      )}`}
                    </p>
                    <div>
                      <span>
                        <i className="fa fa-question-circle-o" />{" "}
                        {`${quiz?.questionList?.length} Questions`}
                      </span>
                      <span>
                        <i className="fa fa-file-text-o" />{" "}
                        {`${quiz?.totalMarks} Marks`}
                      </span>
                      <span>
                        <i className="fa fa-clock-o" /> 60 Mins
                      </span>
                    </div>
                  </Col>
                  <Col lg={2} className="align-self-center">
                    <Button
                      onClick={() => navigate(`/startquiz?qi=${quiz?._id}`)}
                    >
                      Start Now
                    </Button>
                  </Col>
                </Row>
              </div>
            );
          })}

          <Link to="/quiz" className="all-view">
            View More
          </Link>
        </Container>
      </section>
      {/* Daily Current Affairs */}

      {/* E - Books */}
      <section className="section-padding">
        <Container fluid className="container-space">
          <div className="main-heading">
            <h4>E - Books</h4>
          </div>
          <div className="topic-box">
            {getEBook?.data?.length > 0 &&
              getEBook?.data.slice(0, 5).map((item) => (
                <div
                  className="book-card"
                  onClick={() =>
                    window.open(item?.pdf_link, "_blank", "noopener,noreferrer")
                  }
                  style={{ cursor: "pointer" }}
                >
                  <img
                    src={item?.image || Book1}
                    alt="error"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = Book1;
                    }}
                  />
                </div>
              ))}
          </div>
          <Link to={"/allEBook"} className="all-view">
            View More
          </Link>
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
                  {getJobs?.data?.length > 0 &&
                    getJobs?.data?.map((item) => (
                      <div className="job-content">
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                          }}
                        >
                          <span className="job-icon">
                            <i className="fa fa-calendar-check-o" />
                          </span>
                          <span className="job-date">
                            {moment(item?.apply_date).format("DD MMMM YYYY")}
                          </span>
                        </div>
                        <h4>{item.title}</h4>
                        <Button
                          as="a"
                          target="_blank"
                          href={`${item.job_link}`}
                          className="btn-green"
                          disabled={item.job_link === ""}
                        >
                          Apply Now
                        </Button>
                      </div>
                    ))}
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
                  {getDaliyVocab?.data?.length > 0 && (
                    <HtmlRenderer
                      htmlContent={getDaliyVocab?.data[0]?.description}
                    />
                  )}
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
            {userRewiew?.length > 0
              ? userRewiew.slice(0, 10).map((item) => (
                  <Col lg={4} sm={6} xs={12} className="mb-4">
                    <div className="Happy-Crazy">
                      <div>
                        <img
                          src={item?.user_profile || RendomeImage()}
                          alt={item?.name}
                          onError={(e) => {
                            e.target.onerror = null;
                            e.target.src = RendomeImage();
                          }}
                          style={{
                            width: "100px",
                            height: "100px",
                            borderRadius: "10px",
                          }}
                        />
                      </div>
                      <div className="align-self-center">
                        <StarRatingComponent
                          name="rate1"
                          starCount={5}
                          value={item?.rating}
                          editing={false}
                          starColor="#04aa50"
                          emptyStarColor="#ddd"
                        />
                        <div className="star-icon"></div>
                        <p
                          style={{
                            wordWrap: "break-word",
                            whiteSpace: "normal",
                            overflowWrap: "break-word",
                            wordBreak: "break-word",
                            marginBottom: "1rem",
                          }}
                        >
                          {item?.review}
                        </p>
                        <h6>{item?.name}</h6>
                      </div>
                    </div>
                  </Col>
                ))
              : null}
          </Row>
          <div style={{ textAlign: "center" }}>
            <Button
              onClick={handleShow}
              style={{ backgroundColor: "#04aa50", border: "none" }}
            >
              Add Review
            </Button>
          </div>
        </Container>
      </section>
      <Footer />
      <AddReviewModal
        show={showModal}
        handleClose={handleClose}
        handleSubmitReview={handleSubmitReview}
      />
    </>
  );
}

export default Index;

import React, { useEffect, useState } from "react";
import {
  Row,
  Col,
  Button,
  Spinner,
  Container,
  InputGroup,
  Form,
} from "react-bootstrap";
import moment from "moment";
import "./latestblogs.css";
import Header from "../../directives/header/header";
import { Link, useNavigate } from "react-router-dom";
import Axios from "../../utils/Axios";
import { BaseURL } from "../../Config";
import apiEndPoints from "../../utils/apiEndPoints";
import { stripHtmlTags } from "../../utils/stripHtmlTags";
import { toast } from "react-toastify";

const LatestBlogs = () => {
  const navigate = useNavigate();
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const limit = 10;
  const [visibleBlogs, setVisibleBlogs] = useState(10);
  const [totalBlogs, setTotalBlogs] = useState(0);

  const fetchBlogs = async () => {
    try {
      const response = await Axios.get(`${BaseURL}${apiEndPoints.GETBLOG}`, {
        params: { limit: visibleBlogs },
      });
      setBlogs(response.data.data); // Use 'data' from API response
      setTotalBlogs(response.data.total_data); // Use 'total_data' from API response
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, [visibleBlogs]);

  const handleLoadMore = () => {
    setVisibleBlogs((prev) => prev + limit); // Increase visible blogs count
  };

  if (loading && blogs.length === 0) return <Spinner animation="border" />;
  if (error) toast.error(error.message || "Something went wrong");

  return (
    <>
      <Header />
      <div className="all-bannerBG">
        <Container fluid className="container-space">
          <Row className="justify-content-center">
            <Col lg={6} sm={8}>
              <div className="all-banner-content">
                <h3>Latest Blogs</h3>
                <Link to="/home">Home </Link>
                <span>
                  <i className="fa fa-angle-double-right" /> Latest Blogs
                </span>
                <span>
                  <i className="fa fa-angle-double-right" /> View All
                </span>
                <InputGroup className="mb-3">
                  <Form.Control placeholder="Search blog" />
                  <InputGroup.Text id="basic-addon2">
                    <i className="fa fa-search" />
                  </InputGroup.Text>
                </InputGroup>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="latest-blogs">
        <Container fluid>
          <Row>
            <Col md={2}></Col> {/* Left Spacer */}
            <Col md={8}>
              {/* Blog Cards */}
              <Row>
                {blogs.map((blog) => (
                  <Col key={blog._id} xs={12} className="mb-4">
                    <div
                      className="blog-card"
                      onClick={() => navigate(`/blog-details/${blog._id}`)}
                    >
                      <img
                        src={blog.image}
                        alt={blog.title}
                        className="blog-image"
                      />
                      <div className="blog-content">
                        <h3 className="blog-title">{blog.title}</h3>
                        <p className="blog-description">
                          {stripHtmlTags(blog.sortdescription)}...
                        </p>
                        <span className="blog-date">
                          {moment(blog.createdDate).format("DD MMMM YYYY")}
                        </span>
                      </div>
                    </div>
                  </Col>
                ))}
              </Row>
            </Col>
            <Col md={2}></Col> {/* Right Spacer */}
          </Row>
        </Container>
        {visibleBlogs < totalBlogs && (
          <Button
            variant="primary"
            className="load-more-btn"
            onClick={handleLoadMore}
          >
            Load More
          </Button>
        )}
      </div>
    </>
  );
};

export default LatestBlogs;

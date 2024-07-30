import React, { useEffect } from "react";
import "../home/index.css";
import Header from "../../directives/header/header";
import { Col, Container, Form, InputGroup, Row } from "react-bootstrap";
import Book1 from "../../assets/images/img/book1.png";
import Footer from "../../directives/footer/footer";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetcEBooks } from "../../reduxx/action/BlogAction";


function AllEBook(props) {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { getEBook } = useSelector(state => state.blog)
  useEffect(() => {
    dispatch(fetcEBooks({
      offset: 0,
      limit: 100
    }))
  }, [])
  return (
    <>
      <Header />
      <div className="all-bannerBG">
        <Container fluid className="container-space">
          <Row className="justify-content-center">
            <Col lg={6} sm={8}>
              <div className="all-banner-content">
                <h3>E-Book</h3>
                <Link to="/home">Home </Link>
                <span>
                  <i className="fa fa-angle-double-right" /> E-Book
                </span>
                {/* <InputGroup className="mb-3">
                  <Form.Control placeholder="Search Subject" />
                  <InputGroup.Text id="basic-addon2">
                    <i className="fa fa-search" />
                  </InputGroup.Text>
                </InputGroup> */}
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      <section className="section-padding">
        <Container fluid className="container-space">
          <div className="topic-box space-section">
            {getEBook?.data?.length > 0 && getEBook?.data.map((item) => (
              <div className="book-card" onClick={() => window.open(item?.pdf_link)}>
                <img src={item?.image !== '' ? getEBook?.base_url + item?.image : Book1} />
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Adds code  */}
      <div></div>
      <Footer />
    </>
  );
}

export default AllEBook;

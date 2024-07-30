import React from "react";
import Header from "../../directives/header/header";
import { Button, Col, Container, Form, InputGroup, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import Editorials from "../../assets/images/img/Editorials.png";
import OtherTopics from "../../components/OtherTopics/OtherTopics";
import Footer from "../../directives/footer/footer";

function NoteWithVideoPlayer() {
  return (
    <>
      <Header />
      <div className="all-bannerBG">
        <Container fluid className="container-space">
          <Row className="justify-content-center">
            <Col lg={10} sm={8}>
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
            <Col lg={9} sm={9}>
              <div className="About-Subject">
                <Row>
                  <Col lg={12} sm={12} className="mb-4">
                    <div className="Editorials-card text-center">
                      {/* <img src={Editorials} /> */}
                      <iframe width="100%" height="500" src="https://www.youtube.com/embed/Xx-JLzjHuro?si=ZgM54vdBCD27-O_u" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    </div>
                    <div className="mt-3">
                      <h4 className="Content-head">
                        <i className="fa fa-circle" /> Content Number 2
                      </h4>
                      <p>
                        Content Number 1 Lorem Ipsum is simply dummy text of the
                        printing and typesetting industry. Lorem Ipsum has been
                        the industry's standard dummy text ever since the 1500s,
                        when unknown printer took a galley of type and scrambled
                        it to make a type specimen book. It has survived not
                        only five centuries, but also the leap into electronic
                        typesetting, remaining essentially unchanged. Content
                        Number 1 Lorem Ipsum is simply dummy text of the
                        printing and typesetting industry. Lorem Ipsum has been
                        the industry's standard dummy text ever since the 1500s,
                        when unknown printer took a galley of type and scrambled
                        it to make a type specimen book. It has survived not
                        only five centuries, but also the leap into electronic
                        typesetting, remaining essentially unchanged.
                      </p>

                      <h4 className="Content-head">
                        <i className="fa fa-circle" /> Content Number 2
                      </h4>
                      <p>
                        Content Number 1 Lorem Ipsum is simply dummy text of the
                        printing and typesetting industry. Lorem Ipsum has been
                        the industry's standard dummy text ever since the 1500s,
                        when unknown printer took a galley of type and scrambled
                        it to make a type specimen book. It has survived not
                        only five centuries, but also the leap into electronic
                        typesetting, remaining essentially unchanged. Content
                        Number 1 Lorem Ipsum is simply dummy text of the
                        printing and typesetting industry. Lorem Ipsum has been
                        the industry's standard dummy text ever since the 1500s,
                        when unknown printer took a galley of type and scrambled
                        it to make a type specimen book. It has survived not
                        only five centuries, but also the leap into electronic
                        typesetting, remaining essentially unchanged.
                      </p>

                      <h4 className="Content-head">
                        <i className="fa fa-circle" /> Content Number 2
                      </h4>
                      <p>
                        Content Number 1 Lorem Ipsum is simply dummy text of the
                        printing and typesetting industry. Lorem Ipsum has been
                        the industry's standard dummy text ever since the 1500s,
                        when unknown printer took a galley of type and scrambled
                        it to make a type specimen book. It has survived not
                        only five centuries, but also the leap into electronic
                        typesetting, remaining essentially unchanged. Content
                        Number 1 Lorem Ipsum is simply dummy text of the
                        printing and typesetting industry. Lorem Ipsum has been
                        the industry's standard dummy text ever since the 1500s,
                        when unknown printer took a galley of type and scrambled
                        it to make a type specimen book. It has survived not
                        only five centuries, but also the leap into electronic
                        typesetting, remaining essentially unchanged.
                      </p>

                      <h4 className="Content-head">
                        <i className="fa fa-circle" /> Content Number 2
                      </h4>
                      <p>
                        Content Number 1 Lorem Ipsum is simply dummy text of the
                        printing and typesetting industry. Lorem Ipsum has been
                        the industry's standard dummy text ever since the 1500s,
                        when unknown printer took a galley of type and scrambled
                        it to make a type specimen book. It has survived not
                        only five centuries, but also the leap into electronic
                        typesetting, remaining essentially unchanged. Content
                        Number 1 Lorem Ipsum is simply dummy text of the
                        printing and typesetting industry. Lorem Ipsum has been
                        the industry's standard dummy text ever since the 1500s,
                        when unknown printer took a galley of type and scrambled
                        it to make a type specimen book. It has survived not
                        only five centuries, but also the leap into electronic
                        typesetting, remaining essentially unchanged.
                      </p>
                    </div>
                  </Col>
                </Row>
              </div>
            </Col>
            <Col lg={3} sm={3}>
              <div className="About-Subject mb-3">
                <h4 className="inner-head">Table of Content</h4>
                <h4 className="Content-head">
                  <i className="fa fa-circle" /> Content Number 1
                </h4>
                <h4 className="Content-head">
                  <i className="fa fa-circle" /> Content Number 2
                </h4>
                <h4 className="Content-head">
                  <i className="fa fa-circle" /> Content Number 3
                </h4>
                <h4 className="Content-head">
                  <i className="fa fa-circle" /> Content Number 4
                </h4>
                <h4 className="Content-head">
                  <i className="fa fa-circle" /> Content Number 5
                </h4>
              </div>
              <div className="About-Subject">
                <h4 className="inner-head">Trending Topic</h4>
                {/* Trending topic content area */}
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <Footer />
    </>
  );
}

export default NoteWithVideoPlayer;

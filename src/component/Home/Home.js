import React, { useEffect, useState } from "react";
import { Button, Card, Col, Row } from "react-bootstrap";
import Rating from "react-rating";
import "./home.css";

const Home = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("./fakeDb2.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  return (
    <div className="">
      <div className="text-center mt-3">
        <h1>
          Welcome to <span className="text-info">The World of Coding</span>
        </h1>
        <h4>
          Learn as much as you can while you are young.<br/> Because, learning to code can help you do better in other subjects that you're studying or learning. .
        </h4>
      </div>
      <div className="text-center mt-5">
        <h1 className="shadow p-3 mb-5 bg-body rounded">
           Most Popular.
        </h1>
      </div>
      <div className="text-center ">
        <Row xs={1} md={5} className="g-5 justify-content-center mt-4 ">
          {services.map((service) => (
            <Col>
              <Card className="home-card card-style" style={{ width: "18rem" }}>
                <Card.Img
                  className="card-img"
                  variant="top"
                  src={service.image}
                />
                <Card.Body>
                  <Card.Title>
                    <h5>{service.course}</h5>
                  </Card.Title>
                  <Card.Text>
                    <b>By {service.author}</b>
                  </Card.Text>
                  <Card.Text>
                    <b>Ratings and Reviews: </b>
                    <Rating
                      className="rating-clr"
                      initialRating={service.rating}
                      readonly
                      emptySymbol="far fa-star "
                      fullSymbol="fas fa-star "
                    ></Rating>
                  </Card.Text>
                  <Button variant="success">Enroll Now</Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
};

export default Home;

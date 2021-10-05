import React, { useEffect, useState } from "react";
import { Card, Col, Row, Button } from "react-bootstrap";
import Rating from "react-rating";
import "./Service.css";

const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("./fakeDb.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div className="text-center mt-4">
      <h1>More from Code For Fun</h1>

      <h3>Choose Your Desire Course And Get Started From Now</h3>

      <div>
        <Row xs={1} md={5} className="g-5 justify-content-center mt-4 ">
          {services.map((service) => (
            <Col>
              <Card
                className="home-card card-style ms-4"
                style={{ width: "18rem" }}
              >
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
                    <h5>Price: ${service.price}</h5>
                  </Card.Text>
                  <Card.Text>
                    <b>Rating: </b>
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

export default Services;

import React from "react";
import { Button, Form } from "react-bootstrap";
import "./ContactUs.css";

const ContactUs = () => {
  return (
    <div className="container my-5 py-5 shadow p-5 mb-5 bg-body contact-us ">
      <h2 className="text-center mb-3">CONTACT US</h2>
      <div className="row align-items-center gx-5">
        <div className="col-lg-6 align-items-center">
          <br />
          <h3>Get In Touch</h3>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Your Massager</Form.Label>
              <Form.Control type="text" placeholder="Enter Massage" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Button variant="primary" type="submit">
              Send Now
            </Button>
          </Form>
        </div>
        <div className="col-lg-6">
          <h2>Contact Info</h2>
          <p>
            We denounce with righteous indignation in and dislike men who are so
            beguiled and to demo realized by the charms of pleasure moment, so
            blinded by desire, that they cannot foresee the pain and trouble
            that are bound.
          </p>

          <li>374 William S Canning Blvd, Fall River MA 2721, USA</li>
          <li>(+880) 173-8958254</li>
          <li>info@learnfromscratch.com</li>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;

import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { FaLocationDot } from "react-icons/fa6";
import { BiSolidPhoneCall } from "react-icons/bi";
import { MdEmail } from "react-icons/md";
import { BsGithub } from "react-icons/bs";
import "../Contact/Contact.css";

const Contact = () => {
  return (
    <section className="contact-container">
      <Container>
        <Row>
          <Col className="md-7">
            <section className="contact-title">
              <h4>Get in touch</h4>
            </section>
            <Form>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Name</Form.Label>
                <Form.Control type="name" placeholder="Enter your name" />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Enter your email" />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Contact Number</Form.Label>
                <Form.Control type="number" placeholder="Enter your number" />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label>Example textarea</Form.Label>
                <Form.Control as="textarea" rows={3} />
              </Form.Group>
            </Form>
            <Button variant="dark">Send</Button>
          </Col>
          <Col className="md-5">
            <section className="contact-title">
              <h4>Contact Me</h4>
            </section>
            <div className="mt-5">
              <div className="d-flex">
                <div className="contact-text">
                  <p>
                    <FaLocationDot /> Address: 810 P. Sta Cruz Village, Borol
                    1st, Blagtas, Bulacan
                  </p>
                </div>
              </div>
              <div className="d-flex">
                <div className="contact-text">
                  <p>
                    <BiSolidPhoneCall /> Contact: 09770965371
                  </p>
                </div>
              </div>
              <div className="d-flex">
                <div className="contact-text">
                  <p>
                    <MdEmail /> Email: johnaaron.delacruz@yahoo.com
                  </p>
                </div>
              </div>
              <div className="d-flex">
                <div className="contact-text">
                  <p>
                    <BsGithub /> Github: https://github.com/johnaarondelacruz
                  </p>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;

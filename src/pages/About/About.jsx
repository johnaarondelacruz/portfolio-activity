import { Container, Row, Col, Button, Card, Carousel } from "react-bootstrap";
import "../About/About.css";
import Home from "../Home/Home";
import Files from "../../assets/picture-files.png";
import Html from "../../assets/picture-html.png";
import Css from "../../assets/picture-css.png";
import PictureSample1 from "../../assets/picture-sample1.png";
import PictureSample2 from "../../assets/picture-sample2.png";
import PictureSample3 from "../../assets/picture-sample3.png";
import PictureSample4 from "../../assets/picture-sample4.png";
import PictureSample5 from "../../assets/picture-sample5.png";
import PictureSample6 from "../../assets/picture-sample6.png";

const About = () => {
  return (
    <Container>
      <Home />
      <Row>
        <Col>
          <section className="about-text">
            <h1>Expertise</h1>
          </section>
          <Col className="d-flex my-5 gap-5 justify-content-center">
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={Files} />
              <Card.Body>
                <Card.Title>Encoding</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="dark">Read more</Button>
              </Card.Body>
            </Card>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={Html} />
              <Card.Body>
                <Card.Title>HTML</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="dark">Read more</Button>
              </Card.Body>
            </Card>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={Css} />
              <Card.Body>
                <Card.Title>CSS</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="dark">Read more</Button>
              </Card.Body>
            </Card>
          </Col>
        </Col>
        <section className="about-text2">
          <h1>Sample Projects</h1>
        </section>
        <Carousel interval={800} pause={false}>
          <Carousel.Item>
            <img className="carousel-img" src={PictureSample1} alt="" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="carousel-img" src={PictureSample2} alt="" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="carousel-img" src={PictureSample3} alt="" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="carousel-img" src={PictureSample4} alt="" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="carousel-img" src={PictureSample5} alt="" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="carousel-img" src={PictureSample6} alt="" />
          </Carousel.Item>
        </Carousel>
      </Row>
    </Container>
  );
};

export default About;

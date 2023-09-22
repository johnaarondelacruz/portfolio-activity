import { Container, Row, Col } from "react-bootstrap";
import ResumePicture from "../../assets/picture-resume.png";
import Resume from "../../assets/resume.pdf";
import "../Home/Home.css";

const Home = () => {
  return (
    <Container>
      <section className="home">
        <Row>
          <Col md={6}>
            <img src={ResumePicture} alt="" />
          </Col>
          <Col md={6}>
            <div className="home-text">
              <h1>Hi, I am John Aaron</h1>
              <h5>Full Stack Web Developer</h5>
              <p className="text-justify">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta
                quam sequi repudiandae explicabo nesciunt eos doloremque autem
                earum dicta, adipisci, a aliquid commodi cum illo, qui officia
                assumenda id blanditiis.
              </p>
              <a href={Resume} className="btn">
                Download CV
              </a>
            </div>
          </Col>
        </Row>
      </section>
    </Container>
  );
};

export default Home;

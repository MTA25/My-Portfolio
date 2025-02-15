import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
// import headerImg from "../assets/img/header-img.svg";
import headerImg from "../assets/img/controller.svg";
import { ArrowRightCircle } from "react-bootstrap-icons";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = ["Game Developer"];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex((prevIndex) => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex((prevIndex) => prevIndex + 1);
    }
  };

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated " : ""
                  }
                >
                  <span className="tagline">Welcome to my Portfolio</span>
                  <h1>
                    {`Hi! I'm Muhammad Talha`}{" "}
                    <span
                      className="txt-rotate"
                      dataperiod="1000"
                      data-rotate='["Game Developer"]'
                    >
                      <span className="wrap">{text}</span>
                    </span>
                  </h1>
                  <p>
                    I am a passionate Game Developer with over five years of experience creating immersive gaming experiences. 
                    Skilled in the latest technologies. I specialize in building robust feature architectures to enhance gameplay. 
                    Proficient in various programming languages, I prioritize writing clean, reusable, and well-documented code 
                    to ensure high-quality game performance.
                    <br />
                    <br />
                    My expertise includes optimizing game engines, debugging
                    complex issues, and refining game architecture to boost
                    productivity and deliver seamless gameplay. With a strong
                    eye for detail and a solid understanding of gaming trends, I
                    excel in collaborative environments where creativity
                    thrives. I’m eager to contribute to exciting projects and
                    continuously learn and adapt within the gaming industry.
                    Let’s connect and bring innovative gaming ideas to life!
                  </p>
                  {/*<button onClick={() => console.log('connect')}>Let’s Connect <ArrowRightCircle size={25} /></button>*/}
                </div>
              )}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__zoomIn d-flex align-content-center justify-content-center" : "d-flex align-content-center justify-content-center"
                  }
                >
                  <img
                    src={headerImg}
                    alt="Header Img"
                    className="w-75"
                  />
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

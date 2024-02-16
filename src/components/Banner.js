import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import headerImg from 'C:/Users/hewaw/OneDrive/Desktop/Portfolio/my-portfolio/src/assets/img/me.png';

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const toRotate = ["Web Developer", "Cybersecurity Enthusiast", "Machine Learning Enthusiast"];
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, [delta]);

    return () => {
      clearInterval(ticker);
    };
  }, [text, delta]); // Include delta in the dependency array

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(500);
    }
  };

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <span className="tagline" ><h1 style={{ color: '#fff' }}>Welcome !!</h1></span>
            <h1>{`Hi I'm Navinda `}<span className='wrap'><br></br>{text}</span></h1>
            <p>My name is Navinda Hewawickrama. I am undergraduate at the University of Ruhuna studying Computer Science for my bachelors.
            I am currently in my third year. I am passionate about Cyber Security, Machine Learning and Web development
            </p>
            
            {/* <button onClick={() => console.log('connect')}>Let's connect<ArrowRightCircle size={25} /></button>  */}
          
          </Col>
          <Col xs={12} md={6} xl={5}>
          <img src={headerImg} alt="Header-img" style={{ height: '400px', width: '400px' }} />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Banner;

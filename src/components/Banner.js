import { Container, Row , Col} from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";


export const Banner = () => {
    return (
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <span className="tagline">
                            Welcome to my portfolio
                        </span>
                        <h1>{`Hi I'm webdecoded`}<span className='wrap'>Web Developer</span></h1>
                        <p>This is where usually my about my self informatin goes in</p>
                        <button onClick={() => console.log('connect')}>Let's connect<ArrowRightCircle size={25}/></button>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <img src={'#'} alt="Header-img" />
                        
                        </Col>
                </Row>
            </Container>
        </section>

    )
}


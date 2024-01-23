import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import logo from "../assets/img/logo.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
    return (
      <footer className="footer">
        <Container>
          <Row className="align-items-center">
            <MailchimpForm />
            <Col size={12} sm={6}>
              <img src={logo} alt="Logo" />
            </Col>
            <Col size={12} sm={6} className="text-center text-sm-end">
              <div className="social-icon">
                <a href="www.linkedin.com/in/navinda-hewawickrama-592b3b186"><img src={navIcon1} alt="Icon1" /></a>
                <a href="https://web.facebook.com/profile.php?id=100008310636908"><img src={navIcon2} alt="Icon2" /></a>
                <a href="https://www.instagram.com/navinda_hewa/"><img src={navIcon3} alt="Icon3" /></a>
              </div>
              <p>Copyright 2022. All Rights Reserved</p>
            </Col>
          </Row>
        </Container>
      </footer>
    )
  }
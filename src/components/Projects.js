import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg0 from "../assets/img/wns.png";
import projImg1 from "../assets/img/pacman.png";
import projImg2 from "../assets/img/chat.png";
import projImg3 from "../assets/img/vote.png";
//import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {
    const projects = [
        {
          title: "Different Games",
          description: "Design & Development of old retro games like Pacman, Snake, etc.",
          imgUrl: projImg1,
        },
        {
          title: "Testing Chat App",
          description: "Design & Development",
          imgUrl: projImg2,
        },
        {
          title: "Voting System",
          description: "Design & Development",
          imgUrl: projImg3,
        },
        {
          title: "Business Startup",
          description: "Design & Development",
          imgUrl: projImg1,
        },
        {
          title: "Business Startup",
          description: "Design & Development",
          imgUrl: projImg2,
        },
        {
          title: "Business Startup",
          description: "Design & Development",
          imgUrl: projImg3,
        },
      ];


      const work = [
        {
          
        },
        {
          title: "WNS Global Services Pvt Ltd",
          description: "Operations Associate - Quality Control (QC)",
          imgUrl: projImg0,
        },   
      ];
      return (
        <section className="project" id="projects">
            <Container>
                <Row>
                    <Col size={12}>
                        <TrackVisibility>
                            {({isVisible})=>
                                <div className={isVisible ? "animeate_animated animate_fadeIn":""}>
                                    <h2>Projects and Work Experiences</h2>
                                    <p>Projects that I have done during my time at the University 😁</p>
                                    <Tab.Container id="projects-tabs" defaultActiveKey="first">
                                        <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                                            <Nav.Item>
                                                <Nav.Link eventKey="first">Tab 1</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link eventKey="second">Tab 2</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link eventKey="third">Tab 3</Nav.Link>
                                            </Nav.Item>
                                        </Nav>
                                    
                                        <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                                            <Tab.Pane eventKey="first">
                                                <Row>
                                                    {
                                                        projects.map((project, index) => {
                                                            return (
                                                                <ProjectCard key={index} {...project} />
                                                            )
                                                        })
                                                    }
                                                </Row>
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="second">
                                                <Row>
                                                    {
                                                        work.map((project, index) => {
                                                            return (
                                                                <ProjectCard key={index} {...project} />
                                                            )
                                                        })
                                                    }
                                                </Row>
                                                <p>I worked in an operations associate position as a QC at WNS Global Service Sri Lanka for 1 year .</p>
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="third">
                                                <p>My Github profile is linked below to see my other projects</p>
                                                        <a href="https://github.com/NavindaHewawickrama">Navinda Github</a>
                                            </Tab.Pane>
                                            </Tab.Content>
                                        </Tab.Container>
                                </div>
                            }
                        </TrackVisibility>
                    </Col>
                </Row>
            </Container>
        </section>
      )
}
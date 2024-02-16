import Carousel from "react-multi-carousel";
import 'react-multi-carousel/lib/styles.css';
import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";

//import colorSharp from "../assets/img/bgpic2.jpg"

export const Skills = () => {
    const responsive ={
        superLargeDesktop: {
            breakpoint : {max:4000,min:3000},
            items :5
        }, 
        desktop: {
            breakpoint : {max:3000,min:1024},
            items:3
        },
        tablet : {
            breakpoint : {max:1024,min:464},
            items:2
        },
        mobile : {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };
    return(
        <section className="skill" id="skills">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="skill-bx wow zoomIn">
                            <h2>Skills</h2>
                            <p>These are my Skills and the level of their efficincy.</p>
                            <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                                    <div className="item">
                                        <img src={meter1} alt="m1" />
                                        <h5>Web Development</h5>
                                    </div>
                                    <div className="item">
                                        <img src={meter2} alt="m2" />
                                        <h5>Cyber Security</h5>
                                    </div>
                                    <div className="item">
                                        <img src={meter1} alt="m3" />
                                        <h5>Machine Learning</h5>
                                    </div>
                                    <div className="item">
                                        <img src={meter3} alt="m4" />
                                        <h5>Essay Writing</h5>
                                    </div>
                                </Carousel>
                        </div>
                    </div>  
                </div>
            </div>
            <div className="background-image-left" ></div>
        </section>
    );
    
};

export default Skills;
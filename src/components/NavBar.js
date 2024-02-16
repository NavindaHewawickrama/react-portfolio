import { Navbar, Container } from "react-bootstrap"
import { useState, useEffect } from "react"

import React from 'react';
import { Nav } from 'react-bootstrap';

import logo from '../assets/img/3.png';
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const NavBar = () => {
    const [activeLink, setActiveLink] = useState('home')
    const[scrolled,seScrolled] = useState(false)

    useEffect(() => {
        const onScroll = () => {
            if(window.scrollY > 50) {
                seScrolled(true);
            }else{
                seScrolled(false);
            }
        }
            window.addEventListener("scroll", onScroll);

            return () => window.removeEventListener("scroll", onScroll);
},[])
    const onUpdateActiveLink = (link) => {
        setActiveLink(link)
    }
    return(
        <Navbar  expand="lg" className={scrolled ? "scrolled":""}>
            <Container>
                
                    <img src={logo} alt="Logo" style={{width:'300px', height:'80px'}}/>
                <Navbar.Toggle aria-controls="basic-navbar-nav">
                    <span className="navbar-toggler-icon"></span>
                    </Navbar.Toggle>
                
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto">
                    <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
                    <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
                    <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
                </Nav>
                    <span className="navbar-text">
                        <div className="social-icon">
                            <a href="https://www.linkedin.com/in/navinda-hewawickrama/"><img src={navIcon1} alt="Icon1" /></a>
                            <a href="https://web.facebook.com/profile.php?id=100008310636908"><img src={navIcon2} alt="Icon2" /></a>
                            <a href="https://www.instagram.com/navinda_hewa/"><img src={navIcon3} alt="Icon3" /></a>
                        </div>
                        <button className="vvd" onClick={() => console.log('connect')}>
                            <span>
                                Lets' connect
                            </span>
                        </button>
                    </span>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
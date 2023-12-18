import { Navbar, Container } from "react-bootstrap"
import { useState, useEffect } from "react"
export const NavBar = () => {
    const [activeLink, setActiveLink] = useState('home')
    canst[scolled,seScrolled] = useState(false)

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
                <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                    <img src={''} alt="Logo" />
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
                        <div className="social-icons">
                            <a href="#" target="_blank"></a>
                            <a href="#" target="_blank"></a>
                            <a href="#" target="_blank"></a>
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
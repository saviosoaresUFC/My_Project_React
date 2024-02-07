import React from 'react'
import { Link, useMatch, useResolvedPath } from 'react-router-dom'
import Logo from '../img/logo_montenegro.png'
import AvatarSavio from '../img/avatarsavio.jpg'
import './Styles/NavBarStyle.css'
import { FaNetworkWired } from "react-icons/fa";
import { FaHandshakeAngle } from "react-icons/fa6";
import { IoBagSharp, IoDocumentText } from "react-icons/io5";
import { GrServices } from "react-icons/gr";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavDropdown, Image, Navbar, Nav, Container } from 'react-bootstrap';

export default function NavBar() {
    return (
        <Navbar collapseOnSelect expand="lg">
            <link
                href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
                rel="stylesheet"
            />
            <Container>
                <Navbar.Brand>
                    <Link to="/" className='icon'>
                        <img src={Logo} alt="logo" className='logo' />
                    </Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" className="toggler-icon" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link className="nav-link">
                            <CustomLink to="/auxilios">
                                <FaHandshakeAngle size={20} className="me-3" />
                                <strong>Auxilios</strong>
                            </CustomLink>
                        </Nav.Link>
                        <Nav.Link className="nav-link">
                            <CustomLink to="/bolsas">
                                <IoBagSharp size={20} className="me-3" />
                                <strong>Bolsas</strong>
                            </CustomLink>
                        </Nav.Link>
                        <Nav.Link className="nav-link">
                            <CustomLink to="/editais">
                                <IoDocumentText size={20} className="me-3" />
                                <strong>Editais</strong>
                            </CustomLink>
                        </Nav.Link>
                        <Nav.Link className="nav-link">
                            <CustomLink to="/intranet">
                                <FaNetworkWired size={20} className="me-3" />
                                <strong>Intranet</strong>
                            </CustomLink>
                        </Nav.Link>
                        <Nav.Link className="nav-link">
                            <CustomLink to="/servicos">
                                <GrServices size={20} className="me-3" />
                                <strong>Servicos</strong>
                            </CustomLink>
                        </Nav.Link>
                    </Nav>
                    <Nav>
                        <div className='usernameImg'>
                            <strong>Savio Carvalho</strong>
                            {/* <img
                                src={AvatarSavio}
                                class="rounded-circle imageLogo"
                                height="25"
                                alt="Black and White Portrait of a Man"
                                loading="lazy"
                            /> */}
                            <NavDropdown title={<Image src={AvatarSavio} roundedCircle height="40" />} id="collapsible-nav-dropdown">
                                <NavDropdown.Item href="#myprofile">My Profile</NavDropdown.Item>
                                <NavDropdown.Item href="#setting">Setting</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#logout">Logout</NavDropdown.Item>
                            </NavDropdown>
                        </div>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}


function CustomLink({ to, children, ...props }) {
    const resolvePath = useResolvedPath(to)
    const isActive = useMatch({ path: resolvePath.pathname, end: true })

    return (
        <Link style={{ textDecoration: 'none' }} className={`${isActive ? 'link-active' : ''}`} to={to} {...props}>
            <div style={isActive && { backgroundColor: 'rgba(36, 61, 254, 0.168)', borderRadius: 20 }} className={`p-2 list-group-item`}>
                {children}
            </div>
        </Link >
    )
}
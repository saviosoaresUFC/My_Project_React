import React from 'react'
import { Link, useMatch, useResolvedPath } from 'react-router-dom'
import Logo from '../img/logo_montenegro.png'
import { Navbar, Nav, NavDropdown, Button } from 'react-bootstrap';
import './Styles/NavBarStyle.css'

export default function NavBar() {
    return (
        <Navbar expand="lg" className="nav">
            <Link to="/" className='icon'>
                <img src={Logo} alt="logo" className='logo' />
            </Link>
            <Navbar.Toggle aria-controls="basic-navbar-nav" className="custom-toggler" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    <Nav.Link href="#link" className="nav-link">
                        <CustomLink to="/auxilios">Auxilios</CustomLink>
                    </Nav.Link>
                    <Nav.Link href="#home" className="nav-link">
                        <CustomLink to="/bolsas">Bolsas</CustomLink>
                    </Nav.Link>
                    <Nav.Link href="#link" className="nav-link">
                        <CustomLink to="/editais">Editais</CustomLink>
                    </Nav.Link>
                    <Nav.Link href="#link" className="nav-link">
                        <CustomLink to="/intranet">Intranet</CustomLink>
                    </Nav.Link>
                    <Nav.Link href="#link" className="nav-link">
                        <CustomLink to="/servicos">Servicos</CustomLink>
                    </Nav.Link>
                </Nav>
                <Nav className='nav-buttons'>
                    <Button variant="secondary" className='btn-exit'>SAIR</Button>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

function CustomLink({ to, children, ...props }) {
    const resolvePath = useResolvedPath(to)
    const isActive = useMatch({ path: resolvePath.pathname, end: true })

    return (
        <li className={isActive ? 'active' : ''}>
            <Link to={to} {...props}>
                {children}
            </Link>
        </li>
    )
}

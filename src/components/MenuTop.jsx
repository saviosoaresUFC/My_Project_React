import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Navbar, Nav, NavDropdown, Button } from 'react-bootstrap';
import './Styles/MenuTopStyle.css'

const MenuTop = () => {
    return (
        <header className="App-header">
            <Navbar expand="lg" className="custom-navbar">
                <Navbar.Brand href="#home" className="brand-text">Meu Site</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" className="custom-toggler" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <Nav.Link href="#home" className="nav-link">Home</Nav.Link>
                        <Nav.Link href="#link" className="nav-link">Link</Nav.Link>
                        <NavDropdown title="Dropdown" id="basic-nav-dropdown" className="nav-dropdown">
                            <NavDropdown.Item href="#action/3.1" className="dropdown-item">Ação 1</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2" className="dropdown-item">Ação 2</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.3" className="dropdown-item">Ação 3</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Nav className='nav-buttons'>
                        <Button variant="light" className="btn-login">Login</Button>
                        <Button variant="secondary" className='btn-register'>Register</Button>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </header>
    )
}

export default MenuTop
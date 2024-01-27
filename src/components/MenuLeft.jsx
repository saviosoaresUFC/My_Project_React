import React from 'react'
import './Styles/MenuLeftStyle.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Nav, Row, Tab, Navbar, NavDropdown } from 'react-bootstrap'
import { DiGit, DiPostgresql, DiReact, DiCoffeescript } from "react-icons/di";


const MenuLeft = () => {
    return (
        <div>
            <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                <Row className='row'>
                    <Col sm={1} className="order-3 order-sm-1">
                        <Nav variant="pills" className="flex-column">
                            <Nav.Item className='nav-item'>
                                <Nav.Link className='nav-link' eventKey="first">PostgreSQL</Nav.Link>
                            </Nav.Item>
                            <Nav.Item className='nav-item'>
                                <Nav.Link className='nav-link' eventKey="second">React</Nav.Link>
                            </Nav.Item>
                            <Nav.Item className='nav-item'>
                                <Nav.Link className='nav-link' eventKey="third">GIT</Nav.Link>
                            </Nav.Item>
                            <Nav.Item className='nav-item'>
                                <Nav.Link className='nav-link' eventKey="fourth">JAVA</Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Col>
                    <Col sm={2} className="order-sm-2">
                        <Tab.Content>
                            <Tab.Pane eventKey="first">
                                <DiPostgresql className='icon' />
                            </Tab.Pane>
                            <Tab.Pane eventKey="second">
                                <DiReact className='icon' />
                            </Tab.Pane>
                            <Tab.Pane eventKey="third">
                                <DiGit className='icon' />
                            </Tab.Pane>
                            <Tab.Pane eventKey="fourth">
                                <DiCoffeescript className='icon' />
                            </Tab.Pane>
                        </Tab.Content>
                    </Col>
                </Row>
            </Tab.Container>
        </div>
    )
}

export default MenuLeft
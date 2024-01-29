import React from 'react'
import './Styles/MenuLeftStyle.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Nav, Row, Tab } from 'react-bootstrap'
import { DiGit, DiPostgresql, DiReact } from "react-icons/di";
import Lottie from 'react-lottie'


const MenuLeft = () => {
    const lottieGraph = {
        loop: true,
        autoplay: true,
        animationData: require('../lottie/LottieGraph.json'),
    };
    const lottieGraph2 = {
        loop: true,
        autoplay: true,
        animationData: require('../lottie/LottieGraph2.json'),
    };
    return (
        <div>
            <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                <Row>
                    <Col sm={1} className="order-3 order-sm-1">
                        <Nav variant="pills" className="flex-column">
                            <Nav.Item className='nav-item'>
                                <Nav.Link className='nav-link' eventKey="first">Icons</Nav.Link>
                            </Nav.Item>
                            <Nav.Item className='nav-item'>
                                <Nav.Link className='nav-link' eventKey="second">React</Nav.Link>
                            </Nav.Item>
                            <Nav.Item className='nav-item'>
                                <Nav.Link className='nav-link' eventKey="third">GIT</Nav.Link>
                            </Nav.Item>
                            <Nav.Item className='nav-item'>
                                <Nav.Link className='nav-link' eventKey="fourth">Lottie</Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Col>
                    <Col sm={2} className="order-sm-2">
                        <Tab.Content>
                            <Tab.Pane eventKey="first">
                                <DiPostgresql className='icon' />
                                <DiGit className='icon' />
                                <DiReact className='icon' />
                            </Tab.Pane>
                            <Tab.Pane eventKey="second">
                                <DiReact className='icon' />
                            </Tab.Pane>
                            <Tab.Pane eventKey="third">
                                <DiGit className='icon' />
                            </Tab.Pane>
                            <Tab.Pane eventKey="fourth">
                                {/* <DiCoffeescript className='icon' /> */}
                                <Lottie options={lottieGraph} width={150} height={150} />
                                <Lottie options={lottieGraph2} width={150} height={150} />
                            </Tab.Pane>
                        </Tab.Content>
                    </Col>
                </Row>
            </Tab.Container>
        </div>
    )
}

export default MenuLeft
import React from 'react'
import { Link, useMatch, useResolvedPath } from 'react-router-dom'
import Logo from '../img/logo_montenegro.png'
import AvatarSavio from '../img/avatarsavio.jpg'
import { Nav } from 'react-bootstrap';
import './Styles/NavBarStyle.css'
import { FaNetworkWired } from "react-icons/fa";
import { FaHandshakeAngle } from "react-icons/fa6";
import { IoBagSharp, IoDocumentText } from "react-icons/io5";
import { GrServices } from "react-icons/gr";
import "bootstrap/dist/css/bootstrap.min.css";
import { Dropdown, Collapse, initMDB } from "mdb-ui-kit";

export default function NavBar() {
    initMDB({ Dropdown, Collapse });
    return (
        <>
            <script
                type="text/javascript"
                src="https://cdnjs.cloudflare.com/ajax/libs/mdb-ui-kit/7.1.0/mdb.umd.min.js"
            ></script>
            {/* <!-- Font Awesome --> */}
            <link
                href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"
                rel="stylesheet"
            />
            {/* <!-- Google Fonts --> */}
            <link
                href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
                rel="stylesheet"
            />
            {/* <!-- MDB --> */}
            <link
                href="https://cdnjs.cloudflare.com/ajax/libs/mdb-ui-kit/7.1.0/mdb.min.css"
                rel="stylesheet"
            />
            {/* <!-- Navbar --> */}
            <nav class="navbar navbar-expand-lg navbar-light bg-body-tertiary">
                {/* <!-- Container wrapper --> */}
                <div class="container-fluid">
                    {/* <!-- Toggle button --> */}
                    <button
                        data-mdb-collapse-init
                        class="navbar-toggler"
                        type="button"
                        data-mdb-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <i class="fas fa-bars"></i>
                    </button>

                    {/* <!-- Collapsible wrapper --> */}
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        {/* <!-- Navbar brand --> */}
                        <a className="navbar-brand" href="#">
                            <Link to="/" className='icon'>
                                <img src={Logo} alt="logo" className='logo' />
                            </Link>
                        </a>
                        {/* <!-- Left links --> */}
                        <ul class="navbar-nav me-auto mb-lg-1">
                            <li class="nav-item">
                                <Nav.Link className="nav-link">
                                    <CustomLink to="/auxilios">
                                        <FaHandshakeAngle size={20} className="me-3" />
                                        <strong>Auxilios</strong>
                                    </CustomLink>
                                </Nav.Link>
                            </li>
                            <li class="nav-item">
                                <Nav.Link className="nav-link">
                                    <CustomLink to="/bolsas">
                                        <IoBagSharp size={20} className="me-3" />
                                        <strong>Bolsas</strong>
                                    </CustomLink>
                                </Nav.Link>
                            </li>
                            <li class="nav-item">
                                <Nav.Link className="nav-link">
                                    <CustomLink to="/editais">
                                        <IoDocumentText size={20} className="me-3" />
                                        <strong>Editais</strong>
                                    </CustomLink>
                                </Nav.Link>
                            </li>
                            <li class="nav-item">
                                <Nav.Link className="nav-link">
                                    <CustomLink to="/intranet">
                                        <FaNetworkWired size={20} className="me-3" />
                                        <strong>Intranet</strong>
                                    </CustomLink>
                                </Nav.Link>
                            </li>
                            <li class="nav-item">
                                <Nav.Link className="nav-link">
                                    <CustomLink to="/servicos">
                                        <GrServices size={20} className="me-3" />
                                        <strong>Servicos</strong>
                                    </CustomLink>
                                </Nav.Link>
                            </li>
                        </ul>
                        {/* <!-- Left links --> */}
                    </div>
                    {/* <!-- Collapsible wrapper --> */}

                    {/* <!-- Right elements --> */}
                    <div class="d-flex align-items-center">
                        {/* <!-- Icon --> */}
                        <a class="link-secondary me-3" href="#">
                            <i class="fas fa-shopping-cart"></i>
                        </a>

                        {/* <!-- Notifications --> */}
                        <div class="dropdown">
                            <a
                                data-mdb-dropdown-init
                                class="link-secondary me-3 dropdown-toggle hidden-arrow"
                                href="#"
                                id="navbarDropdownMenuLink"
                                role="button"
                                aria-expanded="false"
                            >
                                <i class="fas fa-bell"></i>
                                <span class="badge rounded-pill badge-notification bg-danger">1</span>
                            </a>
                            <ul
                                class="dropdown-menu dropdown-menu-end"
                                aria-labelledby="navbarDropdownMenuLink"
                            >
                                <li>
                                    <a class="dropdown-item" href="#">Some news</a>
                                </li>
                                <li>
                                    <a class="dropdown-item" href="#">Another news</a>
                                </li>
                                <li>
                                    <a class="dropdown-item" href="#">Something else here</a>
                                </li>
                            </ul>
                        </div>
                        {/* <!-- Avatar --> */}
                        <div class="dropdown">
                            <a
                                data-mdb-dropdown-init
                                class="dropdown-toggle d-flex align-items-center hidden-arrow"
                                href="#"
                                id="navbarDropdownMenuAvatar"
                                role="button"
                                aria-expanded="false"
                            >
                                <img
                                    src={AvatarSavio}
                                    class="rounded-circle"
                                    height="25"
                                    alt="Black and White Portrait of a Man"
                                    loading="lazy"
                                />
                            </a>
                            <ul
                                class="dropdown-menu dropdown-menu-end"
                                aria-labelledby="navbarDropdownMenuAvatar"
                            >
                                <li>
                                    <a class="dropdown-item" href="#">My profile</a>
                                </li>
                                <li>
                                    <a class="dropdown-item" href="#">Settings</a>
                                </li>
                                <li>
                                    <a class="dropdown-item" href="#">Logout</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    {/* <!-- Right elements --> */}
                </div>
                {/* <!-- Container wrapper --> */}
            </nav>
            {/* <!-- Navbar --> */}
        </>
    )
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

function alert() {
    return (
        <div class="alert alert-success" role="alert">
            <h4 class="alert-heading">Well done!</h4>
            <p>Aww yeah, you successfully read this important alert message. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content.</p>
            <hr />
            <p class="mb-0">Whenever you need to, be sure to use margin utilities to keep things nice and tidy.</p>
        </div>
    );
}

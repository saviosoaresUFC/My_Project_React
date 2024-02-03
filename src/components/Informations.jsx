import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import Lottie from 'react-lottie';
import {
    FaBookOpen, FaMapSigns, FaPencilAlt,
    FaCaretDown, FaCaretUp, FaTachometerAlt,
    FaChartArea, FaLock, FaChartPie,
    FaGlobe, FaBars, FaBell,
    FaFillDrip, FaGithub
} from "react-icons/fa";
import {
    FaRocket, FaWallet, FaRegHeart,
    FaRegMessage, FaLocationDot, FaChartLine,
    FaRegChartBar, FaBuilding, FaCalendar,
    FaUsers, FaMoneyBill
} from "react-icons/fa6";
import { IoTicketSharp, IoPersonSharp, IoSearchSharp } from "react-icons/io5";
import { PiCoffeeFill } from "react-icons/pi";
import { TiMessages } from "react-icons/ti";
import { VscGraphLine } from "react-icons/vsc";
import './Styles/InformationsStyle.css'

const Informations = () => {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: require('../lottie/LottieExpenseEmpty.json'),
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice',
        },
    };

    return (
        <>
            <header>
                {/* <!-- Sidebar --> */}
                <nav id="sidebarMenu" className="collapse d-lg-block sidebar collapse bg-white">
                    <div className="position-sticky">
                        <div className="list-group list-group-flush mx-3 mt-4">
                            {/* Adapte os links conforme necessário */}
                            <a href="#" className="list-group-item list-group-item-action py-2" data-mdb-ripple-init aria-current="true">
                                <FaTachometerAlt size={20} className="me-3" /><span>Main dashboard</span>
                            </a>
                            <a href="#" className="list-group-item list-group-item-action py-2 active" data-mdb-ripple-init>
                                <FaChartArea size={20} className="me-3" /><span>Charts</span>
                            </a>
                            <a href="#" className="list-group-item list-group-item-action py-2" data-mdb-ripple-init>
                                <FaLock size={20} className="me-3" /><span>Password</span>
                            </a>
                            <a href="#" className="list-group-item list-group-item-action py-2" data-mdb-ripple-init>
                                <FaChartLine size={20} className="me-3" /><span>Analytics</span>
                            </a>
                            <a href="#" className="list-group-item list-group-item-action py-2" data-mdb-ripple-init>
                                <FaChartPie size={20} className="me-3" /><span>SEO</span>
                            </a>
                            <a href="#" className="list-group-item list-group-item-action py-2" data-mdb-ripple-init>
                                <FaRegChartBar size={20} className="me-3" /><span>Marketing</span>
                            </a>
                            <a href="#" className="list-group-item list-group-item-action py-2" data-mdb-ripple-init>
                                <FaGlobe size={20} className="me-3" /><span>International</span>
                            </a>
                            <a href="#" className="list-group-item list-group-item-action py-2" data-mdb-ripple-init>
                                <FaBuilding size={20} className="me-3" /><span>Partners</span>
                            </a>
                            <a href="#" className="list-group-item list-group-item-action py-2" data-mdb-ripple-init>
                                <FaCalendar size={20} className="me-3" /><span>Calendar</span>
                            </a>
                            <a href="#" className="list-group-item list-group-item-action py-2" data-mdb-ripple-init>
                                <FaUsers size={20} className="me-3" /><span>Users</span>
                            </a>
                            <a href="#" className="list-group-item list-group-item-action py-2" data-mdb-ripple-init>
                                <FaMoneyBill size={20} className="me-3" /><span>Sales</span>
                            </a>
                        </div>
                    </div>
                </nav>
                {/* <!-- Sidebar --> */}

                {/* <!-- Navbar --> */}
                <nav id="main-navbar" className="navbar navbar-expand-lg navbar-light bg-white fixed-top">
                    {/* <!-- Container wrapper --> */}
                    <div className="container-fluid">
                        {/* <!-- Toggle button --> */}
                        <button className="navbar-toggler" type="button" data-mdb-collapse-init data-mdb-target="#sidebarMenu"
                            aria-controls="sidebarMenu" aria-expanded="false" aria-label="Toggle navigation">
                            <FaBars size={20} />
                        </button>

                        {/* <!-- Brand --> */}
                        <a className="navbar-brand" href="#">
                            <img src="https://mdbootstrap.com/img/logo/mdb-transaprent-noshadows.png" height="25" alt="" loading="lazy" />
                        </a>
                        {/* <!-- Search form --> */}
                        <form className="d-none d-md-flex input-group w-auto my-auto">
                            <input autocomplete="off" type="search" className="form-control rounded"
                                placeholder='Search (ctrl + "/" to focus)' style={{ minWidth: 225 }} />
                            <span className="input-group-text border-0"><IoSearchSharp size={25} /></span>
                        </form>

                        {/* <!-- Right links --> */}
                        <ul className="navbar-nav ms-auto d-flex flex-row">
                            {/* <!-- Notification dropdown --> */}
                            <li className="nav-item dropdown">
                                <a className="nav-link me-3 me-lg-0 dropdown-toggle hidden-arrow" href="#" id="navbarDropdownMenuLink"
                                    role="button" data-mdb-dropdown-init aria-expanded="false">
                                    <FaBell size={18} />
                                    <span className="badge rounded-pill badge-notification bg-danger">1</span>
                                </a>
                                <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdownMenuLink">
                                    <li><a className="dropdown-item" href="#">Some news</a></li>
                                    <li><a className="dropdown-item" href="#">Another news</a></li>
                                    <li>
                                        <a className="dropdown-item" href="#">Something else</a>
                                    </li>
                                </ul>
                            </li>

                            {/* <!-- Icon --> */}
                            <li className="nav-item">
                                <a className="nav-link me-3 me-lg-0" href="#">
                                    <FaFillDrip size={18} />
                                    <i className="fas fa-fill-drip"></i>
                                </a>
                            </li>
                            {/* <!-- Icon --> */}
                            <li className="nav-item me-3 me-lg-0">
                                <a className="nav-link" href="#">
                                    <FaGithub size={18} />
                                </a>
                            </li>

                            {/* <!-- Icon dropdown --> */}
                            <li className="nav-item dropdown">
                                <a className="nav-link me-3 me-lg-0 dropdown-toggle hidden-arrow" href="#" id="navbarDropdown" role="button"
                                    data-mdb-dropdown-init aria-expanded="false">
                                    <i className="united kingdom flag m-0"></i>
                                </a>
                                <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
                                    <li>
                                        <a className="dropdown-item" href="#"><i className="united kingdom flag"></i>English
                                            <i className="fa fa-check text-success ms-2"></i></a>
                                    </li>
                                    <li>
                                        <hr className="dropdown-divider" />
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="#"><i className="poland flag"></i>Polski</a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="#"><i className="china flag"></i>中文</a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="#"><i className="japan flag"></i>日本語</a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="#"><i className="germany flag"></i>Deutsch</a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="#"><i className="france flag"></i>Français</a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="#"><i className="spain flag"></i>Español</a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="#"><i className="russia flag"></i>Русский</a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="#"><i className="portugal flag"></i>Português</a>
                                    </li>
                                </ul>
                            </li>

                            {/* <!-- Avatar --> */}
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle hidden-arrow d-flex align-items-center" href="#"
                                    id="navbarDropdownMenuLink" role="button" data-mdb-dropdown-init aria-expanded="false">
                                    <img src="https://mdbootstrap.com/img/Photos/Avatars/img (31).jpg" className="rounded-circle" height="22"
                                        alt="" loading="lazy" />
                                </a>
                                <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdownMenuLink">
                                    <li><a className="dropdown-item" href="#">My profile</a></li>
                                    <li><a className="dropdown-item" href="#">Settings</a></li>
                                    <li><a className="dropdown-item" href="#">Logout</a></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                    {/* <!-- Container wrapper --> */}
                </nav>
                {/* <!-- Navbar --> */}
            </header>


            <main style={{ marginTop: 58 }}>
                <div className="container pt-4">
                    {/* <!-- Section: Main chart --> */}
                    <section classNameName="mb-4">
                        <div className="card">
                            <div className="card-header py-3">
                                <h5 className="mb-0 text-center"><strong>Sales</strong></h5>
                            </div>
                            <div className="card-body">
                                <Lottie options={defaultOptions} height={400} width={400} />
                            </div>
                        </div>
                    </section>
                    {/* <!-- Section: Main chart --> */}

                    {/* <!--Section: Sales Performance KPIs--> */}
                    <section className="mb-4">
                        <div className="card">
                            <div className="card-header text-center py-3">
                                <h5 className="mb-0 text-center">
                                    <strong>Sales Performance KPIs</strong>
                                </h5>
                            </div>
                            <div className="card-body">
                                <div className="table-responsive">
                                    <table className="table table-hover text-nowrap">
                                        <thead>
                                            <tr>
                                                <th scope="col"></th>
                                                <th scope="col">Product Detail Views</th>
                                                <th scope="col">Unique Purchases</th>
                                                <th scope="col">Quantity</th>
                                                <th scope="col">Product Revenue</th>
                                                <th scope="col">Avg. Price</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <th scope="row">Value</th>
                                                <td>18,492</td>
                                                <td>228</td>
                                                <td>350</td>
                                                <td>$4,787.64</td>
                                                <td>$13.68</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">Percentage change</th>
                                                <td>
                                                    <span className="text-danger">
                                                        <FaCaretDown size={14} className="text-danger me-1" /><span>-48.8%</span>
                                                    </span>
                                                </td>
                                                <td>
                                                    <span className="text-success">
                                                        <FaCaretUp size={14} className="text-success me-1" /><span>14.0%</span>
                                                    </span>
                                                </td>
                                                <td>
                                                    <span className="text-success">
                                                        <FaCaretUp size={14} className="text-success me-1" /><span>46.4%</span>
                                                    </span>
                                                </td>
                                                <td>
                                                    <span className="text-success">
                                                        <FaCaretUp size={14} className="text-success me-1" /><span>29.6%</span>
                                                    </span>
                                                </td>
                                                <td>
                                                    <span className="text-danger">
                                                        <FaCaretDown size={14} className="text-danger me-1" /><span>-11.5%</span>
                                                    </span>
                                                </td>
                                            </tr>
                                            <tr>
                                                <th scope="row">Absolute change</th>
                                                <td>
                                                    <span className="text-danger">
                                                        <FaCaretDown size={14} className="text-danger me-1" /><span>-17,654</span>
                                                    </span>
                                                </td>
                                                <td>
                                                    <span className="text-success">
                                                        <FaCaretUp size={14} className="text-success me-1" /><span>28</span>
                                                    </span>
                                                </td>
                                                <td>
                                                    <span className="text-success">
                                                        <FaCaretUp size={14} className="text-success me-1" /><span>111</span>
                                                    </span>
                                                </td>
                                                <td>
                                                    <span className="text-success">
                                                        <FaCaretUp size={14} className="text-success me-1" /><span>$1,092.72</span>
                                                    </span>
                                                </td>
                                                <td>
                                                    <span className="text-danger">
                                                        <FaCaretDown size={14} className="text-danger me-1" /><span>$-1.78</span>
                                                    </span>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* <!--Section: Sales Performance KPIs--> */}

                    {/* <!--Section: Minimal statistics cards--> */}
                    <section>
                        <div className="row">
                            <div className="col-xl-3 col-sm-6 col-12 mb-4">
                                <div className="card">
                                    <div className="card-body">
                                        <div className="d-flex justify-content-between px-md-1">
                                            <div className="align-self-center">
                                                <FaPencilAlt size={40} className="text-info fa-3x" />
                                            </div>
                                            <div className="text-end">
                                                <h3>278</h3>
                                                <p className="mb-0">New Posts</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-sm-6 col-12 mb-4">
                                <div className="card">
                                    <div className="card-body">
                                        <div className="d-flex justify-content-between px-md-1">
                                            <div className="align-self-center">
                                                <FaRegMessage size={40} className="text-warning fa-3x" />
                                            </div>
                                            <div className="text-end">
                                                <h3>156</h3>
                                                <p className="mb-0">New Comments</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-sm-6 col-12 mb-4">
                                <div className="card">
                                    <div className="card-body">
                                        <div className="d-flex justify-content-between px-md-1">
                                            <div className="align-self-center">
                                                <VscGraphLine size={40} className="text-warning fa-3x" />
                                            </div>
                                            <div className="text-end">
                                                <h3>64.89 %</h3>
                                                <p className="mb-0">Bounce Rate</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-sm-6 col-12 mb-4">
                                <div className="card">
                                    <div className="card-body">
                                        <div className="d-flex justify-content-between px-md-1">
                                            <div className="align-self-center">
                                                <FaLocationDot size={40} className="text-danger fa-3x" />
                                            </div>
                                            <div className="text-end">
                                                <h3>423</h3>
                                                <p className="mb-0">Total Visits</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-xl-3 col-sm-6 col-12 mb-4">
                                <div className="card">
                                    <div className="card-body">
                                        <div className="d-flex justify-content-between px-md-1">
                                            <div>
                                                <h3 className="text-danger">278</h3>
                                                <p className="mb-0">New Projects</p>
                                            </div>
                                            <div className="align-self-center">
                                                <FaRocket size={50} className="text-danger fa-3x" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-sm-6 col-12 mb-4">
                                <div className="card">
                                    <div className="card-body">
                                        <div className="d-flex justify-content-between px-md-1">
                                            <div>
                                                <h3 className="text-success">156</h3>
                                                <p className="mb-0">New Clients</p>
                                            </div>
                                            <div className="align-self-center">
                                                <IoPersonSharp size={50} className="text-success fa-3x" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-sm-6 col-12 mb-4">
                                <div className="card">
                                    <div className="card-body">
                                        <div className="d-flex justify-content-between px-md-1">
                                            <div>
                                                <h3 className="text-warning">64.89 %</h3>
                                                <p className="mb-0">Conversion Rate</p>
                                            </div>
                                            <div className="align-self-center">
                                                <VscGraphLine size={50} className="text-warning fa-3x" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-sm-6 col-12 mb-4">
                                <div className="card">
                                    <div className="card-body">
                                        <div className="d-flex justify-content-between px-md-1">
                                            <div>
                                                <h3 className="text-info">423</h3>
                                                <p className="mb-0">Support Tickets</p>
                                            </div>
                                            <div className="align-self-center">
                                                <IoTicketSharp size={50} className="text-info fa-3x" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-xl-3 col-sm-6 col-12 mb-4">
                                <div className="card">
                                    <div className="card-body">
                                        <div className="d-flex justify-content-between px-md-1">
                                            <div>
                                                <h3 className="text-info">278</h3>
                                                <p className="mb-0">New Posts</p>
                                            </div>
                                            <div className="align-self-center">
                                                <FaBookOpen size={50} className="text-info fa-3x" />
                                            </div>
                                        </div>
                                        <div className="px-md-1">
                                            <div className="progress mt-3 mb-1 rounded" style={{ height: 7 }}>
                                                <div className="progress-bar bg-info" role="progressbar" style={{ width: '80%' }} aria-valuenow="80"
                                                    aria-valuemin="0" aria-valuemax="100"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-sm-6 col-12 mb-4">
                                <div className="card">
                                    <div className="card-body">
                                        <div className="d-flex justify-content-between px-md-1">
                                            <div>
                                                <h3 className="text-warning">156</h3>
                                                <p className="mb-0">New Comments</p>
                                            </div>
                                            <div className="align-self-center">
                                                <TiMessages size={50} className="text-warning fa-3x" />
                                            </div>
                                        </div>
                                        <div className="px-md-1">
                                            <div className="progress mt-3 mb-1 rounded" style={{ height: 7 }}>
                                                <div className="progress-bar bg-warning" role="progressbar" style={{ width: '35%' }} aria-valuenow="35"
                                                    aria-valuemin="0" aria-valuemax="100"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-sm-6 col-12 mb-4">
                                <div className="card">
                                    <div className="card-body">
                                        <div className="d-flex justify-content-between px-md-1">
                                            <div>
                                                <h3 className="text-success">64.89 %</h3>
                                                <p className="mb-0">Bounce Rate</p>
                                            </div>
                                            <div className="align-self-center">
                                                <PiCoffeeFill size={50} className="text-success fa-3x" />
                                            </div>
                                        </div>
                                        <div className="px-md-1">
                                            <div className="progress mt-3 mb-1 rounded" style={{ height: 7 }}>
                                                <div className="progress-bar bg-success" role="progressbar" style={{ width: '60%' }} aria-valuenow="60"
                                                    aria-valuemin="0" aria-valuemax="100"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-sm-6 col-12 mb-4">
                                <div className="card">
                                    <div className="card-body">
                                        <div className="d-flex justify-content-between px-md-1">
                                            <div>
                                                <h3 className="text-danger">423</h3>
                                                <p className="mb-0">Total Visits</p>
                                            </div>
                                            <div className="align-self-center">
                                                <FaMapSigns size={50} className="text-danger fa-3x" />
                                            </div>
                                        </div>
                                        <div className="px-md-1">
                                            <div className="progress mt-3 mb-1 rounded" style={{ height: 7 }}>
                                                <div className="progress-bar bg-danger" role="progressbar" style={{ width: '40%' }} aria-valuenow="40"
                                                    aria-valuemin="0" aria-valuemax="100"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* <!--Section: Minimal statistics cards--> */}

                    {/* <!--Section: Statistics with subtitles--> */}
                    <section>
                        <div className="row">
                            <div className="col-xl-6 col-md-12 mb-4">
                                <div className="card">
                                    <div className="card-body">
                                        <div className="d-flex justify-content-between p-md-1">
                                            <div className="d-flex flex-row">
                                                <div className="align-self-center">
                                                    <FaPencilAlt size={40} className="text-info fa-3x me-4" />
                                                </div>
                                                <div>
                                                    <h4>Total Posts</h4>
                                                    <p className="mb-0">Monthly blog posts</p>
                                                </div>
                                            </div>
                                            <div className="align-self-center">
                                                <h2 className="h1 mb-0">18,000</h2>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-6 col-md-12 mb-4">
                                <div className="card">
                                    <div className="card-body">
                                        <div className="d-flex justify-content-between p-md-1">
                                            <div className="d-flex flex-row">
                                                <div className="align-self-center">
                                                    <FaRegMessage size={40} className="text-warning fa-3x me-4" />
                                                </div>
                                                <div>
                                                    <h4>Total Comments</h4>
                                                    <p className="mb-0">Monthly blog posts</p>
                                                </div>
                                            </div>
                                            <div className="align-self-center">
                                                <h2 className="h1 mb-0">84,695</h2>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-xl-6 col-md-12 mb-4">
                                <div className="card">
                                    <div className="card-body">
                                        <div className="d-flex justify-content-between p-md-1">
                                            <div className="d-flex flex-row">
                                                <div className="align-self-center">
                                                    <h2 className="h1 mb-0 me-4">$76,456.00</h2>
                                                </div>
                                                <div>
                                                    <h4>Total Sales</h4>
                                                    <p className="mb-0">Monthly Sales Amount</p>
                                                </div>
                                            </div>
                                            <div className="align-self-center">
                                                <FaRegHeart size={40} className="text-danger fa-3x" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-6 col-md-12 mb-4">
                                <div className="card">
                                    <div className="card-body">
                                        <div className="d-flex justify-content-between p-md-1">
                                            <div className="d-flex flex-row">
                                                <div className="align-self-center">
                                                    <h2 className="h1 mb-0 me-4">$36,000.00</h2>
                                                </div>
                                                <div>
                                                    <h4>Total Cost</h4>
                                                    <p className="mb-0">Monthly Cost</p>
                                                </div>
                                            </div>
                                            <div className="align-self-center">
                                                <FaWallet size={40} className="text-success fa-3x" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* <!--Section: Statistics with subtitles--> */}
                </div>
            </main>
        </>

    )
}

export default Informations
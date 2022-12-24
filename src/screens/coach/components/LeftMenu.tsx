import React, { useContext, useState, useEffect } from 'react';
import Logo from '../../../assets/img/logo-d.svg';
import Trending from '../../../assets/img/d-menu/trending_up.svg';
import Person from '../../../assets/img/d-menu/person.svg';
import ChatBubble from '../../../assets/img/d-menu/chat_bubble_outline.svg';
import Calendar from '../../../assets/img/d-menu/calendar_today.png';
import FitnessCenter from '../../../assets/img/d-menu/fitness_center.svg';
import Computer from '../../../assets/img/d-menu/computer.svg';
import StoreFront from '../../../assets/img/d-menu/storefront.svg';
import Settings from '../Settings';
import { Link, useLocation } from 'react-router-dom';

function LeftMenu() {
    const location = useLocation();
    const [clocation, setCLocation] = useState('');

    useEffect(() => {
        setCLocation(location.pathname)
    }, [location.pathname]);

    return (
        <nav className="navbar navbar-dark align-items-start d-flex flex-column justify-content-between align-items-center sidebar sidebar-dark accordion bg-white-primary shadow-n p-0">
            <div className="container-fluid d-flex flex-column p-0 vh-100">
                <div><Link to={"#"} className="navbar-brand d-flex justify-content-center align-items-center sidebar-brand m-0">
                    <div className="sidebar-brand-icon rotate-n-15"><img src={Logo} /></div>
                    <div className="sidebar-brand-text mx-3"><span className="text-black" style={{ fontSize: "21px", fontWeight: "900" }}>Kalliston</span></div>
                </Link>
                    <hr className="sidebar-divider my-0" />
                    <ul className="navbar-nav text-light" id="accordionSidebar">
                        <li className="nav-item"><Link to={"/coach/dashboard"} className={clocation == '/coach/dashboard' ? 'nav-link active': 'nav-link'}><img src={Trending} /><span className="f-color ms-md-4 l-size">Sales</span></Link></li>
                        <li className="nav-item"><Link to={"/coach/clients"} className={clocation == '/coach/clients' ? 'nav-link active': 'nav-link'}><img src={Person} /><span className="f-color ms-md-4 l-size">Clients</span></Link></li>
                        <li className="nav-item"><Link to={"/coach/chat"} className={clocation == '/coach/chat' ? 'nav-link active': 'nav-link'}><img src={ChatBubble} /><span className="f-color ms-md-4 l-size">Chat</span></Link></li>
                        <li className="nav-item"><Link to={"/coach/package"} className={clocation == '/coach/package' ? 'nav-link active': 'nav-link'}><img src={StoreFront} /><span className="f-color ms-md-4 l-size">Packages</span></Link></li>
                        {/* <li className="nav-item"><Link to={"/coach/schedule"} className="nav-link"><img src={Calendar} /><span className="f-color ms-md-4 l-size">Schedule</span></Link></li> */}
                        {/* <li className="nav-item"><Link to={"/coach/fitness"} className="nav-link"><img src={FitnessCenter} /><span className="f-color ms-md-4 l-size">Fitness Programs</span></Link></li> */}
                    </ul>
                </div>
                <ul className="navbar-nav text-light" id="accordionSidebar-1">
                <li className="nav-item"><Link to={"/coach/settings"} className={clocation == '/coach/settings' ? 'nav-link active': 'nav-link'}><i className="fas fa-cogs fa-fw me-2 text-black" style={{fontSize: "20px"}}></i><span className="f-color ms-md-4 l-size">Settings</span></Link></li>
                </ul>
            </div>
        </nav>
    )
}

export default LeftMenu;
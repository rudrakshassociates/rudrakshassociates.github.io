import React from "react"
import {Link} from "react-router-dom"
import "./styles/Navwhite.css"
import NavDropdown from "./NavDropdown";
import {FiMenu} from "react-icons/fi"

import { MdLaptopWindows } from "react-icons/md";
import { FaTwitter,FaLinkedinIn} from "react-icons/fa";

export default function WhiteBGNav(){
    function Linkedin() {
        window.location.href = 'https://linkedin.in';
        return null;
    }
    function Twitter() {
        window.location.href = 'https://twitter.com';
        return null;
    }
    const [show,setshow]=React.useState(false);
    const changecolor=()=>{
        if(window.scrollY>200 ||(window.screenY!=0 &&window.screenX)){
            setshow(true)
        }else{
            setshow(false)
        }
    }
    function scrolltoServices(){
        if(window.location.pathname=="/"){
            window.scrollTo(0,990);
        }
    }
    const[menu,setmenubar]=React.useState(false);
    function shownavbar(){
        setmenubar(!menu);
    }

    
    window.addEventListener('scroll', changecolor);
    return (
        <div>
            <div className={show?"N-Navbar-Container":"N-Nav"}>
                <h1><Link to="/" className={show?"N-home-link-nav":"N-home-link"}><b>RUDRAKSH</b> ASSOCIATES</Link></h1>
                <div className={show?"N-Navbar-List-nav":"N-Navbar-List"}>
                    <h1 className={show?"menu-nav":"M-menu"} onClick={shownavbar}><FiMenu/></h1>
                    <div className={menu?"menubar-nav":"menunot-nav"}>
                        <ul>
                            <li onClick={scrolltoServices} className="navbar-link">Services</li>
                            <li><Link to="/works" className="navbar-link">Our Work</Link></li>    
                            <li><Link to="/contactus" className="navbar-link">Contact</Link></li>
                            <li><Link to="/about" className="navbar-link">About</Link></li>
                            <li onClick={Linkedin} className="navbar-link"><FaLinkedinIn/></li>
                            <li onClick={Twitter} className="navbar-link"><FaTwitter/></li>
                        </ul>
                    </div>
                    <ul className="links">
                        <li onClick={scrolltoServices} className={show?"N-navbar-link-nav":"N-navbar-link"}>Services</li>
                        <li><Link to="/works" className={show?"N-navbar-link-nav":"N-navbar-link"}>Our Work</Link></li>
                        
                        <li><Link to="/contactus" className={show?"N-navbar-link-nav":"N-navbar-link"}>Contact</Link></li>
                        <li><Link to="/about" className={show?"N-navbar-link-nav":"N-navbar-link"}><NavDropdown/></Link></li>
                    </ul>
                    <ul className={show?"socials-nav":"N-socials"}>
                        <li onClick={Linkedin}><FaLinkedinIn/></li>
                        <li onClick={Twitter}><FaTwitter/></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
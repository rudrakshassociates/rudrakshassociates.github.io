import React from "react"
import {Link} from "react-router-dom"
import "./styles/Navwhite.css"
import NavDropdown from "./NavDropdown";
import {AiOutlineClose} from "react-icons/ai";

import {FiMenu} from "react-icons/fi"
import Menubar from "./Menubar";

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
                    <h1 className="menu-bar" onClick={shownavbar}>{menu?<AiOutlineClose/>:<FiMenu/>}</h1>
                    
                    {/* <ul>
                        <li onClick={scrolltoServices} className="navbar-link">Services</li>
                        <li><Link to="/works" className="navbar-link">Our Work</Link></li>    
                        <li><Link to="/contactus" className="navbar-link">Contact</Link></li>
                        <li><Link to="/about" className="navbar-link">About</Link></li>
                        <li onClick={Linkedin} className="navbar-link"><FaLinkedinIn/></li>
                        <li onClick={Twitter} className="navbar-link"><FaTwitter/></li>
                    </ul>
                </div>
                <ul className="links">
                    <li onClick={scrolltoServices} className={show?"navbar-link-nav":"navbar-link"}>Services</li>
                    <li><Link to="/works" className={show?"navbar-link-nav":"navbar-link"}>Our Work</Link></li>
                    
                    <li><Link to="/contactus" className={show?"navbar-link-nav":"navbar-link"}>Contact</Link></li>
                    <li><Link to="/about" className={show?"navbar-link-nav":"navbar-link"}><Dropdown/></Link></li>
                </ul>
                <ul className={show?"socials":"N-socials-not-nav"}>
                    <li onClick={Linkedin}><FaLinkedinIn/></li>
                    <li onClick={Twitter}><FaTwitter/></li>
                </ul> */}
                </div>
            </div>
        <div className={menu?"menubar-nav":"menunot-nav"}>
            <Menubar
            menu={[menu,setmenubar]}/>
        </div>
    </div>
    )
}
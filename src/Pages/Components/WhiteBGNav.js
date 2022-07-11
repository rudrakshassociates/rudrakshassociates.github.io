import React from "react"
import {Link} from "react-router-dom"
import "./styles/Navwhite.css"
import NavDropdown from "./NavDropdown";
import { MdLaptopWindows } from "react-icons/md";
export default function WhiteBGNav(){
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
    
    window.addEventListener('scroll', changecolor);
    return (
        <div>
            <div className={show?"N-Navbar-Container":"N-Nav"}>
                <h1><Link to="/" className={show?"N-home-link-nav":"N-home-link"}><b>RUDRAKSH</b> ASSOCIATES</Link></h1>
                <div className={show?"N-Navbar-List-nav":"N-Navbar-List"}>
                    <ul className="links">
                        <li onClick={scrolltoServices} className={show?"N-navbar-link-nav":"N-navbar-link"}>Services</li>
                        <li><Link to="/works" className={show?"N-navbar-link-nav":"N-navbar-link"}>Our Work</Link></li>
                        
                        <li><Link to="/contactus" className={show?"N-navbar-link-nav":"N-navbar-link"}>Contact</Link></li>
                        <li><Link to="/about" className={show?"N-navbar-link-nav":"N-navbar-link"}><NavDropdown/></Link></li>
                    </ul>
                    <ul className="N-socials">
                        <li>in</li>
                        <li>t</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
import React from "react"
import {Link} from "react-router-dom"
import "./styles/Navbar.css"
import Dropdown from "./Dropdown";
import { MdLaptopWindows } from "react-icons/md";
export default function Navbar(){
    const [show,setshow]=React.useState(false);
    const [about,setabout]=React.useState(false);
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
    const changetextcolor=()=>{
        if(window.location.pathname=="/about"){
            setabout(true);
        }else{
            setabout(false);
        }
    }
    window.addEventListener('load',changetextcolor);
    window.addEventListener('scroll', changecolor);
    return (
        <div>
            <div className={show?"Navbar-container":"Nav"}>
                <h1><Link to="/" className={show?"home-link-nav":"home-link"}><b>RUDRAKSH</b> ASSOCIATES</Link></h1>
                <div className={show?"Navbar-list-nav":"Navbar-list"}>
                    <ul className="links">
                        <li onClick={scrolltoServices} className={show?"navbar-link-nav":"navbar-link"}>Services</li>
                        <li><Link to="/works" className={show?"navbar-link-nav":"navbar-link"}>Our Work</Link></li>
                        
                        <li><Link to="/contactus" className={show?"navbar-link-nav":"navbar-link"}>Contact</Link></li>
                        <li><Link to="/about" className={show?"navbar-link-nav":"navbar-link"}><Dropdown/></Link></li>
                    </ul>
                    <ul className="socials">
                        <li>in</li>
                        <li>t</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
import React from "react"
import {Link} from "react-router-dom"
import "./styles/Navbar.css"
import Dropdown from "./Dropdown";
export default function Navbar(){
    const [show,setshow]=React.useState(false);
    const changecolor=()=>{
        if(window.scrollY>400 ||(window.screenY!=0 &&window.screenX)){
            setshow(true)
        }else{
            setshow(false)
        }
    }
    window.addEventListener('scroll', changecolor);
    return (
        <div>
            <div className={show?"about-Navbar":"Nav"}>
                <h1><Link to="/" className="home-link"><b>RUDRAKSH</b> ASSOCIATES</Link></h1>
                <div className="Navbar-list">
                    <ul className="links">
                        <li><Link to="/" className="navbar-link">Services</Link></li>
                        <li><Link to="/works" className="navbar-link">Our Work</Link></li>
                        <li><Link to="/contactus" className="navbar-link">Contact</Link></li>
                        {/* <li><Link to="/about" className="navbar-link">About</Link></li> */}
                        <li><Link to="/about" className="navbar-link"><Dropdown/></Link></li>
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
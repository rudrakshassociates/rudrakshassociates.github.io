import React from "react"
import {Link,useNavigate} from "react-router-dom"
import "./styles/Navbar.css"
import Dropdown from "./Dropdown";
import { MdLaptopWindows} from "react-icons/md";
import { FaTwitter,FaLinkedinIn} from "react-icons/fa";
import {FiMenu} from "react-icons/fi"
import Menubar from "./Menubar";
export default function Navbar(){
    function Linkedin() {
        window.location.href = 'https://linkedin.in';
        return null;
    }
    function Twitter() {
        window.location.href = 'https://twitter.com';
        return null;
    }
    const [show,setshow]=React.useState(false);
    const [about,setabout]=React.useState(false);
    const navigate=useNavigate();
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
        }else{
            navigate({
                pathname:'/'
            })
        }
    }
    const changetextcolor=()=>{
        if(window.location.pathname=="/about"){
            setabout(true);
        }else{
            setabout(false);
        }
    }
    
    const[menu,setmenubar]=React.useState(false);
    function shownavbar(){
        setmenubar(!menu);
    }

    

    window.addEventListener('scroll', changecolor);
    return (
        <div>
            <div className={show?"Navbar-container":"Nav"}>
                <h1><Link to="/" className={show?"home-link-nav":"home-link"}><b>RUDRAKSH</b> ASSOCIATES</Link></h1>
                <div className={show?"Navbar-list-nav":"Navbar-list"}>
                    <h1 className={show?"menu-nav":"menu"} onClick={shownavbar}><FiMenu/></h1>
                    <div className={menu?"menubar-nav":"menunot-nav"}>
                        <ul>
                            {console.log(menu)}
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
                    <ul className={show?"socials":"N-socials"}>
                        <li onClick={Linkedin}><FaLinkedinIn/></li>
                        <li onClick={Twitter}><FaTwitter/></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
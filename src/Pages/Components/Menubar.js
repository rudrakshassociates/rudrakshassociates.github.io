import React from "react"
import {Link,useNavigate} from "react-router-dom"
import "./styles/menu.css"
import {FiMenu} from "react-icons/fi"
import { FaTwitter,FaLinkedinIn} from "react-icons/fa";

export default function Menubar(){
    const [show,setshow]=React.useState(false);
    const[menubar,setmenubar]=React.useState(false);
    function scrolltoValues(){
        if(window.location.pathname=="/about"){
            window.scrollTo(0,850);
        }
    }
    function scrolltoInsights(){
        if(window.location.pathname=="/about"){
            window.scrollTo(0,2700);
        }
    }
    function scrolltoCarrer(){
        if(window.location.pathname=="/about"){
            window.scrollTo(0,2100);
        }
    }
    const changecolor=()=>{
        if(window.scrollY>200 ||(window.screenY!=0 &&window.screenX)){
            setshow(true)
        }else{
            setshow(false)
        }
    }
    function scrolltoStory(){
        if(window.location.pathname=="/about"){
            window.scrollTo(0,400);
        }
    }
    function scrolltoServices(){
        if(window.location.pathname=="/"){
            window.scrollTo(0,890);
            setshow(false);
        }
    }
    function menu(){
        setmenubar(!menubar);
    }
    window.addEventListener('scroll', changecolor);
    return (
        <div className="dropdown">
            <ul className="dropdown-link">
                <hr></hr>
                <li><FaTwitter/></li>
                <li><FaLinkedinIn/></li>
            </ul>
            <ul className="dropdown-cont">
                    <li onClick={scrolltoServices}>Services <p className="cont-desc">Here is the answer</p></li>
                    <li><Link to="/works" className="navbar-link">Our Work</Link> <p className="cont-desc">Here is the answer</p></li>
                    <li><Link to="/contactus" className="navbar-link">Contact</Link><p className="cont-desc">Here is the answer</p></li>
                    <li><Link to="/about" className="navbar-link">About Us</Link><p className="cont-desc">Here is the answer</p></li>
            </ul>

        </div>
    )
}
import React from "react"
import {Link} from "react-router-dom"
import {AiOutlineDownCircle} from 'react-icons/ai'
import Navbar from "./Components/Navbar.js"
import "./Components/styles/home.css"
import Footer from "./Components/Footer.js"
import Gallery from "./Components/Gallery.js"
import News from "./Components/News.js"
import Services from "./Components/services.js"
import { motion } from "framer-motion";

export default function Home(){
    /*window.onload=()=>{
        const transition_el=document.querySelector(".transition");
        setTimeout(()=>{
          transition_el.classList.remove('is-active');
        },500)
    }*/
    document.title="Rudraksh Associates | Home";

    function downslide(){
        window.scrollTo(0,890);
    }
    
    return(
        <div onLoad={window.scrollTo(0,0)}>
            <div className="main-body">
                <motion.div 
                    initial={{ 
                        position: "fixed",
                        top: 0,
                        width: "100%",
                        left: 0,
                        right: 0,
                        bottom: 0,
                        zIndex: 105,
                        backgroundColor:"#892be2",
                        transitionDelay:"3s",
                        transitionDuration:"0.5s"
                        }}
                    transition={{ delay: 3,duration:1 }}
                    animate={{left:"-100%"}}
                    exit={{
                        position: "fixed",
                        top: 0,
                        width: "100%",
                        left: 0,
                        right: 0,
                        bottom: 0,
                        zIndex: 105,
                        
                    }}
                ></motion.div>

                </div>
                <Navbar/>
                <div className="Home-bg">
                    <div>
                        <div className="Title">
                            <h1><b>RUDRAKSH</b> ASSOCIATES</h1>
                            <h2>Govt. Registered Composite Contractors</h2>
                        </div>
                        <div className="Title-info">
                            <h1>SPECIALISE IN:</h1>
                            <p>Internal Electrification | Erection and maintenance of D.G. Set | Rising Mains | Bust Duct | Servc Stabilizer | H.T./L.T. Panel | Fire Fighting & Fire Alarm System Etc.</p>
                        </div>
                        <div className="buttons">
                        <Link to="/works"><button className="GetinTouch">See Our Work</button></Link>
                        <Link to="/contactus"><button className="GetinTouch">Get in Touch</button></Link>
                        </div>
                        {/* <img src="Images/banner_foreground.png"/> */}
                        <div className="downbutton" onClick={downslide}>
                            <AiOutlineDownCircle/>
                        </div>
                    </div>
                </div>
                <Services/>
            
                {/* <CEO/> */}
                <div className="Image-Banner-1">
                    {/* <img src="Images/contact-head.jpeg"/> */}
                    <h3 className="banner">Our purpose is to improve people’s lives through building the facilities and infrastructure that communities need</h3>
                </div>
                <News/>
                <Gallery/>
                <div className="Image-Banner-2">
                    {/* <img src="Images/banner1.jpg"/> */}
                    <h3 className="banner">Our purpose is to improve people’s lives through building the facilities and infrastructure that communities need</h3>
                </div>
            <div className="footer">
                <Footer/>
            </div>
            
        </div>
    )
}
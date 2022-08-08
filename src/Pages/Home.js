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
import Loader from "./Components/Loader.js"

export default function Home(){
    window.addEventListener('scroll',loop);

    function loop(){
        let ele=document.querySelectorAll('.reveal');
        for(let i=0;i<ele.length;i++){
            let windowheight=window.innerHeight;
            let revealtop=ele[i].getBoundingClientRect().top;
            let revealpoint=150;
            if(revealtop<windowheight - revealpoint){
                ele[i].classList.add('active');

            }else{
                ele[i].classList.remove('active')
            }
        }
    }
    document.title="Rudraksh Associates | Home";

    function downslide(){
        window.scrollTo(0,890);
    }
    
    return(
        <div onLoad={window.scrollTo(0,0)}>
            <div className="main">
                <motion.div className="trans-enter"
                    initial={{ y:0}}
                    animate={{y:"-120vh"}}
                    transition={{duration:1,delay:1 }}
                ><Loader/></motion.div>
                <motion.div className="trans-exit"
                    initial={{x:"-100vw"}}
                    exit={{ x:0}}
                    animate={{x:"-100vw"}}
                    transition={{duration:0.5}}
                ><Loader/></motion.div>

                </div>
                <Navbar/>
                <div className="Home-bg">
                    <div>
                        <motion.div className="Title"
                            initial={{opacity:0}}
                            animate={{opacity:1}}
                            transition={{duration:0.5,delay:1.5}}
                        >
                            <h1><b>RUDRAKSH</b> ASSOCIATES</h1>
                            <h2>Govt. Registered Composite Contractors</h2>
                        </motion.div>
                        <motion.div className="Title-info"
                            initial={{opacity:0}}
                            animate={{opacity:1}}
                            transition={{duration:0.5,delay:1.5}}
                        >
                            <h1>SPECIALISE IN:</h1>
                            <p>Internal Electrification | Erection and maintenance of D.G. Set | Rising Mains | Bust Duct | Servc Stabilizer | H.T./L.T. Panel | Fire Fighting & Fire Alarm System Etc.</p>
                        </motion.div>
                        <motion.div className="buttons"
                            initial={{opacity:0}}
                            animate={{opacity:1}}
                            transition={{duration:0.5,delay:1.5}}
                        >
                        <Link to="/works"><button className="GetinTouch">See Our Work</button></Link>
                        <Link to="/contactus"><button className="GetinTouch">Get in Touch</button></Link>
                        </motion.div>
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
                    <h3 className="banner reveal">Our purpose is to improve people’s lives through building the facilities and infrastructure that communities need</h3>
                </div>
                <News/>
                <Gallery/>
                <div className="Image-Banner-2">
                    {/* <img src="Images/banner1.jpg"/> */}
                    <h3 className="banner reveal">Our purpose is to improve people’s lives through building the facilities and infrastructure that communities need</h3>
                </div>
            <div className="footer">
                <Footer/>
            </div>
            
        </div>
    )
}
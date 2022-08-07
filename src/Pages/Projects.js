import React from "react"
import { useNavigate } from "react-router-dom"
import Footer from "./Components/Footer"
import Navbar from "./Components/Navbar.js"
import { motion } from "framer-motion";
import "./Components/styles/ourwork.css"
export default function Projects(){
    window.onload=()=>{
        const transition_el=document.querySelector(".transition");
        setTimeout(()=>{
          transition_el.classList.remove('is-active');
        },500)
    }
    document.title="Rudraksh Associates | Works";

    const navigate=useNavigate();
    function Name(event){
        const{className}=event.target
        navigate({
            pathname:'/article',
            search:`${className}`
        })
    }
    return(
        <div onLoad={window.scrollTo(0,0)}>
            <motion.div className="trans-enter"
                initial={{ y:0}}
                animate={{y:"-120vh"}}
                transition={{duration:1,delay:1 }}
            ></motion.div>
            <motion.div className="trans-exit"
                initial={{x:"-100vw"}}
                exit={{ x:0}}
                animate={{x:"-100vw"}}
                transition={{duration:0.5}}
            ></motion.div>

            <Navbar/>
            <div className="Work-Header">
                <div className="Work-Head-Content">
                    <h1>Our Work</h1>
                    <hr></hr>

                    <h3>Some of Our most popular and Big projects that show case our abilities, ethics and our work experience</h3>
                </div>
            </div>
            <div className="Case-Studies">
                    <div className="card-case">
                        <div>
                            <h2  onClick={Name} className="Work-1">The School Building Project</h2>
                           <img onClick={Name} className="Work-1" src="Images/work1.jpg"></img>
                           <h4 onClick={Name} className="Work-1">The School Building Project was completed under Delhi Government in New Delhi. We have also participated as subordinates of Government Civil contractors</h4> 
                        </div>
                        <div>
                            <h2 onClick={Name} className="Work-2">LOREM IPSUM</h2>
                            <img onClick={Name} className="Work-2" src="Images/work2.jpg"></img>
                           <h4 onClick={Name} className="Work-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequatLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</h4> 
                        </div>
                        <div>
                            <h2  onClick={Name} className="Work-3">LOREM IPSUM</h2>
                            <img onClick={Name} className="Work-3" src="Images/work1.jpg"></img>
                           <h4 onClick={Name} className="Work-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequatLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</h4> 
                        </div>
                        <div>
                            <h2  onClick={Name} className="Work-4">LOREM IPSUM</h2>
                            <img onClick={Name} className="Work-4" src="Images/work2.jpg"></img>
                           <h4  onClick={Name} className="Work-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequatLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</h4> 
                        </div>
                    </div>
            </div>
            <div className="footer">
                <Footer/>
            </div>
        </div>
    )
}
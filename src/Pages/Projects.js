import React from "react"
import { useNavigate } from "react-router-dom"
import Footer from "./Components/Footer"
import Navbar from "./Components/Navbar.js"
import { motion } from "framer-motion";
import "./Components/styles/ourwork.css"
import Loader from "./Components/Loader";
export default function Projects(){
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
            ><Loader/></motion.div>
            <motion.div className="trans-exit"
                initial={{x:"-100vw"}}
                exit={{ x:0}}
                animate={{x:"-100vw"}}
                transition={{duration:0.5}}
            ><Loader/></motion.div>

            <Navbar/>
            <div className="Work-Header">
                <motion.div className="Work-Head-Content"
                    initial={{opacity:0}}
                    animate={{opacity:1}}
                    transition={{duration:0.5,delay:1.5}}
                >
                    <h1>Our Work</h1>
                    <hr></hr>

                    <h3>Some of Our most popular and Big projects that show case our abilities, ethics and our work experience</h3>
                </motion.div>
            </div>
            <div className="Case-Studies">
                    <motion.div className="card-case"
                        initial={{opacity:0}}
                        animate={{opacity:1}}
                        transition={{duration:0.5,delay:1.8}}
                    >
                        <motion.div className="reveal"
                             initial={{opacity:0}}
                             animate={{opacity:1}}
                             transition={{duration:0.5,delay:1.8}}
                        >
                            <h2  onClick={Name} className="Work-1">The School Building Project</h2>
                           <img onClick={Name} className="Work-1" src="Images/work1.jpg"></img>
                           <h4 onClick={Name} className="Work-1">The School Building Project was completed under Delhi Government in New Delhi. We have also participated as subordinates of Government Civil contractors</h4> 
                        </motion.div>
                        <div className="reveal">
                            <h2 onClick={Name} className="Work-2">LOREM IPSUM</h2>
                            <img onClick={Name} className="Work-2" src="Images/work2.jpg"></img>
                           <h4 onClick={Name} className="Work-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequatLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</h4> 
                        </div>
                        <div className="reveal">
                            <h2  onClick={Name} className="Work-3">LOREM IPSUM</h2>
                            <img onClick={Name} className="Work-3" src="Images/work1.jpg"></img>
                           <h4 onClick={Name} className="Work-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequatLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</h4> 
                        </div>
                        <div className="reveal">
                            <h2  onClick={Name} className="Work-4">LOREM IPSUM</h2>
                            <img onClick={Name} className="Work-4" src="Images/work2.jpg"></img>
                           <h4  onClick={Name} className="Work-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequatLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</h4> 
                        </div>
                    </motion.div>
            </div>
            <div className="footer">
                <Footer/>
            </div>
        </div>
    )
}
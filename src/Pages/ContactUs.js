import React from "react"
import Footer from "./Components/Footer"
import Navbar from "./Components/Navbar"
import { motion } from "framer-motion";
import "./Components/styles/contactus.css"
import Loader from "./Components/Loader";
export default function ContactUs(){
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
    document.title="Rudraksh Associates | Contact Us";

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

                <Navbar/>
                <div className="CU-Container">
                    <div className="CU-Header">
                        <motion.h2
                            initial={{opacity:0}}
                            animate={{opacity:1}}
                            transition={{duration:0.5,delay:1.5}}
                        >We love meeting new people and helping them develop their ideas into life</motion.h2>
                    </div>
                    <div className="CU-Content">
                        <motion.div
                            initial={{opacity:0}}
                            animate={{opacity:1}}
                            transition={{duration:0.5,delay:1.2,ease:"easeInOut"}}
                        >
                            <div className="image-replacement-1" ></div>
                            <div  className="image-replacement-2"></div>
                        </motion.div>
                        <div className="CU-para reveal">
                            <h2><b>PHONE: </b>+919818321006 , +919810536966</h2>
                            <h2><b>EMAIL : </b>adhirajconstructions2018@gmail.com</h2>
                        </div>
                        
                        <div className="CU-form">
                            <form action="mailto:rudrakshconstructions@gmail.com?subject=Mail from website" method="post" enctype="text/plain" className="reveal">
                                <input type="hidden" name="_captcha" value="false"/>
                                <div>
                                    <input
                                        type="text"
                                        placeholder="First Name"
                                        />
                                        <input
                                        type="text"
                                        placeholder="Last Name"
                                    />
                                    {/* <input type="hidden" name="_autoresponse" value="Thanks for Contacting Us!. We will look what you had to say. For any further information just send an email at the same email address."></input> */}
                                    
                                </div>
                                
                                <input
                                    name="number"
                                    required
                                    type="number"
                                    placeholder="Phone Number"
                                />
                                
                                <input
                                    name="email"
                                    type="email"
                                    placeholder="Email Address"
                                />
                                <textarea
                                    name="message"
                                    type="text"
                                    placeholder="Message"
                                ></textarea>
                                <br></br>
                                <button>Get in Touch</button>

                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer">
                <Footer/>
            </div>
        </div>
    )
}
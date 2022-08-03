import React from "react"
import { useNavigate} from "react-router-dom"
import Footer from "./Components/Footer"
import Nav from "./Components/WhiteBGNav.js"
import { motion } from "framer-motion";
import "./Components/styles/about.css"
export default function FAQ(){
    window.onload=()=>{
        const transition_el=document.querySelector(".transition");
        setTimeout(()=>{
          transition_el.classList.remove('is-active');
        },500)
    }
    document.title="Rudraksh Associates | About";
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
            <motion.div 
                    initial={{ 
                        position: "fixed",
                        top: 0,
                        width: "100%",
                        left: 0,
                        right: 0,
                        bottom: 0,
                        zIndex: 101,
                        backgroundColor:"#892be2",
                        
                        }}
                    animate={{bottom:"100%"}}
                    transition={{ delay: 1,duration:1 }}
                    exit={{position: "fixed",
                    top: 0,
                    width: "100%",
                    left: 0,
                    right: 0,
                    bottom: 0,
                    zIndex: 101,
                    backgroundColor:"#892be2",
                    }}
                ></motion.div>

            <div className="about-Container">
                <Nav/>
                <motion.div className="about-Header"
                    initial={{translateY:"20%",opacity:0,}}
                    animate={{translateY:0,opacity:1}}
                    transition={{duration:0.8,delay:2,ease:"easeInOut"}}
                >
                    <h1>Years of Development Through Our Services</h1>
                    <p>Rudraksh Associates had paved way for their customers with their services in electrical and construction field for over a decade, and will continue to do so in the future across the country.</p>
                </motion.div>
                <motion.div className="our-Story"
                    initial={{opacity:0}}
                    animate={{opacity:1}}
                    transition={{duration:0.5,delay:1.8}}
                >
                    <div>
                        <h3>Our Story</h3>
                        <h1>Creating, Developing and Evolving</h1>
                        <p><b>Rudraksh Associates</b> was created by <b>Mr. Vishal Sharma</b>, the current <b>CEO</b> of the same in 2003. Initially we only provided services for Lift and ET Installation.But over time , we have expanded into providing many other services as well.All included in the service section.</p>  
                    </div>
                    <div className="Story-Image"></div>
                </motion.div>
                <div className="about-values-div">
                <motion.div className="about-values"
                    initial={{translateY:"100%",opacity:0}}
                    animate={{translateY:0,opacity:1}}
                    transition={{duration:2,delay:1.5,ease:"easeInOut"}}
                >
                    <div>
                        <img src="Images/mission.png"></img>
                        <h2>MISSION</h2>
                        <p>To create video streaming and analytics solutions that are used daily by the world’s largest and most innovative enterprises, seeking to maximize video quality of experience with minimal network impact.</p>
                    </div>
                    <div>
                        <img src="Images/vision.png"></img>
                        <h2>VISION</h2>
                        <p>Started as a spin-off in 2007 from the Swedish Institute for Computer Science and the Royal Institute of Technology in Stockholm, we maintain a strong focus on research and development for enterprise video streaming solutions.</p>
                    </div>
                    <div>
                        <img src="Images/values.png"></img>
                        <h2>VALUES</h2>
                        <p>Innovation, customer centricity, and empowerment drive our team to succeed. We are constantly advancing our technology, building for the customer, and trusting and encouraging teammates to do their very best work.</p>
                    </div>
                </motion.div>
                </div>
                <div className="about-articles">
                    <motion.h3
                        initial={{translateY:"10%",opacity:0,}}
                        animate={{translateY:0,opacity:1}}
                        transition={{duration:0.8,delay:2,ease:"easeInOut"}}
                    >Articles on Us</motion.h3>
                    <motion.div className="article-white"
                        initial={{translateY:"10%",opacity:0,}}
                        animate={{translateY:0,opacity:1}}
                        transition={{duration:0.8,delay:2,ease:"easeInOut"}}
                    >
                        <div>
                            {/* Images */}
                            <a onClick={Name}><p className="News-1">Lorem ipsum dolor sit amet,</p></a>
                        </div>
                        <div>
                            {/* Images */}
                            <a onClick={Name}><p className="News-2">Lorem ipsum dolor sit amet,</p></a>
                        </div>
                        <div>
                            {/* Images */}
                            <a onClick={Name}><p className="News-3">Lorem ipsum dolor sit amet,</p></a>

                        </div>
                    </motion.div>
                    <motion.div className="article-color"
                        initial={{translateY:"10%",opacity:0,}}
                        animate={{translateY:0,opacity:1}}
                        transition={{duration:0.8,delay:2,ease:"easeInOut"}}
                    >
                        <div>
                            {/* Images */}
                            <a onClick={Name}><p className="News-4">Lorem ipsum dolor sit amet,</p></a>

                        </div>
                        <div>
                            {/* Images */}
                            <a onClick={Name}><p className="News-5">Lorem ipsum dolor sit amet,</p></a>

                        </div>
                        <div>
                            {/* Images */}
                            <a onClick={Name}><p className="News-6">Lorem ipsum dolor sit amet,</p></a>

                        </div>

                    </motion.div>
                </div>
                <motion.div className="our-Story"
                    initial={{opacity:0}}
                    animate={{opacity:1}}
                    transition={{duration:0.5,delay:1.5}}
                >
                       
                        <div className="Carrer-Image">
                        </div>
                        <div>
                            <h3>Carrer</h3>
                            <h1>Join our Team !</h1>
                            <p>We are a group of dedicated minds who are work together to inspire. Find your fit among those working to amplify change-makers via incredible video experiences.We seek passionate individuals who can turn their experience into benefits.If interested join us by <b>CONTACTING US</b>. </p>  
                        </div>
                </motion.div>
                <div className="about-Insights-div">
                <motion.div className="about-Insights"
                    initial={{translateY:"10%",opacity:0,}}
                    animate={{translateY:0,opacity:1}}
                    transition={{duration:0.8,delay:2,ease:"easeInOut"}}
                >
                    <h3>Insights</h3>
                    <h1>Inside<br></br> RUDRAKSH ASSOCIATES</h1>
                    <div>
                        <div onClick={Name} className="Inside">
                                <img src="Images/inside.jpg" className="Inside"/>
                                <h2 className="Inside">Our Approach: To provide the Best product</h2>
                                <p className="Inside">We try to provide the best services we can with the best possible material at reasonable price, to reduce the amount of discomfort to the customer in the future.</p>
                        </div>
                        <div  onClick={Name} className="Around">
                                <img src="Images/around.jpg" className="Around"/>
                                <h2 className="Around">Why Us? : Because we provide regular customer interaction</h2>
                                <p className="Around">We maintain transperancy with our customer and make them aware how things are going , so as to let them know the progress. </p>

                        </div>
                        <div onClick={Name} className="People">
                                <img src="Images/people.jpg" className="People"/>
                                <h2  className="People" >Our Culture: To Believe in Delegation</h2>
                                <p className="People">We believe in Meeting new people and Delegating task, so that the customer can get the result as fast as possible with least due possible.</p>

                        </div>
                    </div>
                </motion.div>
                </div>
                <motion.div className="about-ending"
                    initial={{opacity:0}}
                    animate={{opacity:1}}
                    transition={{duration:0.5,delay:1.5}}
                >
                    <p id="end-1">“Nothing in this world is more simple and more cheap than making cities that provide better for people.”     – Jan Gehl</p>
                    <p id="end-2">“Nothing in this world is more simple and more cheap than making cities that provide better for people.”     – Jan Gehl</p>
                </motion.div>
            </div>
            <div className="footer">
                <Footer/>   
            </div>
        </div>
    )
}
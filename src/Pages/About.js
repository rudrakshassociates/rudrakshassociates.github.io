import React from "react"
import { useNavigate} from "react-router-dom"
import Footer from "./Components/Footer"
import Navbar from "./Components/Navbar"
import "./Components/styles/about.css"
export default function FAQ(){
    const navigate=useNavigate();
    function Name(event){
        const{className}=event.target
        navigate({
            pathname:'/article',
            search:`${className}`
        })
    }
    return(
        <div>
            <div className="about-Container">
                <Navbar/>
                <div className="about-Header">
                    <h1>Years of Empowering Enterprise Through Our Services</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                </div>
                <div className="our-Story">
                    <div>
                        <h3>Our Story</h3>
                        <h1>Innovation from the very start</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>  
                    </div>
                    <div className="Story-Image">
                        LOREM IPSUM
                    </div>
                </div>
                <div className="about-values">
                    <div>
                        {/* Images */}
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur</p>
                    </div>
                    <div>
                        {/* Images */}
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur</p>
                    </div>
                    <div>
                        {/* Images */}
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur</p>
                    </div>
                </div>
                
                <div className="about-articles">
                    <h3>Articles on Us</h3>
                    <div className="article-white">
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
                    </div>
                    <div className="article-color">
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

                    </div>
                </div>
                <div className="our-Story">
                       
                        <div className="Story-Image">
                            LOREM IPSUM
                        </div>
                        <div>
                            <h3>Carrer</h3>
                            <h1>Join our Team !</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>  
                        </div>
                </div>
                <div className="about-Insights">
                    <h3>Insights</h3>
                    <h1>Inside<br></br> RUDRAKSH ASSOCIATES</h1>
                    <div>
                        <div>
                                {/* Images */}
                                <a onClick={Name}><p className="Inside">Lorem ipsum dolor sit amet,</p></a>
                        </div>
                        <div>
                                {/* Images */}
                                <a onClick={Name}><p className="Around">Lorem ipsum dolor sit amet,</p></a>

                        </div>
                        <div>
                                {/* Images */}
                                <a onClick={Name} ><p className="People">Lorem ipsum dolor sit amet,</p></a>

                        </div>
                    </div>
                </div>
                <div className="about-ending">
                        <img/>
                        <p>LOREM IPSUM TO LOREM IPSUM</p>
                </div>
            </div>
            <div className="footer">
                <Footer/>   
            </div>
        </div>
    )
}
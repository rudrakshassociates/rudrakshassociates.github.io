import React from "react"
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import ContactUs from "./ContactUs";
import NotFound from "./NotFound";
import Home from "./Home";
import About from "./About";
import "../style.css"
import Projects from "./Projects";
import Article from "./Article";
import { AnimatePresence } from "framer-motion";
export default function AnimatedRoutes(){
    const location=useLocation();
  return(
    <AnimatePresence>
            <Routes location={location} key={location.pathname}>
                <Route  path="/" element={<Home/>}/>
                <Route  path="/contactus" element={<ContactUs/>}/>
                <Route  path="/about" element={<About/>}/>
                <Route  path="/works" element={<Projects/>}/>
                <Route  path="/article" element={<Article/>}/>
                <Route path="*" element={<NotFound/>} />
            </Routes>
    </AnimatePresence>
  )
}

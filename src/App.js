import React from "react"
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import ContactUs from "./Pages/ContactUs";
import NotFound from "./Pages/NotFound";
import Home from "./Pages/Home";
import FAQ from "./Pages/FAQ";
import "./style.css"
import Gallery from "./Pages/Gallery";
import Ourservices from "./Pages/OurServices";
import Projects from "./Pages/Projects";
export default function App(){
  return(
    <div>
      <Router>
            <Routes>
                <Route  path="/" element={<Home/>}/>
                <Route  path="/contactus" element={<ContactUs/>}/>
                <Route  path="/faq" element={<FAQ/>}/>
                <Route  path="/gallery" element={<Gallery/>}/>
                <Route  path="/services" element={<Ourservices/>}/>
                <Route  path="/projects" element={<Projects/>}/>
                <Route path="*" element={<NotFound/>} />
            </Routes>
        </Router>
    </div>
  )
}

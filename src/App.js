import React from "react"
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import ContactUs from "./Pages/ContactUs";
import NotFound from "./Pages/NotFound";
import Home from "./Pages/Home";
import About from "./Pages/About";
import "./style.css"
import Projects from "./Pages/Projects";
import Article from "./Pages/Article";
export default function App(){
  return(
    <div>
      <Router>
            <Routes>
                <Route  path="/" element={<Home/>}/>
                <Route  path="/contactus" element={<ContactUs/>}/>
                <Route  path="/about" element={<About/>}/>
                <Route  path="/works" element={<Projects/>}/>
                <Route  path="/article" element={<Article/>}/>
                <Route path="*" element={<NotFound/>} />
            </Routes>
        </Router>
    </div>
  )
}

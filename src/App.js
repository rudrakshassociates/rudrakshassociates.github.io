import React from "react"
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import ContactUs from "./Pages/ContactUs";
import NotFound from "./Pages/NotFound";
import Home from "./Pages/Home";
export default function App(){
  return(
    <div>
      <Router>
            <Routes>
                <Route  path="/" element={<Home/>}/>
                <Route  path="/contactus" element={<ContactUs/>}/>
                <Route path="*" element={<NotFound/>} />
            </Routes>
        </Router>
    </div>
  )
}

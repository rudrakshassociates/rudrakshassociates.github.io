import React from "react"
import {
  BrowserRouter as Router,
} from "react-router-dom";
import "./style.css"
import AnimatedRoutes from "./Pages/AnimatedRoutes";
export default function App(){

  return(
    <div>
      <Router>
            <AnimatedRoutes/>
        </Router>
    </div>
  )
}

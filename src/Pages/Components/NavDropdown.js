import React from "react"
import "./styles/Nav-dropdown.css"
export default function Dropdown(){
    const [about,setabout]=React.useState(false);
    const [show,setshow]=React.useState(false);
    function scrolltoValues(){
        if(window.location.pathname=="/about"){
            window.scrollTo(0,850);
        }
    }
    function scrolltoInsights(){
        if(window.location.pathname=="/about"){
            window.scrollTo(0,2700);
        }
    }
    function scrolltoCarrer(){
        if(window.location.pathname=="/about"){
            window.scrollTo(0,2100);
        }
    }
    const changecolor=()=>{
        if(window.scrollY>200 ||(window.screenY!=0 &&window.screenX)){
            setshow(true)
        }else{
            setshow(false)
        }
    }
    function scrolltoStory(){
        if(window.location.pathname=="/about"){
            window.scrollTo(0,400);
        }
    }
    const changetextcolor=()=>{
        if(window.location.pathname=="/about"){
            setabout(true);
        }else{
            setabout(false);
        }
    }
    window.addEventListener('load',changetextcolor);
    window.addEventListener('scroll', changecolor);
    return (
        <div className="dropdown">
            <button className={show?"N-dropbtn-nav":"N-dropbtn"}>About</button>
            <div className="dropdown-content">
                <div>
                    <li onClick={scrolltoStory}>Our Story</li>
                    <li onClick={scrolltoCarrer}>Carrer</li>
                </div>
                <div>
                    <li onClick={scrolltoInsights}>Insights</li>
                    <li onClick={scrolltoValues}>Our Values</li>
                </div>
            </div>

        </div>
    )
}
import React from "react"
import "./styles/menu.css"
import {FiMenu} from "react-icons/fi"
export default function Menubar(){
    const [show,setshow]=React.useState(false);
    const[menubar,setmenubar]=React.useState(false);
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
    function menu(){
        setmenubar(!menubar);
    }
    window.addEventListener('scroll', changecolor);
    return (
        <div className="dropdown">
            <button className={menu?`${show?"dropbtn-nav":"dropbtn"}`:`${show?"dropbtn-nav":"dropbtn"}`} onClick={menu}><FiMenu/></button>
            <ul>
                    <li onClick={scrolltoStory}>Our Story</li>
                    <li onClick={scrolltoCarrer}>Carrer</li>
                    <li onClick={scrolltoInsights}>Insights</li>
                    <li onClick={scrolltoValues}>Our Values</li>
            </ul>

        </div>
    )
}
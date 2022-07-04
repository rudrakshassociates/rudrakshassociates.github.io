import React from "react"
import "./styles/dropdown.css"
export default function Dropdown(){
    return (
        <div className="dropdown">
            <button className="dropbtn">About</button>
            <div class="dropdown-content">
                <div>
                    <a href="#">Our Story</a>
                    <a href="#">Carrer</a>
                </div>
                <div>
                    <a href="#">Insights</a>
                    <a href="#">Our Values</a>
                </div>
            </div>

        </div>
    )
}
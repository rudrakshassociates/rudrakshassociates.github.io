import React from "react";
import ServiceList from "./List/ServiceList.js"
import "./styles/services.css"
export default function Services(){
    const Card=ServiceList.map(Data=>{
        return(
            <div className="service-card-box">
                <img src={Data.icon}/>
                <h3>{Data.Title}</h3>
                <p>{Data.info}</p>
            </div>
        )
    })
    return(
        <div className="service-container">
            <div className="our-services">
                <div className="service-info reveal">
                    <h1>SERVICES</h1>
                    <hr></hr>
                </div>
            </div>
            <div className="service-box reveal">
                {Card}
            </div>
        </div>
    )
}
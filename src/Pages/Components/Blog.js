import React from "react";
import ReactDOM from "react-dom";
export default function Blog(props){
    const location=window.location;
    const Contents=props.Content.map(Info=>{
        return(
            <div className="Blog-Content">
                <h2>{Info.subtitle}</h2>
                <p>{Info.para}</p>
            </div>
        )
    })
    return (
        <div className="Blog">
            {props.name==location.search && <div className="Content">
                <h1>{props.Title}</h1>
                {Contents}
            </div>}
        </div>
    )
}
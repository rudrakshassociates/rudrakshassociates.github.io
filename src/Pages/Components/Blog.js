import React from "react";
export default function Blog(props){
    const Contents=props.Content.forEach(Data=>{
        return (
            <div>
                <h2>{Data.subtitle}</h2>
                <p>{Data.para}</p>
            </div>
        )
    })
    return (
        <div className="Blog">
            {props.id=="Inside" && <div className="Content">
                <h1>{props.Title}</h1>
                {Contents}
            </div>}
        </div>
    )
}
import React from "react"
import "./styles/modal.css"
export default function Modal(props){
    return (
        <div className="modal">
            <button className="Close"onClick={()=>{
                props.closeModal(false)
            }}>X</button>
            <div  className="center">
                <img src={props.image}></img>
            </div>
        </div>
    )
}
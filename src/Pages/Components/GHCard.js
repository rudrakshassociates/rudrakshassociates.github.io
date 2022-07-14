import React from "react"
import Modal from "./modal.js";
export default function GHCard(props){
    return (
        <img src={props.image} onClick={props.open}></img>
    )
}
import React from "react"

export default function Dice(props) {
    
    return (
        <button 
            onClick={() => props.isHeld ? null : props.holdFn(props.id)}
            className={props.isHeld === true ? "dice-held" : "dice"}
        >{props.value}</button>
    )
}
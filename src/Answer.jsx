import React from "react";
import "./answer.css"
export default function Answer(props)
{
    return(
        <div className="output">
            <input type="text" value={props.value}/>
        </div>

    )
}
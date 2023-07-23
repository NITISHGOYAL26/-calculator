import React from "react";
import "./button.css"

export default function Button(prps)
{
    return(
        <div className={prps.cl}>
            <input className={prps.cl1} type="button" value={prps.val}  onClick={prps.handelClick}/>
        </div>
    )
}
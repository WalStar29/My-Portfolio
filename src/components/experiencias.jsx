import React from 'react'
import "./experiencias.css"
function Experiencias({name, icon}) {
    return (
        <div className="logos">
            <h4>{name}</h4>
            <img src={icon} alt="" />
        </div>
    )
}

export default Experiencias
import React from 'react'
import "./tecnologia.css"
function Tecnologia({name, img}) {
    return (
        <div className="framework">
            <h4>{name}</h4>
            <img src={img} alt="" />
        </div>
    )
}

export default Tecnologia
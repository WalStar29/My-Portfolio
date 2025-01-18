import React from 'react'
import "./Informacion.css"

function Informacion({tilte, image, informacion}) {
    return (
        <div className='Container'>
            <div className="contenedor">
                <div className='top'>
                    <h1>{tilte}</h1>
                    <img src={image} alt="" />
                </div>

                <div className='informacion'>
                    {informacion}
                </div>
            </div> 
        </div>
    )
}

export default Informacion
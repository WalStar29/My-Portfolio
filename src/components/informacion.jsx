import React from 'react'
import "./informacion.css"

function Informacion({tilte, image, informacion}) {
    return (
        <div className='Container'>
            <div className="contenedor">
                <div className='top'>
                    <h1>{tilte}</h1>
                    {informacion}
                </div>

                <div className='imagen'>
                    <img src={image} alt="imagen" />
                </div>
            </div> 
        </div>
    )
}

export default Informacion
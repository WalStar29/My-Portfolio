import React from 'react'
import { useState } from 'react'
import "./showHide.css"

function ShowHide({despcripcion}) {
    const [show, setShow] = useState(false)

    const handleClick = (event) => {
        setShow(!show);
    }

    return (
        <div className='boton'>
            <button onClick={handleClick}>{show ? "Ocultar descripcion" : "Mostrar descripcion"}</button>
            {show && <h4>{despcripcion}</h4>}
        </div>
    )
}

export default ShowHide;
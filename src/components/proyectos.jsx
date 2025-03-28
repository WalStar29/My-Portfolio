import React from 'react'
import "./proyectos.css"

// Componentes
import ShowHide from './showHide'
import { FaGithub, FaGlobe } from 'react-icons/fa';

function Proyectos({name, imagen, ulr, ulr2, descripcion}) {
    return (
        <div className="Pro">
            <div className="infProyect">
                <h2>{name}</h2>
                <img src={imagen} />
                <div className="iconos">
                    <a href={ulr}><FaGlobe/></a>
                    <a href={ulr2}><FaGithub/></a>
                </div>
                

            </div>
            
            <div className="descripProyect">
                <ShowHide despcripcion={descripcion} />
            </div>
        </div>
    )
}

export default Proyectos
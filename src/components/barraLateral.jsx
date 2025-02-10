import React from 'react';
import "./barraLateral.css";

function BarraLateral ({ AcercaDeMi, Pilas, Proyectos, Contacto, id, id2, id3, id4}) {
    return (
        <label className='BarraLateral'>
            <form className='Despliegue'>
                <input type="checkbox" className='check' />

                <div className="toggle">
                    <span className="top_line common"></span>
                    <span className="middle_line common"></span>
                    <span className="bottom_line common"></span>
                </div>

                <div className="slide">
                    <ul>
                        <li><a className="id" href={id}>{AcercaDeMi}</a></li>
                        <li><a className="id" href={id2}>{Pilas}</a></li>
                        <li><a className="id" href={id3}>{Proyectos}</a></li>
                        <li><a className="id" href={id4}>{Contacto}</a></li>
                    </ul>
                </div>
            </form>
        </label>
    );
}
export default BarraLateral;

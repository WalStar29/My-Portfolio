import './nav.css'
import React from 'react';

function Nav ({ AcercaDeMi, Pilas, Proyectos, Contacto, id, id2, id3, id4}) {
    return (
        <nav>
            <ul className='nav'>
                <li><a href={id}>{AcercaDeMi}</a></li>
                <li><a href={id2}>{Pilas}</a></li>
                <li><a href={id3}>{Proyectos}</a></li>
                <li><a href={id4}>{Contacto}</a></li>
            </ul>
        </nav>   
    );
}
export default Nav;

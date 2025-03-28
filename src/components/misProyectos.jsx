import React, { useEffect, useRef, useState } from 'react';
import './misProyectos.css'

// Componentes
import Proyectos from './proyectos';

// Datos
import proyectos from '../data/proyectos';



function MisProyectos() { // Renamed to start with an uppercase letter
    // Codigo de atividad del hover al hacer scroll
    const contenedorRef = useRef(null); // Referencia al contenedor
    const [isVisible, setIsVisible] = useState(false); // Estado para controlar la visibilidad del contenedor
            
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsVisible(entry.isIntersecting); // Cambia el estado si el contenedor es visible
            },

            { threshold: 0.1 } // El 50% del contenedor debe estar visible
        );
            
        if (contenedorRef.current) {
            observer.observe(contenedorRef.current); // Observa el contenedor
        }
            
        return () => {
            if (contenedorRef.current) {
                 observer.unobserve(contenedorRef.current); // Deja de observar el contenedor al desmontarlo
            }
        };
    }, []);

    const proyectosList = proyectos.map((p) => (
        <Proyectos
            name={p.name} imagen={p.imagen} ulr={p.ulr} ulr2={p.ulr2} descripcion={p.descripcion}
        />
    ));

    return (
        <div className="parte4">
            <div 
                ref={contenedorRef}
                className={`cont4 ${isVisible ? 'inf4' : ''}`}
            >
                <h1>Mis Proyectos</h1>
                <div className="MisProyectos">
                    {proyectosList}
                </div>
            </div>
        </div>
    );
}

export default MisProyectos;

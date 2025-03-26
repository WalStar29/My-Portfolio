import React, { useEffect, useRef, useState } from 'react';
import './misProyectos.css'
import Proyectos from './proyectos';
import proyectos from '../data/proyectos';



function MisProyectos() { // Renamed to start with an uppercase letter
    const contenedorRef = useRef(null); // Reference to the container
    const [isVisible, setIsVisible] = useState(false); // State to control visibility

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsVisible(entry.isIntersecting); // Update visibility state
            },
            { threshold: 0.2 } // 20% of the container should be visible
        );

        if (contenedorRef.current) {
            observer.observe(contenedorRef.current); // Observe the container
        }

        return () => {
            if (contenedorRef.current) {
                observer.unobserve(contenedorRef.current); // Stop observing on unmount
            }
        };
    }, []);

    const proyectosList = proyectos.map((p) => (
        <Proyectos
            name={p.name}
            imagen={p.imagen}
            ulr={p.ulr}
            ulr2={p.ulr2}
            descripcion={p.descripcion}
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

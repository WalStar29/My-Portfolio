import React, { useEffect, useRef, useState } from 'react';
import "./informacion.css"

function Informacion({tilte, image, informacion}) {
        const contenedorRef = useRef(null); // Referencia al contenedor
        const [isVisible, setIsVisible] = useState(false); // Estado para controlar la visibilidad del contenedor
        
        useEffect(() => {
            const observer = new IntersectionObserver(
            ([entry]) => {
                setIsVisible(entry.isIntersecting); // Cambia el estado si el contenedor es visible
            },
            { threshold: 0.5 } // El 50% del contenedor debe estar visible
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

    return (
        <div className="parte1">
            <div 
                ref={contenedorRef}
                className={`cont ${isVisible ? 'info' : ''}`}
            >
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
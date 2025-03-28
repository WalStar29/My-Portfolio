import React, { useEffect, useRef, useState } from 'react';
import "./descripcionExperiencia.css"

// Componentes
import ImageSlider from '../components/imagenSlider';

function DescripcionExperiencias({descripcionExperien}) {
    // Codigo de atividad del hover al hacer scroll
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
        <div className='parte2'>
            <div 
                ref={contenedorRef}
                className={`cont2 ${isVisible ? 'info2' : ''}`}
            >
                <div className="descripcion">
                    <h1>Experiencias en el area del desarrollo</h1>
                    {descripcionExperien}
                </div>
                
                <div className="sliderr">
                    <ImageSlider imagen="https://github.com/WalStar29/My-Portfolio/blob/main/public/Logos/astro.png?raw=true" imagen2="https://github.com/WalStar29/My-Portfolio/blob/main/public/Logos/c++.png?raw=true" imagen3="https://github.com/WalStar29/My-Portfolio/blob/main/public/Logos/html.png?raw=true" imagen4="https://github.com/WalStar29/My-Portfolio/blob/main/public/Logos/mysql.png?raw=true" imagen5="https://github.com/WalStar29/My-Portfolio/blob/main/public/Logos/JavaScript.png?raw=true"/>
                </div>
            </div>
        </div>
    )
}

export default DescripcionExperiencias
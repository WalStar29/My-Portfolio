import React from 'react';
import './imagenSlider.css'; // Asegúrate de tener un archivo CSS para los estilos

const ImageSlider = ({ imagen, imagen2, imagen3, imagen4, imagen5}) => {
    return (
        <div className="slider">
            <ul>
                <li><div><img src={imagen} alt="Imagen 1" /></div></li>
                <li><div><img src={imagen2} alt="Imagen 2" /></div></li>
                <li><div><img src={imagen3} alt="Imagen 3" /></div></li>
                <li><div><img src={imagen4} alt="Imagen 4" /></div></li>
                <li><div><img src={imagen5} alt="Imagen 5" /></div></li>
            </ul>
        </div>
    );
};
export default ImageSlider;

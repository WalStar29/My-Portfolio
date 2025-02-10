import React from 'react'
import "./formulario.css"
function Formulario() {
    return (
        <form className='form' action="https://formsubmit.co/castrowalter172913@hotmail.com" method="POST">
            <label htmlFor="nombre">Nombre y Apellido</label>
            <input type="text" name='name' required />

            <label htmlFor="Indique su correo electronico">Indique su correo electronico</label>
            <input type="text" name='Correo' required/>

            <label htmlFor="Asunto">Asunto</label>
            <input type="text" name='Asunto' required/>
        
            <div className="texBot">
                <label htmlFor="Nota">Nota</label>
                <textarea name="comentarios" required></textarea>

                <input type="submit" value="Enviar" />
            </div>
            
            <input type="hidden" name='_captcha' value="false"/>
        </form>
    )
}

export default Formulario
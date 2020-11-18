import React from 'react'
import s from '../styles/contact.module.css'
const contact = () => {
    return (
        <div className={s.container}>
            <h1>Página de prueba de contacto</h1>
            <form action="">
                <label>Nombre</label>
                <input type="text" name="" id=""/>
                <label>Email</label>
                <input type="text" name="" id=""/>
                <label>Mensaje</label>
                <input type="text" name="" id=""/>
                <button>Enviar</button>
            </form>
        </div>
    )
}

export default contact

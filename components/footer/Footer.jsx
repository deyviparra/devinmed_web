import React from 'react'
import s from './Footer.module.scss'
const Footer = () => {
    return (
        <footer className={s.container}>
            <p className={s.hola}>Desarrollado por <a href="https://devinmed.com">Dev In Med S.A.S.</a></p>
        </footer>
    )
}

export default Footer

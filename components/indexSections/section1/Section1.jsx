import React from 'react'
import s from './Section1.module.css'

const Section1 = () => {
    return (
        <section className={s.container}>
            <video preload='auto' loop autoPlay='true'>
                <source  src="./assets/inicio.mp4" type="video/mp4"/>
            </video>
        </section>
    )
}

export default Section1

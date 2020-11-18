import React,{useEffect} from 'react'
import Link from 'next/link'
import s from './Header.module.css'

const Header = () => {

    useEffect(() => {
        const menuNav = document.getElementById('menu-nav')
        const menuBtn = document.getElementById('menu-bars')
        menuBtn.onclick = () => {
            if(menuNav.style.display === 'flex'){
                menuNav.style.display = 'none'
                return
            }
            menuNav.style.display = 'flex'
        }
        
        
    }, [])

    return (
        <header className={s.container}>
            <img className={s.img} src="./assets/logo-devinmed.png" alt=""/>
            <nav id='menu-nav' className={s.menu_nav}>
                <Link href='/'>
                <a>Home</a>
                </Link>
                <Link href='/services'>
                <a>Servicios</a>
                </Link>
                <Link href='/contact'>
                <a>Contacto</a>
                </Link>
            </nav>
            <i id='menu-bars' className="fas fa-bars"></i>
        </header>
    )
}

export default Header

import React, { useEffect, useState } from "react";
import Link from "next/link";
import s from "./Header.module.scss";

const Header = () => {
  const [menuBtnHook, setMenuBtnHook] = useState(null);
  const [menuNavHook, setMenuNavHook] = useState(null);

  const closeMenu = () => {
    menuNavHook.style.display = "none";
    menuBtnHook.classList.remove("fa-times");
    menuBtnHook.classList.add("fa-bars");
  };

  useEffect(async () => {
    const menuNav = document.getElementById("menu-nav");
    const menuBtn = document.getElementById("menu-bars");
    setMenuNavHook(menuNav);
    setMenuBtnHook(menuBtn);

    menuBtn.onclick = () => {
      if (menuNav.style.display === "flex") {
        closeMenu();
        return;
      }
      menuNav.style.display = "flex";
      menuBtn.classList.remove("fa-bars");
      menuBtn.classList.add("fa-times");
    };
  });

  return (
    <header className={s.container}>
      <Link href="/">
        <img className={s.img} src="./assets/logo-devinmed.png" alt="" />
      </Link>
      <nav id="menu-nav" className={s.menu_nav}>
        <Link href="/">
          <a onClick={() => closeMenu()}>Home</a>
        </Link>
        <Link href="/services">
          <a onClick={() => closeMenu()}>Servicios</a>
        </Link>
        <Link href="/contact">
          <a onClick={() => closeMenu()}>Contacto</a>
        </Link>
      </nav>
      <i id="menu-bars" className="fas fa-bars"></i>
    </header>
  );
};

export default Header;

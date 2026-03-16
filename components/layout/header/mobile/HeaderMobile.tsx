"use client";

import styles from './header-mobile.module.scss';
import Hamburger from './components/hamburger/Hamburger';
import Close from './components/close/Close';
import {useState, useEffect} from 'react';
import Menu from './components/menu/Menu';
import clsx from 'clsx';

export default function HeaderMobile({isMobile}: {isMobile: boolean}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuBtnClick = () => {
    setIsMenuOpen(prev => !prev);
  }

  useEffect(() => {
    const html = document.querySelector("html");
    if(!(html instanceof HTMLElement)) return;
    
    if(isMenuOpen) {
      html.style.setProperty("overflow-y", "hidden");
    } else {
      html.style.removeProperty("overflow-y");
    }
  }, [isMenuOpen]);

  return (
    <header className={clsx(
      styles.header,
      !isMobile && styles.hide,
      isMenuOpen && styles["menu-open"]
    )}>
      <button className={`${styles["header__menu-btn"]} cursor-target`} onClick={menuBtnClick}>
        {!isMenuOpen ? <Hamburger /> : <Close />}
      </button>
      <Menu isMenuOpen={isMenuOpen} />
    </header>
  );
}
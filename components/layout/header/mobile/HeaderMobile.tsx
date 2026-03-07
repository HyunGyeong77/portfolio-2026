"use client";

import styles from './header-mobile.module.scss';
import Hamburger from './components/hamburger/Hamburger';
import Close from './components/close/Close';
import {useState} from 'react';
import Menu from './components/menu/Menu';

export default function HeaderMobile() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuBtnClick = () => {
    setIsMenuOpen(prev => !prev);
  }

  return (
    <header className={styles.header}>
      <button className={`${styles["header__menu-btn"]} cursor-target`} onClick={menuBtnClick}>
        {!isMenuOpen ? <Hamburger /> : <Close />}
      </button>
      {isMenuOpen && <Menu />}
    </header>
  );
}
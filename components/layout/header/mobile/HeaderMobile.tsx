"use client";

import styles from './header-mobile.module.scss';
import Hamburger from './components/hamburger/Hamburger';
import Close from './components/close/Close';
import {useState} from 'react';
import Menu from './components/menu/Menu';
import clsx from 'clsx';

export default function HeaderMobile({isMobile}: {isMobile: boolean}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuBtnClick = () => {
    setIsMenuOpen(prev => !prev);
  }

  return (
    <header className={clsx(
      styles.header,
      !isMobile && styles.hide
    )}>
      <button className={`${styles["header__menu-btn"]} cursor-target`} onClick={menuBtnClick}>
        {!isMenuOpen ? <Hamburger /> : <Close />}
      </button>
      <Menu isMenuOpen={isMenuOpen} />
    </header>
  );
}
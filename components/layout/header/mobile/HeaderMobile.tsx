"use client";

import styles from './header-mobile.module.scss';
import Hamburger from './components/hamburger/Hamburger';
import Close from './components/close/Close';
import {useState, useEffect, useContext} from 'react';
import Menu from './components/menu/Menu';
import Hide from '../components/hide-button/Hide';
import {UiHideContext} from '../components/hide-button/Hide';
import clsx from 'clsx';

export default function HeaderMobile({isMobile}: {isMobile: boolean}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const uiHideContext = useContext(UiHideContext);
  const hide = uiHideContext?.uiHide && styles.hide;

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
      !isMobile && styles.hidden,
      isMenuOpen && styles["menu-open"],
      hide
    )}>
      {!isMenuOpen && <Hide />}
      <button 
        className={clsx(
          styles["header__menu-btn"],
          "cursor-target"
        )}
        onClick={menuBtnClick}
      >
        {!isMenuOpen ? <Hamburger /> : <Close />}
      </button>
      <Menu isMenuOpen={isMenuOpen} hide={hide} />
    </header>
  );
}
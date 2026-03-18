import styles from './more.module.scss';
import MoreSvg from './components/MoreSvg';
import {useContext, useState, useEffect, useRef} from 'react';
import {PageContext} from '@/components/layout/header/components/stats/Stats';
import {pageList} from '@/lib/constants/constants';
import Navigation from '@layout/footer/components/navigation/Navigation';
import {UiHideContext} from '@/components/layout/header/components/hide-button/Hide';
import clsx from 'clsx';

export default function More({animating}: {animating: boolean}) {
  const page = useContext(PageContext);
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const uiHideContext = useContext(UiHideContext);
  const animatingRef = useRef<boolean>(animating);

  useEffect(() => {
    animatingRef.current = animating;
  }, [animating]);

  const toggleClick = () => {
    if(animatingRef.current) return;

    setIsMenuOpen(prev => !prev);
  }

  useEffect(() => {
    if(!isMenuOpen) return;

    const menuClose = () => {
      setIsMenuOpen(false);
    }

    document.addEventListener("click", menuClose);
    return () => document.removeEventListener("click", menuClose);
  }, [isMenuOpen]);

  return (
    <div className={clsx(
      styles.more,
      uiHideContext?.uiHide && styles.hide
    )}>
      <button 
        id="footer-navigation-button"
        className={`${styles.more__button} ${(page !== pageList.mainMenu) && "cursor-target"} ${isMenuOpen && styles["menu-open"]}`}
        onClick={toggleClick}
        aria-haspopup="menu"
        aria-expanded={isMenuOpen}
      >
        <MoreSvg />
      </button>
      <Navigation isMenuOpen={isMenuOpen} mobile={true} />
    </div>
  );
}
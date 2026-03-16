import styles from './more.module.scss';
import MoreSvg from './components/MoreSvg';
import {useContext, useState, useEffect} from 'react';
import {PageContext} from '@/components/layout/header/components/stats/Stats';
import {pageList} from '@/lib/constants/constants';
import Navigation from '@layout/footer/components/navigation/Navigation';
import {UiHideContext} from '@/components/layout/header/components/hide-button/Hide';
import clsx from 'clsx';

export default function More() {
  const page = useContext(PageContext);
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const uiHideContext = useContext(UiHideContext);

  const toggleClick = () => {
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
        className={`${styles.more__button} ${(page !== pageList.mainMenu) && "cursor-target"} ${isMenuOpen && styles["menu-open"]}`}
        onClick={toggleClick}
      >
        <MoreSvg />
      </button>
      <Navigation isMenuOpen={isMenuOpen} />
    </div>
  );
}
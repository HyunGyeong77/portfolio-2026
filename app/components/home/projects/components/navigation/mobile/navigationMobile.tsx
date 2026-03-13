import styles from './navigation-mobile.module.scss';
import Image from 'next/image';
import SlideMenuIcon from './assets/img/slide-menu-icon.png';
import {useContext, useState, useEffect} from 'react';
import {PageContext} from '@/components/layout/header/components/stats/Stats';
import {pageList} from '@/lib/constants/constants';
import NavigationMenu from '../components/navigation-menu/NavigationMenu';
import clsx from 'clsx';

export default function NavigationMobile() {
  const page = useContext(PageContext);
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const toggleButtonClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsMenuOpen(prev => !prev);
  }

  useEffect(() => {
    if(!isMenuOpen) return;

    const menuClose = () => {
      setIsMenuOpen(false);
    }

    window.addEventListener("click", menuClose);
    return () => window.removeEventListener("click", menuClose);
  }, [isMenuOpen]);

  return (
    <div className={clsx(
      styles.navigation__wrap,
      isMenuOpen && styles["menu-open"]
    )}>
      <button 
        className={clsx(
          styles.navigation__toggle,
          (page === pageList.projects) && "cursor-target"
        )}
        onClick={toggleButtonClick}
        aria-haspopup={true}
        aria-expanded={isMenuOpen}
      >
        <Image src={SlideMenuIcon} alt="menu icon" width={24} height={12} /> 
      </button>
      {isMenuOpen && <NavigationMenu />}
    </div>
  );
}
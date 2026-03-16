import styles from './footer-desktop.module.scss';
import Navigation from '../components/navigation/Navigation';
import Arrow from './components/arrow/Arrow';
import {useContext} from 'react';
import {UiHideContext} from '../../header/components/hide-button/Hide';
import clsx from 'clsx';

export default function FooterDesktop({isDesktop}: {isDesktop: boolean}) {
  const uiHideContext = useContext(UiHideContext);

  return (
    <footer className={clsx(
      styles.footer,
      !isDesktop && styles.hidden,
      uiHideContext?.uiHide && styles.hide
    )}>
      <Navigation />
      <div className={styles["footer__arrow-box"]}>
        <Arrow content="이전" />
        <Arrow content="진행" />
      </div>
    </footer>
  );
}
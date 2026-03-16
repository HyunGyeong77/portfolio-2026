import styles from './footer-desktop.module.scss';
import Navigation from '../components/navigation/Navigation';
import Arrow from './components/arrow/Arrow';

export default function FooterDesktop({isDesktop}: {isDesktop: boolean}) {
  return (
    <footer className={`${styles.footer} ${!isDesktop && styles.hide}`}>
      <Navigation />
      <div className={styles["footer__arrow-box"]}>
        <Arrow content="이전" />
        <Arrow content="진행" />
      </div>
    </footer>
  );
}
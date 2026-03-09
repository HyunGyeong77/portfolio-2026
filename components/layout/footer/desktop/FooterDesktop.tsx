import styles from './footer-desktop.module.scss';
import Navigation from '../components/navigation/Navigation';
import Arrow from './components/arrow/Arrow';

export default function FooterDesktop() {
  return (
    <footer className={styles.footer}>
      <Navigation />
      <div className={styles["footer__arrow-box"]}>
        <Arrow content="이전" />
        <Arrow content="진행" />
      </div>
    </footer>
  );
}
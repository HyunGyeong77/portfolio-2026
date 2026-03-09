import styles from './footer-mobile.module.scss';
import Navigation from "./components/navigation/Navigation";
import ArrowKey from "./components/arrow-key/ArrowKey";

export default function FooterMobile() {
  return (
    <footer className={styles.footer}>
      <Navigation />
      <ArrowKey />
    </footer>
  );
}
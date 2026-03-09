import styles from './footer-mobile.module.scss';
import More from "./components/more/More";
import ArrowKey from "./components/arrow-key/ArrowKey";

export default function FooterMobile() {
  return (
    <footer className={styles.footer}>
      <More />
      <ArrowKey />
    </footer>
  );
}
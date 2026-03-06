import styles from './header-mobile.module.scss';
import Hamburger from './components/Hamburger';

export default function HeaderMobile() {
  return (
    <header className={styles.header}>
      <button className={styles.header__hamburger}>
        <Hamburger />
      </button>
    </header>
  );
}
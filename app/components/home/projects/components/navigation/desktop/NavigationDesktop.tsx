import styles from './navigation-desktop.module.scss';
import NavigationMenu from "../components/navigation-menu/NavigationMenu";

export default function NavigationDesktop() {
  return (
    <div className={styles.navigation__wrap}>
      <NavigationMenu />
    </div>
  );
}
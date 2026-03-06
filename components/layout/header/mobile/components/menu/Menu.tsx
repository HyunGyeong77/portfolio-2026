import styles from './menu.module.scss';
import Stats from '@layout/header/components/stats/Stats'

export default function Menu() {
  return (
    <div className={styles.menu}>
      <Stats />
    </div>
  );
}
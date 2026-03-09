import styles from './navigation.module.scss';
import More from './components/MoreSvg';

export default function Navigation() {
  return (
    <div className={styles.navigation}>
      <button 
        className={styles.navigation__more}
      >
          <More />
      </button>
    </div>
  );
}
import styles from './stats.module.scss';
import StatsIcon from '@layout/header/components/stats-icon/StatsIcon';

export default function Stats() {
  return (
    <div className={styles.stats}>
      <StatsIcon width="311px" height="158px" />
      <div className={styles.stats__content}>
        <div className={styles.stats__inner}>
          <div className={styles["stats__level-job"]}>
            <p className={styles.stats__level}>Level <span>1</span></p>
            <p className={styles.stats__job}>개발자</p>
          </div>          
        </div>
      </div>
    </div>
  );
}